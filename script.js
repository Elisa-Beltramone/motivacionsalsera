// Language Switcher
const switcher = document.getElementById("languageSwitcher");
switcher.addEventListener("change", function () {
    const lang = this.value;
    document.querySelectorAll("[data-de]").forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
});

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});


// Close menu on link click (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    });
});

// Scroll Reveal
window.addEventListener("scroll", () => {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
});

const reveals = document.querySelectorAll(".reveal");
reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
        el.classList.add("active");
    }
});
reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100 && !el.classList.contains('active')) {
        el.classList.add('active');
    }
});

// Footer Year
document.getElementById("year").textContent = new Date().getFullYear();

// Flyer Modal
const flyer = document.getElementById("flyerImage");
const modal = document.getElementById("flyerModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

flyer.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = flyer.src;
});
closeModal.addEventListener("click", () => modal.style.display = "none");
modal.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });