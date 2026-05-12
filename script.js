const navLinks = document.querySelectorAll(".site-nav a");
const sections = [...document.querySelectorAll("section[id]")];
const form = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");
const carousels = document.querySelectorAll(".carousel-visual");

const setActiveNav = () => {
  const current = sections.findLast((section) => window.scrollY >= section.offsetTop - 160);

  navLinks.forEach((link) => {
    link.classList.toggle("active", current && link.getAttribute("href") === `#${current.id}`);
  });
};

window.addEventListener("scroll", setActiveNav, { passive: true });
setActiveNav();

carousels.forEach((carousel) => {
  const images = [...carousel.querySelectorAll("img")];
  const dots = [...carousel.querySelectorAll(".carousel-dots i")];
  let index = 0;

  if (images.length < 2) return;

  window.setInterval(() => {
    images[index].classList.remove("active");
    dots[index]?.classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
    dots[index]?.classList.add("active");
  }, 3200);
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  form.reset();
  formStatus.textContent = "已收到你的訊息範例。正式上線時可串接表單服務或改為 Email 寄送。";
});
