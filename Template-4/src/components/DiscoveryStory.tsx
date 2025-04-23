import { useRef, useState, useEffect } from "react";
import {
  MdPlayArrow,
  MdPause,
  MdVolumeOff,
  MdVolumeUp,
  MdFullscreen,
  MdMoreVert,
} from "react-icons/md";
import FadeInSection from "@/components/fadeInSection";

export default function DiscoveryStory() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const hideControlsTimeout = useRef<NodeJS.Timeout | null>(null);

  const formatTime = (time: number) =>
    `${Math.floor(time / 60)}:${String(Math.floor(time % 60)).padStart(2, "0")}`;

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!document.fullscreenElement && container) {
      container.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    if (videoRef.current) {
      const newTime = percent * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (hideControlsTimeout.current) clearTimeout(hideControlsTimeout.current);
    hideControlsTimeout.current = setTimeout(() => setShowControls(false), 3000);
  };

  const handleClickOutsideMenu = (e: MouseEvent) => {
    if (
      !(e.target as HTMLElement).closest("#video-menu") &&
      !(e.target as HTMLElement).closest("#video-menu-toggle")
    ) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const updateTime = () => setCurrentTime(video.currentTime);
      const setMeta = () => setDuration(video.duration);

      video.addEventListener("timeupdate", updateTime);
      video.addEventListener("loadedmetadata", setMeta);
      return () => {
        video.removeEventListener("timeupdate", updateTime);
        video.removeEventListener("loadedmetadata", setMeta);
      };
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("click", handleClickOutsideMenu);
    };
  }, []);

  return (
    <div className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Side - Title */}
          <div className="flex items-start">
            <FadeInSection>
              <h2 className="text-5xl font-serif leading-tight">
                The Discovery Story
              </h2>
            </FadeInSection>
          </div>

          <FadeInSection>
            <div className="flex flex-col justify-start space-y-6">
              <p className="text-base leading-relaxed pb-4">
                For almost three decades, Discovery has built communities that encourage both our development teams and members to dream up and create the most fun experiences imaginable. The first development in Scottsdale set the standard for a Discovery community, complete with a championship golf course, comfort stations brimming with snacks, luxurious residential offerings, five-star service, and more. Since then, each community has built on the fun from the one that came before.
              </p>

              <button
                onClick={togglePlayPause}
                className="border border-white px-6 py-2 w-fit hover:bg-white hover:text-black transition"
              >
                Play Video
              </button>
            </div>
          </FadeInSection>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative max-w-4xl mx-auto mt-20 aspect-video bg-black rounded-md overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster="/images/discovery-story.png"
          onClick={togglePlayPause}
        >
          <source src="/videos/discovery-story.mp4" type="video/mp4" />
        </video>

        {showControls && (
          <div className="absolute bottom-0 w-full bg-black/70 text-white px-4 py-2 flex flex-col gap-1">
            <div
              className="h-1 bg-gray-600 rounded cursor-pointer hover:bg-gray-400 transition-all"
              onClick={handleProgressClick}
            >
              <div
                className="h-1 bg-white rounded"
                style={{
                  width: `${(currentTime / duration) * 100 || 0}%`,
                }}
              />
            </div>

            <div className="flex justify-between items-center text-sm mt-1">
              <div className="flex items-center gap-4">
                <button onClick={togglePlayPause}>
                  {isPlaying ? <MdPause size={20} /> : <MdPlayArrow size={20} />}
                </button>
                <span className="text-xs">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center gap-4 relative">
                <button onClick={toggleMute}>
                  {isMuted ? <MdVolumeOff size={20} /> : <MdVolumeUp size={20} />}
                </button>
                <button onClick={toggleFullscreen}>
                  <MdFullscreen size={20} />
                </button>
                <button id="video-menu-toggle" onClick={() => setShowMenu(!showMenu)}>
                  <MdMoreVert size={20} />
                </button>

                {showMenu && (
                  <div
                    id="video-menu"
                    className="absolute right-0 bottom-8 bg-white text-black rounded shadow-lg p-2 text-sm space-y-1 z-10"
                  >
                    <button className="block px-4 py-1 hover:bg-gray-100 w-full text-left">
                      Share
                    </button>
                    <button className="block px-4 py-1 hover:bg-gray-100 w-full text-left">
                      Report
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {!isPlaying && (
          <button
            onClick={togglePlayPause}
            className="absolute bottom-6 right-6 bg-white text-black rounded-full px-6 py-2.5 text-base font-medium shadow-lg flex items-center gap-3"
          >
            <MdPlayArrow size={20} /> <span>Our Story</span>
          </button>
        )}
      </div>
    </div>
  );
}