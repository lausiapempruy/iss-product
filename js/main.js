(() => {

  const root = document.documentElement;

  const themeButton =
    document.getElementById("themeToggle");

  const menuButton =
    document.getElementById("menuToggle");

  const navLinks =
    document.getElementById("navLinks");


  /*
   * THEME
   */

  const savedTheme =
    localStorage.getItem("iss-theme");

  const preferredDark =
    window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;


  const initialTheme =
    savedTheme ||
    (preferredDark ? "dark" : "light");


  root.dataset.theme =
    initialTheme;


  function updateThemeIcon() {

    if (!themeButton) return;

    themeButton.textContent =
      root.dataset.theme === "dark"
        ? "☀"
        : "☾";

  }


  updateThemeIcon();


  themeButton?.addEventListener(
    "click",
    () => {

      const next =
        root.dataset.theme === "dark"
          ? "light"
          : "dark";


      root.dataset.theme =
        next;


      localStorage.setItem(
        "iss-theme",
        next
      );


      updateThemeIcon();

    }
  );


  /*
   * MOBILE MENU
   */

  menuButton?.addEventListener(
    "click",
    () => {

      const open =
        navLinks.classList.toggle(
          "open"
        );


      menuButton.setAttribute(
        "aria-expanded",
        String(open)
      );

    }
  );


  navLinks
    ?.querySelectorAll("a")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          navLinks.classList.remove(
            "open"
          );

          menuButton?.setAttribute(
            "aria-expanded",
            "false"
          );

        }
      );

    });


  /*
   * COPYRIGHT YEAR
   */

  document
    .querySelectorAll(".year")
    .forEach(element => {

      element.textContent =
        new Date().getFullYear();

    });

})();
