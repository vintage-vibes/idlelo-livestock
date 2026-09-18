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




 new Swiper('.partners-wrapper', {
  // Optional parameters
 
  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 breakpoints:{
    0: {
        slidesPerView:1
    },
     768: {
        slidesPerView:2
    },
     1024: {
      slidesPerView:3
    }
 }
 
});



const fadeSections = document.querySelectorAll('.fade');

const fadeObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('show');

        } else {

            entry.target.classList.remove('show');

        }

    });

}, {
    threshold: 0.15
});


fadeSections.forEach(section => {

    fadeObserver.observe(section);

});