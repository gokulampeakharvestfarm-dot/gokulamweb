document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
  document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
  document.getElementById("year").textContent = new Date().getFullYear();
  document.querySelectorAll(".amounts button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".amounts button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
});
