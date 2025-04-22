document.addEventListener("DOMContentLoaded", function () {
    // Fetch JSON data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Update Header
            const topLinks = data.header.topLinks;
            const topContacts = data.header.topContacts;

            document.getElementById('about-link').textContent = topLinks[0];
            document.getElementById('doctors-link').textContent = topLinks[1];
            document.getElementById('contact-link').textContent = topLinks[2];
            document.getElementById('faq-link').textContent = topLinks[3];

            document.getElementById('phone-number').textContent = topContacts[0].text;
            document.getElementById('email-address').textContent = topContacts[1].text;

            // Update Hero Slider
            const heroSlider = data.heroSlider;
            const sliderContainer = document.getElementById('hero-slider');
            heroSlider.forEach(slide => {
                const slideDiv = document.createElement('div');
                slideDiv.className = 'single-slider';
                slideDiv.style.backgroundImage = `url('${slide.image}')`;
                slideDiv.innerHTML = `
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7">
                                <div class="text">
                                    <h1>${slide.title}</h1>
                                    <p>${slide.description}</p>
                                    <div class="button">
                                        <a href="#" class="btn">Get Appointment</a>
                                        <a href="#" class="btn primary">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                sliderContainer.appendChild(slideDiv);
            });

            // Update Schedule Cards
            const scheduleCards = data.scheduleCards;
            const scheduleContainer = document.getElementById('schedule-cards');
            scheduleCards.forEach(card => {
                const cardDiv = document.createElement('div');
                cardDiv.className = 'single-schedule first';
                cardDiv.innerHTML = `
                    <div class="inner">
                        <div class="icon">${card.icon}</div>
                        <div class="single-content">
                            <span>${card.title}</span>
                            <p>${card.description}</p>
                            <a href="#">LEARN MORE<i class="fa fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                `;
                scheduleContainer.appendChild(cardDiv);
            });

            // Update Features Cards
            const featuresCards = data.featuresCards;
            const featuresContainer = document.getElementById('features-cards');
            featuresCards.forEach(card => {
                const cardDiv = document.createElement('div');
                cardDiv.className = 'single-features';
                cardDiv.innerHTML = `
                    <div class="signle-icon">${card.icon}</div>
                    <h3>${card.title}</h3>
                    <p>${card.description}</p>
                `;
                featuresContainer.appendChild(cardDiv);
            });

            // Update Fun Facts Cards
            const funFactsCards = data.funFactsCards;
            const funFactsContainer = document.getElementById('fun-facts-cards');
            funFactsCards.forEach(fact => {
                const factDiv = document.createElement('div');
                factDiv.className = 'single-fun';
                factDiv.innerHTML = `
                    <i class="${fact.icon}"></i>
                    <div class="content">
                        <span class="counter">${fact.count}</span>
                        <p>${fact.title}</p>
                    </div>
                `;
                funFactsContainer.appendChild(factDiv);
            });

            // Update Why Choose Us Content
            const whyChooseContent = data.whyChooseContent;
            const whyChooseContainer = document.getElementById('why-choose-content');
            whyChooseContent.forEach(content => {
                if (content.listItems) {
                    const listDiv = document.createElement('ul');
                    listDiv.className = 'list';
                    content.listItems.forEach(item => {
                        const listItem = document.createElement('li');
                        listItem.innerHTML = `<i class="fa fa-caret-right"></i>${item}`;
                        listDiv.appendChild(listItem);
                    });
                    whyChooseContainer.appendChild(listDiv);
                } else {
                    const textDiv = document.createElement('div');
                    textDiv.innerHTML = `<h3>${content.title}</h3><p>${content.description}</p>`;
                    whyChooseContainer.appendChild(textDiv);
                }
            });

            // Update Emergency Number
            document.getElementById('emergency-number').textContent = data.emergencyNumber;

            // Update Portfolio Slider
            const portfolioSlider = data.portfolioSlider;
            const portfolioContainer = document.getElementById('portfolio-slider');
            portfolioSlider.forEach(item => {
                const slideDiv = document.createElement('div');
                slideDiv.className = 'single-pf';
                slideDiv.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <a href="portfolio-details.html" class="btn">View Details</a>
                `;
                portfolioContainer.appendChild(slideDiv);
            });

            // Update Services Cards
            const servicesCards = data.servicesCards;
            const servicesContainer = document.getElementById('services-cards');
            servicesCards.forEach(card => {
                const cardDiv = document.createElement('div');
                cardDiv.className = 'single-service';
                cardDiv.innerHTML = `
                    <i class="${card.icon}"></i>
                    <h4><a href="service-details.html">${card.title}</a></h4>
                    <p>${card.description}</p>
                `;
                servicesContainer.appendChild(cardDiv);
            });

            // Update Pricing Cards
            const pricingCards = data.pricingCards;
            const pricingContainer = document.getElementById('pricing-cards');
            pricingCards.forEach(card => {
                const cardDiv = document.createElement('div');
                cardDiv.className = 'single-table';
                cardDiv.innerHTML = `
                    <div class="table-head">
                        <div class="icon">${card.icon}</div>
                        <h4 class="title">${card.title}</h4>
                        <div class="price">
                            <p class="amount">${card.price}<span>/ Per Visit</span></p>
                        </div>
                    </div>
                    <ul class="table-list">
                        ${card.features.map(feature => `<li><i class="icofont icofont-ui-check"></i>${feature}</li>`).join('')}
                    </ul>
                    <div class="table-bottom">
                        <a class="btn" href="#">Book Now</a>
                    </div>
                `;
                pricingContainer.appendChild(cardDiv);
            });

            // Update Blog Cards
            const blogCards = data.blogCards;
            const blogContainer = document.getElementById('blog-cards');
            blogCards.forEach(blog => {
                const cardDiv = document.createElement('div');
                cardDiv.className = 'single-news';
                cardDiv.innerHTML = `
                    <div class="news-head">
                        <img src="${blog.image}" alt="${blog.title}">
                    </div>
                    <div class="news-body">
                        <div class="news-content">
                            <div class="date">${blog.date}</div>
                            <h2><a href="blog-single.html">${blog.title}</a></h2>
                            <p class="text">${blog.description}</p>
                        </div>
                    </div>
                `;
                blogContainer.appendChild(cardDiv);
            });

            // Update Clients Logos
            const clientsLogos = data.clientsLogos;
            const clientsContainer = document.getElementById('clients-slider');
            clientsLogos.forEach(logo => {
                const logoDiv = document.createElement('div');
                logoDiv.className = 'single-clients';
                logoDiv.innerHTML = `<img src="${logo}" alt="Client Logo">`;
                clientsContainer.appendChild(logoDiv);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
});