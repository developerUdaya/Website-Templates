document.addEventListener("DOMContentLoaded", function () {
    const helpText = document.querySelector(".help-text");

    helpText.addEventListener("click", function () {
        window.open("file:///E:/JustVy/task_25/task.html", "_blank");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const trackOrderLink = document.getElementById("trackOrderLink");
    const dropdowns = document.querySelector(".dropdowns");
    const trackBtn = document.querySelector(".track-btn");
    const inputField = document.querySelector(".dropdowns input");

    if (!trackOrderLink || !dropdowns || !trackBtn || !inputField) {
        console.error("Required elements not found in the DOM.");
        return;
    }

    let outputBox = document.querySelector(".output-box");
    if (!outputBox) {
        outputBox = document.createElement("div");
        outputBox.classList.add("output-box");
        outputBox.style.display = "none";
        document.body.appendChild(outputBox);
    }

    let inlineError = document.querySelector(".inline-error");
    if (!inlineError) {
        inlineError = document.createElement("p");
        inlineError.classList.add("inline-error");
        inlineError.style.display = "none";
        trackBtn.parentNode.insertBefore(inlineError, trackBtn);
    }

    trackOrderLink.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        dropdowns.style.display = dropdowns.style.display === "flex" ? "none" : "flex";
    });

    trackBtn.addEventListener("click", function (event) {
        event.stopPropagation();

        if (inputField.value.trim() === "") {
            showErrorMessage("One or more fields have an error. Please check and try again.");
            showInlineError("Please fill out this field.");
            return;
        }

        hideInlineError();
        outputBox.style.display = "none";

        trackBtn.classList.add("loading");
        trackBtn.disabled = true;

        setTimeout(() => {
            trackBtn.classList.remove("loading");
            trackBtn.disabled = false;
            showSuccessMessage("Thank you for your message. It has been sent.");
            inputField.value = "";
        }, 2000);
    });

    dropdowns.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    document.addEventListener("click", function () {
        dropdowns.style.display = "none";
        outputBox.style.display = "none";
    });

    function showInlineError(message) {
        inlineError.textContent = message;
        inlineError.style.display = "block";
    }

    function hideInlineError() {
        inlineError.style.display = "none";
    }

    function showErrorMessage(message) {
        positionOutputBox();
        outputBox.style.display = "block";
        outputBox.textContent = message;
        outputBox.classList.add("error-message");
    }

    function showSuccessMessage(message) {
        positionOutputBox();
        outputBox.style.display = "block";
        outputBox.textContent = message;
        outputBox.classList.remove("error-message");
    }

    function positionOutputBox() {
        const rect = dropdowns.getBoundingClientRect();
        outputBox.style.top = `${rect.bottom + 5}px`;
        outputBox.style.left = `${rect.left}px`;
    }
});

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
    const allContents = document.querySelectorAll(".expand-content");
    const allButtons = document.querySelectorAll(".toggle-btn");

    allContents.forEach((content, index) => {
        if (content !== button.nextElementSibling) {
            content.style.display = "none";
            allButtons[index].textContent = "+";
        }
    });

    const content = button.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
        button.textContent = "+";
    } else {
        content.style.display = "block";
        button.textContent = "-";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const dropdownLinks = document.querySelectorAll(".redirect");

    dropdownLinks.forEach(link => {
        link.addEventListener("click", function (event){
            event.preventDefault();
            window.location.href = "error.html";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = window.scrollY || document.documentElement.scrollTop; 

    const projectScope = document.querySelector(".project-scope");
    const textContent = document.querySelector(".text-content");
    const imageContent = document.querySelector(".image-content"); 

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        let scrollAmount = (scrollTop - lastScrollTop) * 0.7;

        if (projectScope) projectScope.style.transform = `translateY(${scrollAmount}px)`;
        if (textContent) textContent.style.transform = `translateY(${scrollAmount}px)`;
        if (imageContent) imageContent.style.transform = `translateY(${scrollAmount}px)`;

        lastScrollTop = scrollTop;
    });
});