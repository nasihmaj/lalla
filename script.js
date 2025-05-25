/* ── AOS init ── */
AOS.init({duration:800, once:true});

/* ── Navbar shadow on scroll ── */
const nav = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  nav.classList.toggle("shadow", window.scrollY > 10);
});

/* ── Dynamically load pic1.png … pic30.png (stop when a file fails) ── */
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("grid");
  const MAX = 30;           // raise if you have more
  for (let i = 1; i <= MAX; i++) {
    const img = new Image();
    img.src = `assets/images/pic${i}.png`;
    img.alt = `Lalla product ${i}`;
    img.onload = () => grid.appendChild(img);
  }
});
