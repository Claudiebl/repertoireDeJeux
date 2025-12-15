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

  // menus
  menus.forEach((menu) => {
    menu.addEventListener("click", (e) => {
      const opened = menu.classList.contains("active");
      menus.forEach((m) => m.classList.remove("active"));

      if (!opened) menu.classList.add("active");
    });
  });

  // fermeture AU CLIC EXTÉRIEUR → desktop uniquement
  if (!isMobile) {
    document.addEventListener("click", () => {
      menus.forEach((menu) => menu.classList.remove("active"));
    });
  }
});
