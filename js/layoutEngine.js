// Demo configurations
const demos = {
    default: [
        "hero",
        "services",
        "features",
        // "brands",
        "facts",
        "video",
        "testimonials",
        "cards",
        "news"
    ],
//     agency: ["hero", "services", "features", "testimonials_v6", "agency_ourstory", "counters", "features", "cta_agency", "agency_casestudy", "testimonials_v4"],
//     jobdirectory: ["job_directory_hero", "job_directory_brand", "video-section-2", "process", "featured-jobs", "news", "cta"],
//     gym: ["slider", "hero", "gallary", "testimonials", "video", "pricing", "", "process"],
//     medical: ["slider", "teaser", "counters", "content-section", "video", "pricing", "testimonials", "process", "accordion", "cta"],
//     consulting: ["slider", "content-section", "teaser", "counters", "tabs", "video", "testimonials", "case-studies", "process", "cta"],
//     education: ["slider", "teaser", "counters", "content-section", "video", "pricing", "testimonials", "accordion", "process", "gallery", "cta"],
//     b2b: ["slider", "content-section", "teaser", "counters", "tabs", "testimonials", "case-studies", "video", "accordion", "cta"],
//     coworking: ["slider", "teaser", "counters", "content-section", "gallery", "pricing", "testimonials", "map", "process", "cta"],
//     ecommerce: ["slider", "cards", "content-section", "counters", "gallery", "testimonials", "pricing", "video", "accordion", "cta"],
//     mobileapp: ["slider", "content-section", "teaser", "counters", "tabs", "video", "testimonials", "accordion", "process", "cta"],
//     productlanding: ["slider", "content-section", "teaser", "counters", "video", "testimonials", "pricing", "gallery", "accordion", "cta"],
//     saassubscription: ["slider", "teaser", "content-section", "counters", "tabs", "video", "testimonials", "pricing", "accordion", "case-studies", "cta"],
//     videoconference: ["slider", "teaser", "content-section", "counters", "tabs", "video", "testimonials", "pricing", "accordion", "process", "cta"],
//     webapplication: ["slider", "content-section", "teaser", "counters", "tabs", "video", "testimonials", "case-studies", "accordion", "process", "cta"],
//     "elements-testimonials": ["testimonials_v1", "testimonials_v2", "testimonials_v3", "testimonials_v4", "testimonials_v5", "testimonials_v6"]
// };


  agency: [
    "hero",
    "services",
    "features",
    "testimonials_v6",
    "agency_ourstory",
    "counters",
    "features",
    "cta_agency",
    "agency_casestudy",
    "testimonials_v4"
  ],
  jobdirectory: [
    "job_directory_hero",
    "job_directory_brand",
    "video-section-2",
    "process",
    "featured-jobs",
    "news",
    "cta"
  ],
  gym: [
    "gym_slider",
    "hero_gym",
    "gallery_gym",
    "testimonials_gym",
    "pricing_gym",
    "trainers_gym",
  ],
  medical: [
    "medical_hero",
    "brands",
    "process_medical",
    "video_consultation_medical",
    "treatment_online_medical",
    "doctors_medical",
    "medical_profile_section",
    "cta_medical"
  ],

   education: [
    "education_slider",
    "education_facts",
    "education_courses",
    "education_team",
    "education_tabs",
    "newsco",
    "education_contact"
  ],

  b2b: [
    "hero_b2b",
    "b2b_video_alert",
    "b2b_content_stats",
    "b2b_services",
    "b2b_features",
    "b2b_video_section",
    "b2b_testimonials",
    "b2b_cta",
  ],

  consulting: [
    "consulting_slider",
    "consulting_facts",
    "services",
    "consulting_process",
    "consulting_alert",
    "features",
    "consulting_cta"
  ],
 
  
  coworking: [
    "slider",
    "teaser",
    "counters",
    "content-section",
    "gallery",
    "pricing",
    "testimonials",
    "map",
    "process",
    "cta"
  ],
  ecommerce: [
    "slider",
    "cards",
    "content-section",
    "counters",
    "gallery",
    "testimonials",
    "pricing",
    "video",
    "accordion",
    "cta"
  ],
  mobileapp: [
    "slider",
    "content-section",
    "teaser",
    "counters",
    "tabs",
    "video",
    "testimonials",
    "accordion",
    "process",
    "cta"
  ],
  productlanding: [
    "slider",
    "content-section",
    "teaser",
    "counters",
    "video",
    "testimonials",
    "pricing",
    "gallery",
    "accordion",
    "cta"
  ],
  saassubscription: [
    "slider",
    "teaser",
    "content-section",
    "counters",
    "tabs",
    "video",
    "testimonials",
    "pricing",
    "accordion",
    "case-studies",
    "cta"
  ],
  videoconference: [
    "slider",
    "teaser",
    "content-section",
    "counters",
    "tabs",
    "video",
    "testimonials",
    "pricing",
    "accordion",
    "process",
    "cta"
  ],
  webapplication: [
    "slider",
    "content-section",
    "teaser",
    "counters",
    "tabs",
    "video",
    "testimonials",
    "case-studies",
    "accordion",
    "process",
    "cta"
  ],
  "elements-testimonials": [
    "testimonials_v1",
    "testimonials_v2",
    "testimonials_v3",
    "testimonials_v4",
    "testimonials_v5",
    "testimonials_v6"
  ]
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

const sectionComponentAliases = {
    "video-section-2": "video",
    "cta_agency": "cta",
    "agency_casestudy": "case-studies",
    "agency_ourstory": "content-section",
    "counters": "facts"
};


function normalizeDemoType(type) {
    return demoTypeAliases[type] || type;
}

function isTestimonialVariant(section) {
    return section === "testimonials" || /^testimonials_v\d+$/.test(section);
}

function resolveSectionComponent(type, section) {
    if (isTestimonialVariant(section)) return "testimonials";
    return sectionComponentAliases[section] || section;
}

function getContentBucket(demoType) {
    const content = typeof pageContent !== "undefined" ? pageContent : (window.pageContent || {});
    if (!Object.keys(content).length) return {};
    const reverseAliases = {
        jobdirectory: "job-directory",
        coworking: "co-working",
        mobileapp: "mobile-app",
        productlanding: "product-landing",
        saassubscription: "saas-subscription",
        videoconference: "video-conference",
        webapplication: "web-application"
    };
    return content[demoType] || content[reverseAliases[demoType]] || content.default || {};
}


// Load selected demo layout
async function loadDemo(type = "default") {
    const normalizedType = normalizeDemoType(type);
    document.body.classList.toggle("gym-page", normalizedType === "gym");
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
  if (type === "gym" && (section === "slider" || section === "gym_slider")) {
    sectionEl.classList.add("gym-slider");

        const sliderItems = sectionEl.querySelectorAll(".slider-item");
        const gymSlides = [
            {
                image: "/images/gym-banner-01.jpg",
                title: "Fitness & Power",
                description: "Train with the best personal trainer motivator."
            },
            {
                image: "/images/gym-banner-img-02.jpg",
                title: "Fitness & Power",
                description: "Train with the best personal trainer motivator."
            },
            {
                image: "/images/gym-banner-03.jpg",
                title: "Fitness & Power",
                description: "Train with the best personal trainer motivator."
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

  if (type === "education" && section === "education_slider") {
    sectionEl.classList.add("gym-slider");

    const sliderItems = sectionEl.querySelectorAll(".slider-item");
    sliderItems.forEach((item, index) => {
      const img = item.querySelector("img");
      if (img && img.src) {
        item.style.backgroundImage = `url('${img.src}')`;
        item.style.backgroundSize = "cover";
        item.style.backgroundPosition = "center";
        img.alt = img.alt || `Education banner ${index + 1}`;
      }
    });
  }

  if (type === "jobdirectory" && section === "process") {
        const data = getContentBucket(type)["process-stapes"];
        if (!data) return;

        sectionEl.className = "process-stapes position-relative";
        sectionEl.innerHTML = `
            <div class="container">
                <div class="justify-content-center row">
                    <div class="col-xl-6 col-lg-8 col-sm-10">
                        <div class="text-center mb-12 mb-lg-17">
                            <h2 class="heading-text-4 mb-7">${data.title}</h2>
                            <p class="heading-text-8 px-lg-7 px-xl-0">${data.subtitle}</p>
                        </div>
                    </div>
                </div>
                <div class="align-items-center row process-stapes-with-video">
                    <div class="col-lg-6">
                        <div class="process-steps-image">
                            <img src="${data.image}" alt="" class="w-100">
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="process-stapes-with-video__steps mt-7 mt-lg-0 pl-xl-13">
                            <div class="align-items-center row steps-container">
                                ${data.items ? data.items.map((step, idx) => `
                                <div data-aos="fade-left" data-aos-duration="750" class="col-lg-12 col-md-6 aos-init aos-animate">
                                    <div class="steps__count my-7">
                                        <div class="count bg-blue-opacity mr-8">
                                            <span class="heading-text-9">${idx + 1}</span>
                                        </div>
                                        <div class="media-body">
                                            <h3 class="w-title mb-5 heading-text-7">${step.title}</h3>
                                            <p class="heading-text-9 mb-0">${step.desc}</p>
                                        </div>
                                    </div>
                                </div>
                                `).join("") : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
