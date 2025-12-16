document.addEventListener("DOMContentLoaded", () => {
  const welcome = document.getElementById("welcome");
  const home = document.getElementById("home");
  const menus = document.querySelectorAll("[data-menu]");
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  // transition bienvenue → accueil
  setTimeout(() => {
    welcome.classList.replace("fade-in", "fade-out");
    home.classList.replace("fade-out", "fade-in");
  }, 1000);

});
