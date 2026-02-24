// Demo configurations
const demos = {
    default: [
        "hero",
        "services",
        "features",
        "brands",
        "facts",
        "video",
        "testimonials",
        "cards"
    ],

    gym: [
        "hero",
        "features",
        "facts",
        "testimonials",
        "cards"
    ],

    medical: [
        "hero",
        "services",
        "testimonials",
        "video",
        "cards"
    ]
};


// Load selected demo layout
async function loadDemo(type = "default") {
    const container = document.getElementById("app");
    container.innerHTML = "";

    const layout = demos[type];

    for (const section of layout) {
        try {
            console.log("Loading:", section);

            const response = await fetch(`components/${section}.html`);

            if (!response.ok) {
                console.error(`Failed to load ${section}.html`, response.status);
                continue;
            }

            const html = await response.text();

            // Simple and reliable
            container.insertAdjacentHTML("beforeend", html);

        } catch (error) {
            console.error(`Error loading ${section}`, error);
        }
    }

    // Initialize scripts after all components are loaded
    if (typeof initScripts === "function") {
        initScripts();
    }
}


