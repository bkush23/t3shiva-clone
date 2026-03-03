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
        "cards",
        "news"
    ],
    agency: ["hero", "services", "features", "testimonials", "cards", "cta"],
    gym: ["slider", "teaser", "counters", "content-section", "video", "pricing", "testimonials", "process", "gallery", "cta"],
    medical: ["slider", "teaser", "counters", "content-section", "video", "pricing", "testimonials", "process", "accordion", "cta"],
    consulting: ["slider", "content-section", "teaser", "counters", "tabs", "video", "testimonials", "case-studies", "process", "cta"],
    education: ["slider", "teaser", "counters", "content-section", "video", "pricing", "testimonials", "accordion", "process", "gallery", "cta"],
    b2b: ["slider", "content-section", "teaser", "counters", "tabs", "testimonials", "case-studies", "video", "accordion", "cta"],
    "co-working": ["slider", "teaser", "counters", "content-section", "gallery", "pricing", "testimonials", "map", "process", "cta"],
    ecommerce: ["slider", "cards", "content-section", "counters", "gallery", "testimonials", "pricing", "video", "accordion", "cta"],
    "job-directory": ["slider", "content-section", "cards", "counters", "tabs", "case-studies", "testimonials", "accordion", "process", "cta"],
    "mobile-app": ["slider", "content-section", "teaser", "counters", "tabs", "video", "testimonials", "accordion", "process", "cta"],
    "product-landing": ["slider", "content-section", "teaser", "counters", "video", "testimonials", "pricing", "gallery", "accordion", "cta"],
    "saas-subscription": ["slider", "teaser", "content-section", "counters", "tabs", "video", "testimonials", "pricing", "accordion", "case-studies", "cta"],
    "video-conference": ["slider", "teaser", "content-section", "counters", "tabs", "video", "testimonials", "pricing", "accordion", "process", "cta"],
    "web-application": ["slider", "content-section", "teaser", "counters", "tabs", "video", "testimonials", "case-studies", "accordion", "process", "cta"]
};


// Load selected demo layout
async function loadDemo(type = "default") {
    const container = document.getElementById("app");
    container.innerHTML = "";

    const layout = demos[type];

    for (const section of layout) {
        try {
            console.log("Loading:", section);
            const previousCount = container.children.length;

            const response = await fetch(`/components/${section}.html`);

            if (!response.ok) {
                console.error(`Failed to load ${section}.html`, response.status);
                continue;
            }

            const html = await response.text();

            // Simple and reliable
            container.insertAdjacentHTML("beforeend", html);
            const insertedSection = container.children[container.children.length - 1];
            if (insertedSection && container.children.length > previousCount) {
                applyDemoSectionOverrides(type, section, insertedSection);
            }

        } catch (error) {
            console.error(`Error loading ${section}`, error);
        }
    }

    // Initialize scripts after all components are loaded
    if (typeof initScripts === "function") {
        initScripts();
    }
}

function applyDemoSectionOverrides(type, section, sectionEl) {
    if (type === "gym" && section === "slider") {
        sectionEl.classList.add("gym-slider");

        const sliderItems = sectionEl.querySelectorAll(".slider-item");
        const gymSlides = [
            {
                image: "/images/gym-banner-01.jpg",
                title: "Train Hard. Live Strong.",
                description: "Push your limits with elite coaching, modern equipment, and a focused training environment."
            },
            {
                image: "/images/gym-banner-02.jpg",
                title: "Build Strength With Purpose",
                description: "Personal plans, progressive workouts, and accountability to keep your momentum high."
            },
            {
                image: "/images/gym-banner-03.jpg",
                title: "Consistency Creates Results",
                description: "Join classes, track progress, and stay committed to your best body goals."
            }
        ];

        sliderItems.forEach((item, index) => {
            const slide = gymSlides[index % gymSlides.length];
            item.style.backgroundImage = `url('${slide.image}')`;
            item.style.backgroundSize = "cover";
            item.style.backgroundPosition = "center";

            const img = item.querySelector("img");
            if (img) {
                img.src = slide.image;
                img.alt = `Gym workout banner ${index + 1}`;
            }

            const title = item.querySelector(".slider-content h2");
            const description = item.querySelector(".slider-content p");
            if (title) title.textContent = slide.title;
            if (description) description.textContent = slide.description;

            let cta = item.querySelector(".slider-content .btn");
            if (!cta) {
                cta = document.createElement("a");
                cta.href = "#";
                cta.className = "btn btn-primary";
                item.querySelector(".slider-content")?.appendChild(cta);
            }
            cta.textContent = "Get started";
        });
    }
}


