document.addEventListener("DOMContentLoaded", () => {
  const welcome = document.getElementById("welcome");
  const home = document.getElementById("home");
  const menus = document.querySelectorAll("[data-menu]");

  // transition bienvenue → accueil
  setTimeout(() => {
    welcome.classList.replace("fade-in", "fade-out");
    home.classList.replace("fade-out", "fade-in");
  }, 1000);

  // ouverture menu
  menus.forEach(menu => {
    menu.addEventListener("click", e => {
      e.stopPropagation();

      const opened = menu.classList.contains("active");
      menus.forEach(m => m.classList.remove("active"));
      if (!opened) menu.classList.add("active");
    });

    // IMPORTANT : empêcher la fermeture quand on touche le submenu
    const submenu = menu.querySelector(".submenu");
    submenu.addEventListener("click", e => e.stopPropagation());
  });

  // clic extérieur = fermer
  document.addEventListener("click", () => {
    menus.forEach(menu => menu.classList.remove("active"));
  });
});
