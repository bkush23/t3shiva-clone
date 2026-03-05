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
    agency: ["hero", "services", "features", "testimonials_v6", "agency_ourstory", "counters", "features", "cta_agency", "agency_casestudy", "testimonials_v4"],
    jobdirectory: ["job_directory_hero", "job_directory_brand", "video-section-2", "counters", "tabs", "case-studies", "testimonials", "accordion", "process", "cta"],
    gym: ["slider", "teaser", "counters", "content-section", "video", "pricing", "testimonials", "process", "gallery", "cta"],
    medical: ["slider", "teaser", "counters", "content-section", "video", "pricing", "testimonials", "process", "accordion", "cta"],
    consulting: ["slider", "content-section", "teaser", "counters", "tabs", "video", "testimonials", "case-studies", "process", "cta"],
    education: ["slider", "teaser", "counters", "content-section", "video", "pricing", "testimonials", "accordion", "process", "gallery", "cta"],
    b2b: ["slider", "content-section", "teaser", "counters", "tabs", "testimonials", "case-studies", "video", "accordion", "cta"],
    coworking: ["slider", "teaser", "counters", "content-section", "gallery", "pricing", "testimonials", "map", "process", "cta"],
    ecommerce: ["slider", "cards", "content-section", "counters", "gallery", "testimonials", "pricing", "video", "accordion", "cta"],
    mobileapp: ["slider", "content-section", "teaser", "counters", "tabs", "video", "testimonials", "accordion", "process", "cta"],
    productlanding: ["slider", "content-section", "teaser", "counters", "video", "testimonials", "pricing", "gallery", "accordion", "cta"],
    saassubscription: ["slider", "teaser", "content-section", "counters", "tabs", "video", "testimonials", "pricing", "accordion", "case-studies", "cta"],
    videoconference: ["slider", "teaser", "content-section", "counters", "tabs", "video", "testimonials", "pricing", "accordion", "process", "cta"],
    webapplication: ["slider", "content-section", "teaser", "counters", "tabs", "video", "testimonials", "case-studies", "accordion", "process", "cta"],
    "elements-testimonials": ["testimonials_v1", "testimonials_v2", "testimonials_v3", "testimonials_v4", "testimonials_v5", "testimonials_v6"]
};

const testimonialVariants = {
    default: "testimonials_v1",
    jobdirectory: "testimonials_v2",
    gym: "testimonials_v3",
    medical: "testimonials_v4",
    consulting: "testimonials_v5",
    education: "testimonials_v2",
    b2b: "testimonials_v4",
    coworking: "testimonials_v5",
    ecommerce: "testimonials_v1",
    mobileapp: "testimonials_v2",
    productlanding: "testimonials_v1",
    saassubscription: "testimonials_v3",
    videoconference: "testimonials_v4",
    webapplication: "testimonials_v5"
};

const demoTypeAliases = {
    "job-directory": "jobdirectory",
    "co-working": "coworking",
    "mobile-app": "mobileapp",
    "product-landing": "productlanding",
    "saas-subscription": "saassubscription",
    "video-conference": "videoconference",
    "web-application": "webapplication"
};

function normalizeDemoType(type) {
    return demoTypeAliases[type] || type;
}

function resolveSectionComponent(type, section) {
    const normalizedType = normalizeDemoType(type);
    if (section === "testimonials") {
        return testimonialVariants[normalizedType] || testimonialVariants.default;
    }
    return section;
}


// Load selected demo layout
async function loadDemo(type = "default") {
    const normalizedType = normalizeDemoType(type);
    const container = document.getElementById("app");
    container.innerHTML = "";

    const layout = demos[normalizedType]
        || (normalizedType.startsWith("element-") ? [normalizedType.replace("element-", "")] : [normalizedType]);

    for (const section of layout) {
        try {
            const componentName = resolveSectionComponent(normalizedType, section);
            console.log("Loading:", section, "->", componentName);
            const previousCount = container.children.length;

            // Prefer standard .html files, with a safe fallback for extensionless component files.
            let response = await fetch(`/components/${componentName}.html`);
            if (!response.ok) {
                response = await fetch(`/components/${componentName}`);
            }

            if (!response.ok) {
                console.error(`Failed to load component for section: ${section}`, response.status);
                continue;
            }

            const html = await response.text();

            // Simple and reliable
            container.insertAdjacentHTML("beforeend", html);
            const insertedSection = container.children[container.children.length - 1];
            if (insertedSection && container.children.length > previousCount) {
                applyDemoSectionOverrides(normalizedType, section, insertedSection);
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
