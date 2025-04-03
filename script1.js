// const textArray = [
//     "Hi , I'm Graphic Designer",
//     "Hi , I'm Visual Creator",
//     "Hi , I'm T-shirt designer",
// ];

// let index = 0;
// const heroText = document.getElementById("hero-text");

// function changeText() {
//     if (!heroText) return; // Ensure heroText exists

//     heroText.classList.add("fade-out"); // Apply fade-out effect

//     setTimeout(() => {
//         heroText.innerText = textArray[index]; // Change text
//         heroText.classList.remove("fade-out");
//         heroText.classList.add("slide-up"); // Apply slide-up effect

//         index = (index + 1) % textArray.length; // Move to next text
//     }, 500); // Wait for fade-out before changing text

//     setTimeout(() => {
//         heroText.classList.remove("slide-up"); // Remove slide-up after animation
//     }, 1000);
// }

// // Ensure script runs after DOM loads
// document.addEventListener('DOMContentLoaded', function () {
//     setInterval(changeText, 2000);
// });
// console.log(document.getElementById("hero-text"));

// // Smooth scrolling for navigation
// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelectorAll('nav a').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             document.querySelector(this.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     });
// });
// // function scrollToProjects() {
// //     document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
// // }
// function scrollWithBlur() {
//     let projectsSection = document.getElementById("projects");

//     // Apply blur effect to the body
//     document.body.classList.add("blur-effect");

//     // Scroll to the section smoothly
//     projectsSection.scrollIntoView({ behavior: "smooth" });

//     // Remove blur effect after animation
//     setTimeout(() => {
//         document.body.classList.remove("blur-effect");
//     }, 500); // Adjust timing as needed
// }
// const projects = document.querySelectorAll(".project-card");
// const prevBtn = document.getElementById("prevBtn");
// const nextBtn = document.getElementById("nextBtn");
// let currentIndex = 9; // Start from the middle card (9th card)

// function updateSlider() {
//     projects.forEach((card, index) => {
//         card.classList.remove("active"); // Remove active class
//         if (index === currentIndex) {
//             card.classList.add("active"); // Set center card active
//         }
//     });

//     // Calculate offset to center the active card
//     let offset = (currentIndex - 3) * -35; // Adjust based on card width + margin
//     document.querySelector(".projects-container").style.transform = `translateX(${offset}px)`;
// }

// // Button Click Events
// prevBtn.addEventListener("click", () => {
//     currentIndex = (currentIndex > 0) ? currentIndex - 1 : projects.length - 1;
//     updateSlider();
// });

// nextBtn.addEventListener("click", () => {
//     currentIndex = (currentIndex < projects.length - 1) ? currentIndex + 1 : 0;
//     updateSlider();
// });

// // Initialize with the middle card centered
// updateSlider();
const textArray = [
    "Hi , I'm Graphic Designer",
    "Hi , I'm Visual Creator",
    "Hi , I'm T-shirt designer",
];

let index = 0;
const heroText = document.getElementById("hero-text");

function changeText() {
    if (!heroText) return;

    heroText.classList.add("fade-out");

    setTimeout(() => {
        heroText.innerText = textArray[index];
        heroText.classList.remove("fade-out");
        heroText.classList.add("slide-up");

        index = (index + 1) % textArray.length;
    }, 500);

    setTimeout(() => {
        heroText.classList.remove("slide-up");
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function () {
    setInterval(changeText, 2000);
    
    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function scrollWithBlur() {
    let projectsSection = document.getElementById("projects");
    document.body.classList.add("blur-effect");
    projectsSection.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
        document.body.classList.remove("blur-effect");
    }, 500);
}

// In your script1.js, update the updateSlider function:
function updateSlider() {
    const isMobile = window.innerWidth <= 767;
    const translateXValue = isMobile ? 150 : 200; // Less movement on mobile
    
    projects.forEach((card, index) => {
        // ... existing reset code ...
        
        if (index === currentIndex) {
            // ... center card styles ...
        } else if (index < currentIndex) {
            const translateX = -translateXValue * (currentIndex - index);
            // ... rest of left card styles ...
        } else {
            const translateX = translateXValue * (index - currentIndex);
            // ... rest of right card styles ...
        }
    });
}

// Updated Slider Functionality
const projects = document.querySelectorAll(".project-card");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = Math.floor(projects.length / 2); // Start from the middle card

function updateSlider() {
    projects.forEach((card, index) => {
        // Reset all cards
        card.style.transform = '';
        card.style.opacity = '';
        card.style.filter = '';
        card.style.zIndex = '';
        
        // Calculate distance from current index
        const distance = Math.abs(index - currentIndex);
        
        // Apply styles based on position
        if (index === currentIndex) {
            // Center card
            card.style.transform = 'scale(1.2)';
            card.style.opacity = '1';
            card.style.filter = 'none';
            card.style.zIndex = '10';
        } else if (index < currentIndex) {
            // Left side cards
            const scale = 1 - (0.1 * distance);
            const translateX = -200 * (currentIndex - index);
            card.style.transform = `translateX(${translateX}px) scale(${scale})`;
            card.style.opacity = `${1 - (0.3 * distance)}`;
            card.style.filter = `blur(${distance}px)`;
            card.style.zIndex = `${10 - distance}`;
        } else {
            // Right side cards
            const scale = 1 - (0.1 * distance);
            const translateX = 200 * (index - currentIndex);
            card.style.transform = `translateX(${translateX}px) scale(${scale})`;
            card.style.opacity = `${1 - (0.3 * distance)}`;
            card.style.filter = `blur(${distance}px)`;
            card.style.zIndex = `${10 - distance}`;
        }
    });
}

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentIndex < projects.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

// Initialize slider
updateSlider();
