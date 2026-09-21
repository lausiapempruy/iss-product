(() => {

  const root =
    document.documentElement;


  const themeButton =
    document.getElementById(
      "themeToggle"
    );


  const menuButton =
    document.getElementById(
      "menuToggle"
    );


  const navLinks =
    document.getElementById(
      "navLinks"
    );


  /*
   * =========================
   * THEME
   * =========================
   */


  const savedTheme =
    localStorage.getItem(
      "iss-theme"
    );


  const preferredDark =
    window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;


  const initialTheme =
    savedTheme ||
    (
      preferredDark
        ? "dark"
        : "light"
    );


  root.dataset.theme =
    initialTheme;


  function updateThemeIcon() {

    if (!themeButton) {
      return;
    }


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
   * =========================
   * MOBILE NAV
   * =========================
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
   * =========================
   * YEAR
   * =========================
   */


  document
    .querySelectorAll(".year")
    .forEach(element => {

      element.textContent =
        new Date()
          .getFullYear();

    });


  /*
   * =========================
   * PRODUCT INFO ROUTING
   * =========================
   */


  const productInfo =
    document.getElementById(
      "productInfo"
    );


  if (productInfo) {

    const params =
      new URLSearchParams(
        window.location.search
      );


    const selectedProduct =
      params.get("product");


    const sections =
      document.querySelectorAll(
        "[data-product]"
      );


    /*
     * Default:
     * CustomChat
     */


    if (
      !selectedProduct ||
      (
        selectedProduct !== "customchat" &&
        selectedProduct !== "main-menu"
      )
    ) {

      sections.forEach(section => {

        section.style.display =
          section.dataset.product ===
          "customchat"
            ? ""
            : "none";

      });

      document.title =
        "CustomChat — ISS Product";

    }


    else {

      sections.forEach(section => {

        section.style.display =
          section.dataset.product ===
          selectedProduct
            ? ""
            : "none";

      });


      if (
        selectedProduct ===
        "main-menu"
      ) {

        document.title =
          "Main Menu System — ISS Product";

      }


      else {

        document.title =
          "CustomChat — ISS Product";

      }

    }

  }

})();
