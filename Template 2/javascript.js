//Error-Page
document.addEventListener("DOMContentLoaded", function () {
    const errorPage = document.querySelectorAll(".redirect");

    errorPage.forEach(link => {
        link.addEventListener("click", function (event){
            event.preventDefault();
            window.location.href = "404.html";
        });
    });
});

//Track-Order
document.addEventListener("DOMContentLoaded", function () {
    const trackButton = document.getElementById("trackButton");
    const trackingIdInput = document.getElementById("trackingId");
    const successMessage = document.getElementById("successMessage");
    const errorMessage = document.getElementById("errorMessage");

    trackButton.addEventListener("click", function (event) {
        event.stopPropagation();
        const trackingId = trackingIdInput.value.trim();

        if (trackingId) {
            successMessage.style.display = "block";
            errorMessage.style.display = "none";
        } else {
            successMessage.style.display = "none";
            errorMessage.style.display = "block";
        }
    });

    document.addEventListener("click", function (event) {
        if (!event.target.closest(".order-dropdown")) {
            successMessage.style.display = "none";
            errorMessage.style.display = "none";
        }
    });
});

//Side-Panel
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const sidePanel = document.getElementById("sidePanel");
    const closeButton = document.getElementById("closeButton");

    menuButton.addEventListener("click", function() {
        sidePanel.classList.add("active");
    });
    closeButton.addEventListener("click", function() {
        sidePanel.classList.remove("active");
    });

    document.addEventListener("click", function(event) {
        if (!sidePanel.contains(event.target) && !menuButton.contains(event.target)) {
            sidePanel.classList.remove("active");
        }
    });
});

//Sticky-navbar
document.addEventListener("DOMContentLoaded", function () {
    const stickyNavbar = document.querySelector(".sticky-navbar");
    const containerOne = document.querySelector(".container-one");

    window.addEventListener("scroll", function () {
        const containerOnePosition = containerOne.getBoundingClientRect().top;

        if (containerOnePosition <= 0) {
            stickyNavbar.classList.add("show");
        } else {
            stickyNavbar.classList.remove("show");
        }
    });
});

//Sticky-side-panel
document.addEventListener("DOMContentLoaded", function () {
    const stickyMenuButton = document.getElementById("stickyMenuButton");
    const stickySidePanel = document.getElementById("stickySidePanel");
    const stickyCloseButton = document.getElementById("stickyCloseButton");

    stickyMenuButton.addEventListener("click", function () {
        stickySidePanel.classList.add("show");
    });

    stickyCloseButton.addEventListener("click", function () {
        stickySidePanel.classList.remove("show");
    });

    document.addEventListener("click", function (event) {
        if (!stickySidePanel.contains(event.target) && !stickyMenuButton.contains(event.target)) {
            stickySidePanel.classList.remove("show");
        }
    });

});

//Hero-Section
const slides = document.querySelectorAll('.slide');
const progressBars = document.querySelectorAll('.progress-bar');
const progressBarsFill = [];

const mainQuote = document.getElementById('main-quote');
const subQuote = document.getElementById('sub-quote');
const titleElements = document.querySelectorAll('.title-box span');

const prevButton = document.getElementById('prev-slide');
const nextButton = document.getElementById('next-slide');

let currentIndex = 0;

progressBars.forEach((bar, index) => {
    let progressFill = document.createElement("div");
    progressFill.classList.add("progress-fill");
    bar.appendChild(progressFill);
    progressBarsFill.push(progressFill);
});

function updateSlider() {
    slides.forEach(slide => slide.classList.remove('active'));

    let currentSlide = slides[currentIndex];
    currentSlide.classList.add('active');

    mainQuote.textContent = currentSlide.dataset.quote;
    subQuote.textContent = currentSlide.dataset.subquote;

    for (let i = 0; i < titleElements.length; i++) {
        let titleIndex = (currentIndex + i) % slides.length;
        titleElements[i].textContent = slides[titleIndex].dataset.title;
    }

    progressBarsFill.forEach(bar => {
        bar.style.transition = "none";
        bar.style.width = "0%";
    });

    setTimeout(() => {
        progressBarsFill[0].style.transition = "width 5s linear";
        progressBarsFill[0].style.width = "100%";
    }, 50);
}
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
}
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
setInterval(nextSlide, 5000);
updateSlider();

//Error-page-redirect
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".team-members img, .team-members .name, .blog-card img, .blog-category, .blog-title, .read-more").forEach(element => {
        element.addEventListener("click", function () {
            window.location.href = "404.html";
        });
    });
});

//Mobile-menu-button
document.addEventListener("DOMContentLoaded", function() {
    const mobileMenuButton = document.getElementById("mobileMenuButton");
    const navigationCloseButton = document.getElementById("navigationCloseButton");
    const mobileNavigation = document.querySelector(".mobile-navigation");

    mobileMenuButton.addEventListener("click", function() {
        mobileNavigation.classList.add("active");
    });

    navigationCloseButton.addEventListener("click", function() {
        mobileNavigation.classList.remove("active");
    });
});

//Scroll-movement
document.addEventListener("DOMContentLoaded", function () {
    const personContent = document.querySelector(".person-content");

    window.addEventListener("scroll", function () {
        let scrollY = window.scrollY;
        let translateValue = scrollY * 0.06;
        personContent.style.transform = `translateY(${translateValue}px)`;
    });
});

//footer-icon-refresh
function refreshPage() {
    window.scrollTo(0, 0);
    location.reload();
}
