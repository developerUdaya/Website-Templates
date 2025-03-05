document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const sidePanel = document.getElementById("sidePanel");
    const closePanel = document.getElementById("closePanel");

    menuButton.addEventListener("click", function () {
        sidePanel.classList.add("active");
    });

    closePanel.addEventListener("click", function () {
        sidePanel.classList.remove("active");
    });

    document.addEventListener("click", function (event) {
        if (!sidePanel.contains(event.target) && !menuButton.contains(event.target)) {
            sidePanel.classList.remove("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const stakeholderSection = document.querySelector(".stakeholder-section");

    window.addEventListener("scroll", function () {
        const stakeholderTop = stakeholderSection.getBoundingClientRect().top;
        
        if (stakeholderTop <= 0) {
            navbar.classList.add("sticky-nav");
        } else {
            navbar.classList.remove("sticky-nav");
        }
    });
});

function toggleContent(button) {
    const content = button.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
        button.textContent = "+";
    } else {
        content.style.display = "block";
        button.textContent = "-";
    }
}
