const filterButtons = document.querySelectorAll(".filter-btn");
const cattleCards = document.querySelectorAll(".service-content");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        // Active button
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        cattleCards.forEach(card => {
            const category = card.dataset.category;

            if (filter === "all" || category === filter) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }
        });

    });
});


const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".nav-links");
const closeBtn = document.querySelector(".close-btn");
const navItems = document.querySelectorAll(".nav-links a");

burgerMenu.addEventListener("click", () => {
    navLinks.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("active");
});

navItems.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});




const counters = document.querySelectorAll('.counter');

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            counters.forEach(counter => {

                const target = +counter.dataset.target;
                let current = 0;

                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16);

                const updateCounter = () => {

                    current += increment;

                    if (current < target) {

                        counter.textContent = Math.floor(current).toLocaleString();
                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.textContent = target.toLocaleString();

                    }

                };

                updateCounter();

            });

            // // Only run the animation once
            // observer.disconnect();
        }

    });

}, {
    threshold: 0.4
});

observer.observe(document.querySelector('.badge-item'));

