document.addEventListener("DOMContentLoaded", () => {

    const body = document.body;

    const menuButton = document.querySelector(".mobile-menu-button");
    const navigation = document.querySelector(".nav-links");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            const isOpen = navigation.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );
        });

        navigation.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navigation.classList.remove("open");
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }

    const themeButton = document.getElementById("theme-toggle");

    const savedTheme = localStorage.getItem("iss-theme");

    if (savedTheme === "dark") {
        body.classList.add("dark");
    }

    if (themeButton) {
        themeButton.addEventListener("click", () => {

            body.classList.toggle("dark");

            localStorage.setItem(
                "iss-theme",
                body.classList.contains("dark")
                    ? "dark"
                    : "light"
            );
        });
    }

    document.querySelectorAll("[data-current-year]").forEach(element => {
        element.textContent = new Date().getFullYear();
    });

});
