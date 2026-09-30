


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



const planButtons = document.querySelectorAll('.plan-btn');
const planInput = document.getElementById('selected-plan');

planButtons.forEach(button => {

    button.addEventListener('click', () => {

        const selectedPlan = button.dataset.plan;

        planInput.value = selectedPlan;

    });

});

new Swiper('.service-wrapper', {
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

const cattle = [
  
{
    id: "IDL-ANG-001",
    name: "Angus Cattle",
    breed: "angus",
    price: "R12,500",
    image: "images/angus/angus.1.jpg"
},

{
    id: "IDL-ANG-002",
    name: "Angus Cattle",
    breed: "angus",
    price: "R12,500",
    image: "images/angus/angus.2.jpg"
},

{
    id: "IDL-ANG-003",
    name: "Angus Cattle",
    breed: "angus",
    price: "R12,500",
    image: "images/angus/angus.3.jpg"
},

{
    id: "IDL-ANG-004",
    name: "Angus Cattle",
    breed: "angus",
    price: "R12,500",
    image: "images/angus/angus.4.jpg"
},

{
    id: "IDL-ANG-005",
    name: "Angus Cattle",
    breed: "angus",
    price: "R12,500",
    image: "images/angus/angus.5.jpg"
},

{
    id: "IDL-ANG-006",
    name: "Angus Cattle",
    breed: "angus",
    price: "R12,500",
    image: "images/angus/angus.6.jpg"
},

{
    id: "IDL-ANG-007",
    name: "Angus Cattle",
    breed: "angus",
    price: "R12,500",
    image: "images/angus/angus.7.jpg"
},

{
    id: "IDL-ANG-008",
    name: "Angus Cattle",
    breed: "angus",
    price: "R12,500",
    image: "images/angus/angus.8.jpg"
},

{
    id: "IDL-ANG-009",
    name: "Angus Cattle",
    breed: "angus",
    price: "R12,500",
    image: "images/angus/angus.9.jpg"
},

{
    id: "IDL-ANG-010",
    name: "Angus Cattle",
    breed: "angus",
    price: "R12,500",
    image: "images/angus/angus.10.jpg"
},

{
    id: "IDL-ANG-011",
    name: "Angus Cattle",
    breed: "angus",
    price: "R12,500",
    image: "images/angus/angus.11.jpg"
},

{
    id: "IDL-ANG-012",
    name: "Angus Cattle",
    breed: "angus",
    price: "R12,500",
    image: "images/angus/angus.12.jpg"
},

{
    id: "IDL-ANG-013",
    name: "Angus Cattle",
    breed: "angus",
    price: "R12,500",
    image: "images/angus/angus.13.jpg"
},

{
    id: "IDL-ANG-014",
    name: "Angus Cattle",
    breed: "angus",
    price: "R12,500",
    image: "images/angus/angus.14.jpg"
},

{
    id: "IDL-ANG-015",
    name: "Angus Cattle",
    breed: "angus",
    price: "R12,500",
    image: "images/angus/angus.15.jpg"
},

{
    id: "IDL-ANG-016",
    name: "Angus Cattle",
    breed: "angus",
    price: "R12,500",
    image: "images/angus/angus.16.jpg"
},

{
    id: "IDL-ANG-017",
    name: "Angus Cattle",
    breed: "angus",
    price: "R12,500",
    image: "images/angus/angus.17.jpg"
},

{
    id: "IDL-BOR-018",
    name: "Boran Cattle",
    breed: "boran",
    price: "R11,000",
    image: "images/boran/boran.1.jpg"
},

{
    id: "IDL-BOR-019",
    name: "Boran Cattle",
    breed: "boran",
    price: "R11,000",
    image: "images/boran/boran.2.jpg"
},

{
    id: "IDL-BOR-020",
    name: "Boran Cattle",
    breed: "boran",
    price: "R11,000",
    image: "images/boran/boran.3.jpg"
},

{
    id: "IDL-BOR-021",
    name: "Boran Cattle",
    breed: "boran",
    price: "R11,000",
    image: "images/boran/boran.4.jpg"
},

{
    id: "IDL-BOR-022",
    name: "Boran Cattle",
    breed: "boran",
    price: "R11,000",
    image: "images/boran/boran.5.jpg"
},

{
    id: "IDL-BOR-023",
    name: "Boran Cattle",
    breed: "boran",
    price: "R11,000",
    image: "images/boran/boran.6.jpg"
},

{
    id: "IDL-BOR-024",
    name: "Boran Cattle",
    breed: "boran",
    price: "R11,000",
    image: "images/boran/boran.7.jpg"
},

{
    id: "IDL-BOR-025",
    name: "Boran Cattle",
    breed: "boran",
    price: "R11,000",
    image: "images/boran/boran.8.jpg"
},

{
    id: "IDL-BOR-026",
    name: "Boran Cattle",
    breed: "boran",
    price: "R11,000",
    image: "images/boran/boran.9.jpg"
},

{
    id: "IDL-BOR-027",
    name: "Boran Cattle",
    breed: "boran",
    price: "R11,000",
    image: "images/boran/boran.10.jpg"
},

{
    id: "IDL-BOR-028",
    name: "Boran Cattle",
    breed: "boran",
    price: "R11,000",
    image: "images/boran/boran.11.jpg"
},

{
    id: "IDL-BOR-029",
    name: "Boran Cattle",
    breed: "boran",
    price: "R11,000",
    image: "images/boran/boran.12.jpg"
},

{
    id: "IDL-BOR-030",
    name: "Boran Cattle",
    breed: "boran",
    price: "R11,000",
    image: "images/boran/boran.13.jpg"
},

{
    id: "IDL-BOR-031",
    name: "Boran Cattle",
    breed: "boran",
    price: "R11,000",
    image: "images/boran/boran.14.jpg"
},

{
    id: "IDL-BOR-032",
    name: "Boran Cattle",
    breed: "boran",
    price: "R11,000",
    image: "images/boran/boran.15.jpg"
},

{
    id: "IDL-BOR-033",
    name: "Boran Cattle",
    breed: "boran",
    price: "R11,000",
    image: "images/boran/boran.16.jpg"
},

{
    id: "IDL-NGU-034",
    name: "Nguni Cattle",
    breed: "nguni",
    price: "R9,500",
    image: "images/nguni/nguni.1.jpg"
},

// {
//     id: "IDL-NGU-035",
//     name: "Nguni Cattle",
//     breed: "nguni",
//     price: "R9,500",
//     image: "images/nguni/nguni.2.jpg"
// },

{
    id: "IDL-NGU-036",
    name: "Nguni Cattle",
    breed: "nguni",
    price: "R9,500",
    image: "images/nguni/nguni.3.jpg"
},

{
    id: "IDL-NGU-037",
    name: "Nguni Cattle",
    breed: "nguni",
    price: "R9,500",
    image: "images/nguni/nguni.4.jpg"
},

{
    id: "IDL-NGU-038",
    name: "Nguni Cattle",
    breed: "nguni",
    price: "R9,500",
    image: "images/nguni/nguni.5.jpg"
},

{
    id: "IDL-NGU-039",
    name: "Nguni Cattle",
    breed: "nguni",
    price: "R9,500",
    image: "images/nguni/nguni.6.jpg"
},

{
    id: "IDL-BRA-040",
    name: "Brahman Cattle",
    breed: "brahman",
    price: "R8,000",
    image: "images/brahman/brahman.1.jpg"
},

{
    id: "IDL-BRA-041",
    name: "Brahman Cattle",
    breed: "brahman",
    price: "R8,000",
    image: "images/brahman/brahman.2.jpg"
},

{
    id: "IDL-BRA-042",
    name: "Brahman Cattle",
    breed: "brahman",
    price: "R8,000",
    image: "images/brahman/brahman.3.jpg"
},

{
    id: "IDL-BRA-043",
    name: "Brahman Cattle",
    breed: "brahman",
    price: "R8,000",
    image: "images/brahman/brahman.4.jpg"
},

{
    id: "IDL-BRA-044",
    name: "Brahman Cattle",
    breed: "brahman",
    price: "R8,000",
    image: "images/brahman/brahman.5.jpg"
},

{
    id: "IDL-BRA-045",
    name: "Brahman Cattle",
    breed: "brahman",
    price: "R8,000",
    image: "images/brahman/brahman.6.jpg"
},

{
    id: "IDL-BRA-046",
    name: "Brahman Cattle",
    breed: "brahman",
    price: "R8,000",
    image: "images/brahman/brahman.7.jpg"
},

{
    id: "IDL-BRA-047",
    name: "Brahman Cattle",
    breed: "brahman",
    price: "R8,000",
    image: "images/brahman/brahman.8.jpg"
},

{
    id: "IDL-BRA-048",
    name: "Brahman Cattle",
    breed: "brahman",
    price: "R8,000",
    image: "images/brahman/brahman.9.jpg"
},

{
    id: "IDL-BRA-049",
    name: "Brahman Cattle",
    breed: "brahman",
    price: "R8,000",
    image: "images/brahman/brahman.10.jpg"
},





// {
//     id: "IDL-ANG-050",
//     name: "Angus Cattle",
//     breed: "angus",
//     price: "R12,500",
//     image: "images/angus.jpeg"
// },

// {
//     id: "IDL-NGU-051",
//     name: "Nguni Cattle",
//     breed: "nguni",
//     price: "R9,500",
//     image: "images/nguni.jpeg"
// },

// {
//     id: "IDL-NGU-052",
//     name: "Nguni Cattle",
//     breed: "nguni",
//     price: "R9,500",
//     image: "images/nguni.jpeg"
// },

// {
//     id: "IDL-BOR-053",
//     name: "Boran Cattle",
//     breed: "boran",
//     price: "R11,000",
//     image: "images/boran.jpeg"
// },

// {
//     id: "IDL-BOR-054",
//     name: "Boran Cattle",
//     breed: "boran",
//     price: "R11,000",
//     image: "images/boran.jpeg"
// },

// {
//     id: "IDL-BRA-055",
//     name: "Brahman Cattle",
//     breed: "brahman",
//     price: "R8,000",
//     image: "images/brahman.jpeg"
// },

// {
//     id: "IDL-BRA-056",
//     name: "Brahman Cattle",
//     breed: "brahman",
//     price: "R8,000",
//     image: "images/brahman.jpeg"
// },

// {
//     id: "IDL-ANG-057",
//     name: "Angus Cattle",
//     breed: "angus",
//     price: "R12,500",
//     image: "images/angus.jpeg"
// },

// {
//     id: "IDL-ANG-058",
//     name: "Angus Cattle",
//     breed: "angus",
//     price: "R12,500",
//     image: "images/angus.jpeg"
// },

// {
//     id: "IDL-NGU-059",
//     name: "Nguni Cattle",
//     breed: "nguni",
//     price: "R9,500",
//     image: "images/nguni.jpeg"
// },

// {
//     id: "IDL-NGU-060",
//     name: "Nguni Cattle",
//     breed: "nguni",
//     price: "R9,500",
//     image: "images/nguni.jpeg"
// },

// {
//     id: "IDL-BOR-061",
//     name: "Boran Cattle",
//     breed: "boran",
//     price: "R11,000",
//     image: "images/boran.jpeg"
// },

// {
//     id: "IDL-BOR-062",
//     name: "Boran Cattle",
//     breed: "boran",
//     price: "R11,000",
//     image: "images/boran.jpeg"
// },

// {
//     id: "IDL-BRA-063",
//     name: "Brahman Cattle",
//     breed: "brahman",
//     price: "R8,000",
//     image: "images/brahman.jpeg"
// },

// {
//     id: "IDL-BRA-064",
//     name: "Brahman Cattle",
//     breed: "brahman",
//     price: "R8,000",
//     image: "images/brahman.jpeg"
// },

// {
//     id: "IDL-ANG-065",
//     name: "Angus Cattle",
//     breed: "angus",
//     price: "R12,500",
//     image: "images/angus.jpeg"
// },

// {
//     id: "IDL-ANG-066",
//     name: "Angus Cattle",
//     breed: "angus",
//     price: "R12,500",
//     image: "images/angus.jpeg"
// },

// {
//     id: "IDL-NGU-067",
//     name: "Nguni Cattle",
//     breed: "nguni",
//     price: "R9,500",
//     image: "images/nguni.jpeg"
// },

// {
//     id: "IDL-NGU-068",
//     name: "Nguni Cattle",
//     breed: "nguni",
//     price: "R9,500",
//     image: "images/nguni.jpeg"
// },

// {
//     id: "IDL-BOR-069",
//     name: "Boran Cattle",
//     breed: "boran",
//     price: "R11,000",
//     image: "images/boran.jpeg"
// },

// {
//     id: "IDL-BOR-070",
//     name: "Boran Cattle",
//     breed: "boran",
//     price: "R11,000",
//     image: "images/boran.jpeg"
// },
];




const cattleContainer = document.querySelector('.service-list');


function displayCattle(cattleToDisplay) {

    cattleContainer.innerHTML = '';

    cattleToDisplay.forEach(cow => {

        const serviceContent = document.createElement('div');

        serviceContent.classList.add(
            'service-content',
            'swiper-slide'
        );

        serviceContent.dataset.cattleId = cow.id;

        serviceContent.innerHTML = `
            <img src="${cow.image}" alt="${cow.name}">

            <h3>${cow.name}</h3>

            <p class="service-content-price">
                ${cow.price}
            </p>

            <a 
                href="#contact"
                class="service-btn"
                data-cattle-id="${cow.id}"
                data-cattle-name="${cow.name}"
                data-cattle-price="${cow.price}"
            >
                Enquire Now
            </a>
        `;

        cattleContainer.appendChild(serviceContent);
    });
}


const filterButtons = document.querySelectorAll('.filter-btn');




filterButtons.forEach(button => {

    button.addEventListener('click', () => {

        const filter = button.dataset.filter;

        filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        button.classList.add('active');

        if (filter === 'all') {

            displayCattle(cattle);

        } else {

            const filteredCattle = cattle.filter(cow => {
                return cow.breed === filter;
            });

            displayCattle(filteredCattle);
        }
    });

});


displayCattle(cattle);