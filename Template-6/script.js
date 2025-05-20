//Page reload
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.addEventListener('load', function () {
    window.scrollTo(0, 0);
});

// Sticky navbar logic
const stickyNavbar = document.getElementById("sticky-navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    stickyNavbar.classList.add("visible");
  } else {
    stickyNavbar.classList.remove("visible");
  }
});

//Button movement
document.querySelectorAll('.choose-btn').forEach(button => {
  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Accordion logic
document.querySelectorAll(".accordion-button").forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    const content = button.nextElementSibling;
    content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
  });
});

//mobile-navbar
const openMenuBtn = document.getElementById('openMenu');
const closeMenuBtn = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');
const body = document.body;

openMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  body.style.overflow = 'hidden';
});

closeMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  body.style.overflow = '';
});