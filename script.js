/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});


/* =========================
   CLOSE MOBILE MENU
========================= */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

    });

});


/* =========================
   DARK MODE
========================= */

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeToggle.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeToggle.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});


/* =========================
   REMEMBER DARK MODE
========================= */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.textContent = "☀️";

}


/* =========================
   PROJECT FILTERING
========================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active class from all buttons
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        // Add active class to clicked button
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        projectCards.forEach(function (project) {

            const categories = project.getAttribute("data-category");

            if (
                filter === "all" ||
                categories.includes(filter)
            ) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent =
        `Thank you, ${name}! Your message has been received.`;

    formMessage.style.color = "#f7df1e";

    contactForm.reset();

});


/* =========================
   CURRENT YEAR
========================= */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


/* =========================
   BACK TO TOP
========================= */

const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   SCROLL ANIMATIONS
========================= */

const animatedElements = document.querySelectorAll(
    ".project-card, .skill-card, .education-card, .timeline-item, .about-content"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(function (element) {

    observer.observe(element);

});


/* =========================
   WELCOME MESSAGE
========================= */

console.log(
    "Welcome to my JavaScript portfolio! 🚀"
);