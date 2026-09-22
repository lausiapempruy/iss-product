const ISS_PRODUCTS = {
    customchat: {
        id: "customchat",
        name: "Chat Custom V2",
        shortName: "CustomChat",
        category: "ROBLOX CHAT SYSTEM",
        version: "2.0.0",

        description:
            "A custom Roblox chat interface built around TextChatService, responsive layouts, configurable presentation, and Roblox's built-in filtering and moderation pipeline.",

        modelUrl:
            "https://create.roblox.com/store/asset/88921022251990/Chat-Custom-V2",

        features: [
            "Custom chat interface generated through Roblox UI",
            "TextChatService-based message handling",
            "Responsive layout for PC, tablet, and mobile",
            "Top-left chat presentation",
            "Configurable appearance and layout",
            "Roblox filtering and moderation support",
            "Optional translation support",
            "Security-focused client/server architecture"
        ],

        installation: [
            "Insert the product into Roblox Studio.",
            "Follow the included README for the required service locations.",
            "Review the configuration before publishing your experience.",
            "Test the chat on the Roblox client sizes you support."
        ]
    },

    "main-menu-system": {
        id: "main-menu-system",
        name: "Main Menu System",
        shortName: "Main Menu System",
        category: "ROBLOX UI SYSTEM",
        version: "1.0.0",

        description:
            "A script-generated Roblox main menu with responsive controls, settings, credits, notifications, reduced-motion support, and server-authoritative state handling.",

        modelUrl:
            "https://create.roblox.com/store/asset/105575045176705/Main-Menu-System",

        features: [
            "100% script-generated interface",
            "Responsive PC, tablet, and mobile layout",
            "Keyboard, touch, and gamepad support",
            "Settings and Credits screens",
            "Toast notifications",
            "Reduced-motion support",
            "Automatic folder and RemoteEvent setup",
            "Server-authoritative state handling",
            "Request validation and type checking",
            "Cooldown and rate-limit handling",
            "ISS Product branding"
        ],

        installation: [
            "Insert the model into Roblox Studio.",
            "Ungroup the server package into ServerScriptService.",
            "Ungroup the client package into StarterPlayerScripts.",
            "Use the included configuration to adjust the system.",
            "Play-test the menu before publishing the experience."
        ]
    }
};

function createProductCard(product) {
    return `
        <article class="product-card">

            <div class="product-card-top">
                <div class="product-symbol" aria-hidden="true">
                    <svg viewBox="0 0 48 48">
                        <rect x="5" y="5" width="38" height="38" rx="10"></rect>
                        <path d="M14 17h20M14 24h14M14 31h20"></path>
                    </svg>
                </div>

                <span class="product-version">v${product.version}</span>
            </div>

            <div class="product-card-body">
                <p class="eyebrow">${product.category}</p>

                <h2>${product.name}</h2>

                <p>${product.description}</p>
            </div>

            <div class="product-card-footer">
                <a
                    href="info.html?product=${product.id}"
                    class="text-link"
                >
                    Product information
                    <span aria-hidden="true">→</span>
                </a>
            </div>

        </article>
    `;
}

function renderProducts() {
    const allProducts = document.getElementById("all-products");
    const featuredProducts = document.getElementById("featured-products");

    const products = Object.values(ISS_PRODUCTS);

    if (allProducts) {
        allProducts.innerHTML = products
            .map(createProductCard)
            .join("");
    }

    if (featuredProducts) {
        featuredProducts.innerHTML = products
            .map(createProductCard)
            .join("");
    }
}

function renderProductDetail() {
    const title = document.getElementById("product-title");

    if (!title) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const productId = params.get("product") || "customchat";
    const product = ISS_PRODUCTS[productId];

    if (!product) {
        window.location.href = "products.html";
        return;
    }

    document.title = `${product.name} | ISS Product`;

    document.getElementById("product-category").textContent =
        product.category;

    document.getElementById("product-title").textContent =
        product.name;

    document.getElementById("product-description").textContent =
        product.description;

    document.getElementById("product-version").textContent =
        product.version;

    const modelLink = document.getElementById("product-model-link");

    modelLink.href = product.modelUrl;

    document.getElementById("product-features").innerHTML =
        product.features
            .map(feature => `<li>${feature}</li>`)
            .join("");

    document.getElementById("product-installation").innerHTML =
        product.installation
            .map((step, index) => `
                <div class="installation-step">
                    <span>${String(index + 1).padStart(2, "0")}</span>
                    <p>${step}</p>
                </div>
            `)
            .join("");
}

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    renderProductDetail();
});
