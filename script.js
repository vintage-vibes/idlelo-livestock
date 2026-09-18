const menuToggle = document.querySelector(".icon-menu");
const sidebar = document.querySelector(".sidebar");
const closeSidebar = document.querySelector(".close-sidebar");


 

menuToggle.addEventListener("click", function (event) {

    event.preventDefault();

    sidebar.classList.toggle("active");
});

closeSidebar.addEventListener("click", function (event) {

    event.preventDefault();

    sidebar.classList.remove("active");

});

const navlinks = document.querySelectorAll(".sidebar a")

  navlinks.forEach(link=> {
         link.addEventListener('click',()=>{
          
        navlinks.forEach(otherlink => {

            if (otherlink !== link ) {
                sidebar.classList.remove('active')
            }
        });
        link.classList.add('active');
    })
 });




const counters = document.querySelectorAll(".counter");
const accolades = document.querySelector(".aboutAccolades");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            // =========================
            // NUMBER COUNTER
            // =========================

            counters.forEach(counter => {

                const target = Number(counter.dataset.target);

                let current = 0;

                const updateCounter = () => {

                    const increment = target / 60;

                    if (current < target) {

                        current += increment;

                        if (current >= target) {
                            current = target;
                        }

                        counter.textContent =
                            Math.floor(current) +
                            (target === 98 ? "%" : "");

                        requestAnimationFrame(updateCounter);
                    }
                };

                updateCounter();
            });


            // =========================
            // CIRCLE ANIMATION
            // =========================

          
            

        }

    });

}, {
    threshold: 0.3
});


observer.observe(accolades);


const plusButtons = document.querySelectorAll(".plus");

plusButtons.forEach(button => {
    button.addEventListener("click", () => {
        const service = button.closest(".service");

        service.classList.toggle("active");
    });

})


    const serviceItems = document.querySelectorAll(".service-item");
  


    serviceItems.forEach(item => {

        const plus = item.querySelector(".plus");
        

        plus.addEventListener("click", () => {

            serviceItems.forEach(otherItems => {
                if (otherItems!== item) {
                    otherItems.classList.remove('active')
                }
            })

            item.classList.toggle("active");

        });

    });



const fadeElements = document.querySelectorAll(".fade, .fade-down");



const fadeObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");

            
        }else{
            entry.target.classList.remove("show");
        }

    });

}, {
    threshold: 0.15
});


fadeElements.forEach((element) => {
    fadeObserver.observe(element);
});

    





// const counters = document.querySelectorAll(".counter");

// const observer = new IntersectionObserver((entries, observer) => {

//     entries.forEach(entry => {

//         if (entry.isIntersecting) {

//             const counter = entry.target;
//             const target = Number(counter.dataset.target);

//             let current = 0;

//             const updateCounter = () => {

//                 const increment = target / 60;

//                 if (current < target) {

//                     current += increment;

//                     if (current >= target) {
//                         current = target;
//                     }

//                     counter.textContent =
//                         Math.floor(current) +
//                         (target === 98 ? "%" : "");

//                     requestAnimationFrame(updateCounter);

//                 }

//             };

//             updateCounter();

            
//         }

//     });

// }, {
//     threshold: 0.5
// });

// counters.forEach(counter => {
//     observer.observe(counter);
// });




// const observer = new IntersectionObserver((entries) => {

//     entries.forEach(entry => {

//         if (entry.isIntersecting) {

//             const circles = document.querySelectorAll(".accolade");

//             circles.forEach(circle => {

//                 // Restart the animation
//                 circle.classList.remove("animate-circle");

//                 // Force browser to reset animation
//                 void circle.offsetWidth;

//                 circle.classList.add("animate-circle");
//             });

//         }

//     });

// }, {
//     threshold: 0.3
// });

// observer.observe(accolades);

