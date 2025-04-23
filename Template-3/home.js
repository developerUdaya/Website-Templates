//Page refresh
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

//Navbar
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");

    function isNavbarInView() {
        const rect = navbar.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.75;
    }

    function showNavbar() {
        if (isNavbarInView()) {
            navbar.classList.add("visible");
            window.removeEventListener("scroll", showNavbar);
        }
    }

    if (isNavbarInView()) {
        setTimeout(() => navbar.classList.add("visible"), 500);
    } else {
        window.addEventListener("scroll", showNavbar);
    }
});

//Hero Section Animation
document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector(".hero-section");
    const heroContent = document.querySelector(".hero-content");
    const heroBorder = document.querySelector(".hero-border");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    heroContent.classList.add("visible");
                    heroBorder.classList.add("visible");
                }, 500);
                observer.unobserve(heroSection);
            }
        });
    }, { threshold: 0.6 });

    observer.observe(heroSection);
});

// Hero Section Slider
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.slide');
    slides[0].style.opacity = '1';
    slides[0].style.transform = 'scale(1.1)';

    const heroTitle = document.querySelector('.main-quote');
    const heroText = document.querySelector('.sub-quote');

    let currentIndex = 0;
    let slideInterval;

    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            slide.style.transform = 'scale(1)';
        });
    
        const currentSlide = slides[currentIndex];
        currentSlide.classList.add('active');

        setTimeout(() => {
            currentSlide.style.transition = 'transform 3s ease-in-out';
            currentSlide.style.transform = 'scale(1.1)';
        }, 100);
    
        heroTitle.textContent = currentSlide.dataset.quote;
        heroText.textContent = currentSlide.dataset.subquote;
    }
    

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 3000);
    }

    startAutoSlide();
    updateSlider();
});

//Who are we section
document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector('.who-are-we-section');
    const textSection = document.querySelector('.text-section-one');

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.4 && rect.bottom >= 0;
    };

    function animateNumbers(element) {
        const targetValue = parseInt(element.dataset.target);
        let currentValue = 0;
        const duration = 3000;
        const frameRate = 30;
        const totalFrames = duration / frameRate;
        const increment = targetValue / totalFrames;

        const interval = setInterval(() => {
            currentValue += increment;
            if (currentValue >= targetValue) {
                currentValue = targetValue;
                clearInterval(interval);
            }
            element.textContent = Math.floor(currentValue);
        }, frameRate);
    }

    const handleScroll = () => {
        if (isInViewport(section) && !textSection.classList.contains('visible')) {
            setTimeout(() => {
                textSection.classList.add('visible');
                const elements = textSection.querySelectorAll("h2, h1, p, .stats-one, .stats-two, .about-us-button");
                elements.forEach((el, index) => {
                    setTimeout(() => {
                        el.style.opacity = 1;
                        el.style.transform = "translateY(0)";
                    }, index * 200);
                });

                const stats = textSection.querySelectorAll('.count');
                stats.forEach(stat => animateNumbers(stat));

            }, 700);
            window.removeEventListener('scroll', handleScroll);
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

//What we do section
document.addEventListener("DOMContentLoaded", () => {
    const textSection = document.querySelector(".text-section-two");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    textSection.classList.add("visible");
                    observer.unobserve(textSection);
                }
            });
        },
        { threshold: 0.6 }
    );

    observer.observe(textSection);
});

//Why us section
document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".why-us-section");
    const textSection = document.querySelector(".text-section-three");
    const cards = document.querySelectorAll(".three-card");

    function revealSection() {
        const sectionPos = section.getBoundingClientRect().top;
        const screenPos = window.innerHeight * 0.5;

        if (sectionPos < screenPos) {
            setTimeout(() => {
                textSection.classList.add("show");
            }, 300);

            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add("show");
                }, index * 300);
            });
            window.removeEventListener("scroll", revealSection);
        }
    }
    window.addEventListener("scroll", revealSection);
});

//Brand logo
document.addEventListener("DOMContentLoaded", () => {
    const brandContainer = document.getElementById("brand-container");

    function slideLogos() {
        const firstLogo = brandContainer.firstElementChild;
        brandContainer.style.transition = "transform 0.6s ease-in-out";
        brandContainer.style.transform = "translateX(-240px)";

        setTimeout(() => {
            brandContainer.style.transition = "none";
            brandContainer.appendChild(firstLogo);
            brandContainer.style.transform = "translateX(0)";
        }, 600);
    }
    setInterval(slideLogos, 2000);
});


//Solutions section
document.addEventListener("DOMContentLoaded", () => {
    const textSection = document.querySelector(".text-section-four");
    const solutionCards = document.querySelectorAll(".solution-card");
    const section = document.querySelector(".container-four");

    const firstRowCards = [solutionCards[0], solutionCards[1]];
    const secondRowCards = [solutionCards[2], solutionCards[3]];

    const textSectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    textSection.classList.add("show");
                }, 300);
            }
        });
    }, { threshold: 0.3 });
    textSectionObserver.observe(section);

    const observerFirstRow = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                firstRowCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add("show");
                    }, index * 300);
                });
            }
        });
    }, { threshold: 0.5 });
    observerFirstRow.observe(section);

    const secondRowObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                secondRowCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add("show");
                    }, index * 300);
                });
            }
        });
    }, { threshold: 0.3 });

    if (secondRowCards[0]) {
        secondRowObserver.observe(secondRowCards[0]);
    }
});

//Benefits section
document.addEventListener("DOMContentLoaded", () => {
    const textSection = document.querySelector(".text-section-five");
    const textElements = textSection ? textSection.querySelectorAll("h4, h1, p") : [];
    
    const observerOptions = {
        threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                textSection.classList.add("visible");
                textElements.forEach((element, index) => {
                    setTimeout(() => {
                        element.classList.add("visible");
                    }, index * 300);
                });
                observer.unobserve(textSection);
            }
        });
    }, observerOptions);

    if (textSection) {
        observer.observe(textSection);
    }

    const benefitBoxes = document.querySelectorAll(".benefit-box");
    const benefitObserver = new IntersectionObserver((entries, benefitObserver) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, index * 300);
                benefitObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    benefitBoxes.forEach((box) => benefitObserver.observe(box));
});


//Stories section
document.addEventListener("DOMContentLoaded", () => {
    const textSection = document.querySelector(".text-section-six");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    textSection.classList.add("visible");
                    observer.unobserve(textSection);
                }
            });
        },
        { threshold: 0.3 }
    );
    observer.observe(textSection);
});

//Youtube video
document.getElementById('playButton').addEventListener('click', function() {
    document.getElementById('youtubeVideo').style.display = 'flex';
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('youtubeVideo').style.display = 'none';
});
document.getElementById('youtubeVideo').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});

//Work together section
document.addEventListener("DOMContentLoaded", function () {
    const containerSeven = document.querySelector(".container-seven");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                containerSeven.classList.add("show");
                observer.unobserve(containerSeven);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(containerSeven);
});

//Logo-refresh
document.querySelectorAll('.logo-click').forEach(logo => {
    logo.addEventListener('click', () => {
        window.location.reload();
        window.scrollTo(0, 0);
    });
});

//Scroll to top of the page
document.addEventListener('DOMContentLoaded', () => {
    const allScrollTriggers = document.querySelectorAll(
        '.explore-button, .arrow-link, .about-us-button, .service-card-button, .service-button, .learn-more, .read-more, .get-started-button, .footer-nav-links a'
    );

    allScrollTriggers.forEach(element => {
        element.addEventListener('click', (e) => {
            if (element.tagName.toLowerCase() === 'a') {
                e.preventDefault();
            }
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
});
