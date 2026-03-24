// ============================
// LANGUAGE SWITCHER
// ============================
const desktopSwitcher = document.getElementById("languageSwitcherDesktop");
const mobileSwitcher = document.getElementById("languageSwitcherMobile");

function changeLanguage(lang) {
    document.querySelectorAll("[data-de]").forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
}

/* Desktop */
if (desktopSwitcher) {
    desktopSwitcher.addEventListener("change", function () {
        changeLanguage(this.value);
        if (mobileSwitcher) mobileSwitcher.value = this.value;
    });
}

/* Mobile */
if (mobileSwitcher) {
    mobileSwitcher.addEventListener("change", function () {
        changeLanguage(this.value);
        if (desktopSwitcher) desktopSwitcher.value = this.value;

        // Close mobile menu after selection
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    });
}

// ============================
// HAMBURGER MENU TOGGLE
// ============================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    });
});

// ============================
// SCROLL REVEAL
// ============================
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
// Initial check on page load
revealOnScroll();

// ============================
// FOOTER YEAR
// ============================
const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// ============================
// FLYER MODAL
// ============================
const flyer = document.getElementById("flyerImage");
const modal = document.getElementById("flyerModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

if (flyer && modal && modalImg && closeModal) {
    flyer.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = flyer.src;
    });

    closeModal.addEventListener("click", () => modal.style.display = "none");

    // Close modal when clicking outside the image
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
    });
}


// Select all course cards
const courseCards = document.querySelectorAll('.course-card');

// Function to check if element is visible
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom > 0
    );
}

// Add 'active' class when in viewport
function checkCards() {
    courseCards.forEach(card => {
        if (isInViewport(card)) {
            card.classList.add('active');
        } else {
            card.classList.remove('active'); // optional: remove when out of view
        }
    });
}

// Listen to scroll and load
window.addEventListener('scroll', checkCards);
window.addEventListener('load', checkCards);