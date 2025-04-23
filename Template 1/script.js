window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};


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
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
        outputBox.style.top = `${rect.bottom + scrollTop + 5}px`;
        outputBox.style.left = `${rect.left + scrollLeft}px`;
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

document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {

            const sidePanel = document.getElementById("sidePanel");
            if (sidePanel && data.sidePanel) {
                const symbolImage = sidePanel.querySelector(".symbol-image img");
                if (symbolImage) symbolImage.src = data.sidePanel.symbolImage;

                const sidePanelTitle = sidePanel.querySelector("h2");
                if (sidePanelTitle) sidePanelTitle.textContent = data.sidePanel.title;

                const sidePanelDesc = sidePanel.querySelector("p");
                if (sidePanelDesc) sidePanelDesc.innerHTML = data.sidePanel.description;

                const containerImage = sidePanel.querySelector(".container-image");
                if (containerImage) containerImage.src = data.sidePanel.image;

                const contactInfos = sidePanel.querySelector(".contact-infos");
                if (contactInfos) {
                    contactInfos.innerHTML = `
                        <p><a href="${data.sidePanel.addressLink}" target="_blank">${data.sidePanel.address}</a></p>
                        <p><a href="tel:${data.sidePanel.phone}">${data.sidePanel.phone}</a></p>
                        <p><a href="mailto:${data.sidePanel.email}">${data.sidePanel.email}</a></p>
                    `;
                }

                const socialIcons = sidePanel.querySelector(".social-icon");
                if (socialIcons) {
                    socialIcons.innerHTML = data.sidePanel.socials.map(social => 
                        `<a href="${social.link}" target="_blank"><i class="${social.icon}"></i></a>`
                    ).join("");
                }
            }

            const heroSection = document.querySelector(".hero-section");
            if (heroSection && data.heroSection) {
                const heroImage = heroSection.querySelector(".hero-image");
                if (heroImage) heroImage.src = data.heroSection.image;

                const heroTitle = heroSection.querySelector(".hero-title");
                if (heroTitle) heroTitle.textContent = data.heroSection.title;
            }

            const boatImage = document.querySelector("section img.boat");
            if (boatImage && data.boatImage) {
                boatImage.src = data.boatImage;
            }

            const gridContainer = document.querySelector(".grid-container");
            if (gridContainer && data.gridItems) {
                gridContainer.innerHTML = ""; 
                data.gridItems.forEach(item => {
                    const gridItem = document.createElement("div");
                    gridItem.classList.add("grid-item");
                    gridItem.innerHTML = item.type === "text" ? `<p>${item.content}</p>` : `<img src="${item.content}" alt="Grid Image">`;
                    gridContainer.appendChild(gridItem);
                });
            }

            const textContentTitle = document.querySelector(".text-contents h1");
            if (textContentTitle) textContentTitle.textContent = data.title;

            const pointsContainer = document.querySelector(".points");
            if (pointsContainer) {
                pointsContainer.innerHTML = "";
                data.points.forEach(point => {
                    const pointDiv = document.createElement("div");
                    pointDiv.classList.add("point");
                    pointDiv.innerHTML = `<span class="number">${point.number}</span><p>${point.text}</p>`;
                    pointsContainer.appendChild(pointDiv);
                });
            }

            const mainImage = document.querySelector(".image-container img");
            if (mainImage) mainImage.src = data.image;

            const companyTitle = document.querySelector(".company-section .text-content h1");
            if (companyTitle) companyTitle.textContent = data.companySection.title;

            const containerImageCompany = document.querySelector(".image-containers img");
            if (containerImageCompany) containerImageCompany.src = data.companySection.images.container;

            const projectScopeImage = document.querySelector(".project-scope img");
            if (projectScopeImage) projectScopeImage.src = data.companySection.images.projectScope;

            const featuresList = document.querySelector(".features");
            if (featuresList) {
                featuresList.innerHTML = "";
                data.companySection.features.forEach(feature => {
                    const li = document.createElement("li");
                    li.textContent = feature;
                    featuresList.appendChild(li);
                });
            }

            const newsContainer = document.querySelector(".news-container");
            if (newsContainer && data.newsSection) {
                const newsTitle = newsContainer.querySelector("h1");
                if (newsTitle) newsTitle.textContent = data.newsSection.title;

                document.querySelectorAll(".news-card").forEach(card => card.remove());

                data.newsSection.news.forEach(newsItem => {
                    const newsCard = document.createElement("div");
                    newsCard.classList.add("news-card");

                    newsCard.innerHTML = ` <div class="news-content">
                            <div class="date-box">
                                <span class="date">${newsItem.date}</span>
                                <span class="month">${newsItem.month}</span>
                            </div>
                            <div class="news-text">
                                <p class="category">${newsItem.category}</p>
                                <h2>${newsItem.headline}</h2>
                                <a href="${newsItem.link}" class="view-more">
                                    <span class="redirect">View More <span class="right-arrow">→</span></span>
                                </a>
                            </div>
                        </div>
                        <div class="news-image">
                            <img src="${newsItem.image}" alt="News Image">
                        </div>`;

                    newsContainer.appendChild(newsCard);
                });
            }

            const imageSection = document.querySelector(".image-section");
            if (imageSection && data.imageSection) {
                const bgImage = imageSection.querySelector(".background-image");
                const overlayImage = imageSection.querySelector(".four-grid");
                const heading = imageSection.querySelector("h1");

                if (bgImage) bgImage.src = data.imageSection.backgroundImage;
                if (overlayImage) overlayImage.src = data.imageSection.overlayImage;
                if (heading) heading.innerHTML = data.imageSection.heading;
            }

            const tableBody = document.querySelector(".table-container tbody");
            if (tableBody && data.services) {
                tableBody.innerHTML = "";

                data.services.forEach(service => {
                    const row = document.createElement("tr");
                    row.classList.add("row");

                    row.innerHTML = `<td><strong>${service.name}</strong></td>
                        <td>
                            <p>${service.description}</p>
                            <button class="toggle-btn">+</button>
                            <div class="expand-content" style="display: none;">
                                <p>${service.expandedContent}</p>
                            </div>
                        </td> `;

                    const button = row.querySelector(".toggle-btn");
                    button.addEventListener("click", function () {
                        toggleContent(this);
                    });

                    tableBody.appendChild(row);
                });
            }
        })
        .catch(error => console.error("Error fetching data:", error));
});

document.addEventListener("DOMContentLoaded", () => {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const footerData = data.footer;

            document.querySelector(".footer-logo").src = footerData.logo;

            document.querySelector(".description").textContent = footerData.description;

            const socialIcons = document.querySelector(".social-icons");
            socialIcons.innerHTML = ` <a href="${footerData.socialLinks.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="${footerData.socialLinks.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="${footerData.socialLinks.facebook}" target="_blank"><i class="fab fa-facebook"></i></a> `;

            document.querySelector(".copyright").textContent = footerData.copyright;

            const footerColumns = document.querySelectorAll(".footer-column .column2");
            footerData.columns.forEach((column, index) => {
                if (footerColumns[index]) {
                    footerColumns[index].querySelector("h3").textContent = column.title;
                    const ul = footerColumns[index].querySelector("ul");
                    ul.innerHTML = "";
                    column.links.forEach(link => {
                        ul.innerHTML += `<li><a href="${link.url}" class="redirect">${link.text}</a></li>`;
                    });
                }
            });

            document.querySelectorAll(".redirect").forEach(link => {
                link.addEventListener("click", (event) => {
                    event.preventDefault(); 
                    window.location.href = "error.html";
                });
            });
        })
        .catch(error => console.error("Error fetching JSON:", error));
});
