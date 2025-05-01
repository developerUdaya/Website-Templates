'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const LoadingScreen = () => {
  const pathname = usePathname();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setShowLoader(true);
    document.body.classList.add('no-scroll');

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [pathname]);

  const handleExitComplete = () => {
    document.body.classList.remove('no-scroll');
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {showLoader && (
        <motion.div
          key={pathname}
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
        >
          <Image
            src="/image/justvy.webp"
            alt="JustVy Logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
