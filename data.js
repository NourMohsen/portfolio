/* =====================================================================
   PORTFOLIO CONTENT — edit this file only.
   Source: "Nour Omar Cv.pdf". Items still marked  sample: true  are placeholders.
   App screens are drawn illustrations until you add real screenshots
   to  screens: ["assets/apps/<name>/1.png"]  (see REQUIREMENTS.md).
   ===================================================================== */

window.PORTFOLIO = {
  person: {
    name: "Nour",
    fullName: "Nour Omar",
    initials: "N",
    role: "Flutter Developer",
    location: "Cairo, Egypt",
    availableForWork: true,               // TODO confirm: shows the HIRE ME ribbon on the phone
    photo: "assets/profile.png",
    cv: "assets/Nour_Omar_CV.pdf",
    headline: "I build Flutter apps that feel at home on every phone.",
    intro:
      "Mid-level Flutter developer at Link Development. I build high-performance apps for Android and iOS — clean, scalable code, polished UI and solid API integration.",
    about: [
      "I'm a Flutter developer with a Computer Science degree from Mansoura University. Since 2023 I've shipped more than a dozen apps to Google Play and the App Store: service marketplaces, childcare booking, digital invitations, food ordering, banks' VIP concierge services, education platforms and a medical-learning app.",
      "My work sits between design and engineering: turning detailed UI/UX designs into interactive, polished Flutter screens, wiring them to REST APIs and Firebase, and refactoring existing codebases so they stay fast and easy to grow."
    ]
  },

  contact: {
    email: "noor.mohsen.omar@gmail.com",
    whatsapp: "https://wa.me/201016786853", // TODO confirm this number is on WhatsApp
    phone: "+20 101 678 6853",
    github: "https://github.com/NourMohsen",
    linkedin: "https://www.linkedin.com/in/nour-omar-85b922162",
    responseNote: ""                      // optional, e.g. "I usually reply within a day." (only if true)
  },

  /* Apps from the CV. `screens` takes image paths (portrait phone screenshots).
     Empty = a drawn illustrative screen.  mock: booking | edu | video | market | quiz | notes */
  projects: [
    {
      name: "Bank Concierge Apps",
      tagline: "One concierge platform, shipped for 7 banks",
      year: "", role: "Powered by Peacock Concierge",
      platforms: ["Android", "iOS"],
      summary:
        "A premium lifestyle-concierge app, white-labelled and released as a separate branded app for banks across Egypt and Kuwait. VIP clients book dining, events, travel and errands in one place. Peacock Check is the companion app partners use to verify offers by QR code.",
      highlights: ["One codebase, 7 branded bank apps", "FCM push notifications and dynamic links", "RxDart state management, Get It DI, Google Maps APIs"],
      stack: ["Flutter", "RxDart", "Get It", "FCM", "Google Maps", "White-label theming"],
      links: {},
      variants: [
        { name: "NBE Platinum", icon: "assets/apps/nbe-platinum/icon.jpg", play: "https://play.google.com/store/apps/details?id=com.mpis.nbePlatinumApp", appStore: "https://apps.apple.com/eg/app/nbe-platinum-concierge/id6474630506" },
        { name: "ADCB Concierge", icon: "assets/apps/adcb/icon.png", play: "https://play.google.com/store/apps/details?id=com.mpis.ADCB", appStore: "https://apps.apple.com/app/id6738232466" },
        { name: "KFH Egypt Concierge", icon: "assets/apps/kfh/icon.jpg", play: "https://play.google.com/store/apps/details?id=com.mpis.kfhbank.kfhbank", appStore: "https://apps.apple.com/app/id6760583917" },
        { name: "NBK Egypt Concierge", icon: "assets/apps/nbk/icon.png", play: "https://play.google.com/store/apps/details?id=com.MPIS.nbk_peacock", appStore: "https://apps.apple.com/app/id6742180145" },
        { name: "Boubyan Concierge", icon: "assets/apps/boubyan/icon.png", play: "https://play.google.com/store/apps/details?id=com.mpis.boubyan", appStore: "https://apps.apple.com/us/app/boubyan-concierge/id6738307007" },
        { name: "Gulf Bank Concierge", icon: "assets/apps/gulf-bank/icon.png", play: "https://play.google.com/store/apps/details?id=com.mpis.golf_bank", appStore: "https://apps.apple.com/app/id6755090215" },
        { name: "KIB Concierge", icon: "assets/apps/kib/icon.png", play: "https://play.google.com/store/apps/details?id=com.mpis.kib", appStore: "https://apps.apple.com/app/id6787769544" },
        { name: "Peacock Concierge", icon: "assets/apps/peacock/icon.png", play: "https://play.google.com/store/apps/details?id=com.mpis.kuwaitconc", appStore: "https://apps.apple.com/app/id1519657508" },
        { name: "Peacock Check", icon: "assets/apps/peacock-check/icon.png", play: "https://play.google.com/store/apps/details?id=com.mpis.peacock_check", appStore: "https://apps.apple.com/app/id6752528562" }
      ],
      screens: [], gallery: ["assets/apps/nbe-platinum/1.png", "assets/apps/adcb/2.png", "assets/apps/kfh/2.png", "assets/apps/nbk/3.png", "assets/apps/boubyan/1.png", "assets/apps/gulf-bank/2.png", "assets/apps/kib/3.png", "assets/apps/peacock/2.png", "assets/apps/peacock-check/2.png"], icon: "",
      mock: "booking", seed: "#0B7A55",
      mockData: { title: "Concierge", hero: "Opera night", heroSub: "Cairo Opera House · 2 seats" }
    },
    /* ---- Link Development (current role) — from the company's Google Play listings ---- */
    {
      name: "tasker",
      tagline: "Find trusted service providers, fast",
      year: "", role: "Published by Link Development",
      platforms: ["Android", "iOS"],
      summary:
        "Connects customers with service providers for maintenance, finishing, moving and cleaning. Create a request in minutes, get quotes from nearby providers and track the job step by step.",
      highlights: ["Service requests with multiple quotes", "Chat and calls with providers", "Wallet and live order tracking"],
      stack: ["Flutter", "Dart"],
      links: { play: "https://play.google.com/store/apps/details?id=com.linkdevelopment.tasker", appStore: "https://apps.apple.com/app/id6785246977" },
      screens: ["assets/apps/tasker/3.jpg"], gallery: ["assets/apps/tasker/1.jpg", "assets/apps/tasker/2.jpg", "assets/apps/tasker/3.jpg", "assets/apps/tasker/4.jpg"], icon: "assets/apps/tasker/icon.png",
      mock: "market", seed: "#2E8B57"
    },
    {
      name: "Look at me",
      tagline: "The right teacher or specialist for your child",
      year: "", role: "Published by Link Development",
      platforms: ["Android", "iOS"],
      summary:
        "Parents submit a request with the specialization, location and child's details, then browse teachers' profiles, certificates and ratings to pick the right one.",
      highlights: ["Teacher and specialist profiles with ratings", "Guided multi-step request flow", "Request tracking for parents"],
      stack: ["Flutter", "Dart"],
      links: { play: "https://play.google.com/store/apps/details?id=com.linkdevelopment.lookAtMeApp", appStore: "https://apps.apple.com/app/id6786000223" },
      screens: ["assets/apps/look-at-me/1.png"], gallery: ["assets/apps/look-at-me/1.png", "assets/apps/look-at-me/2.png", "assets/apps/look-at-me/3.png", "assets/apps/look-at-me/4.png"], icon: "assets/apps/look-at-me/icon.png",
      mock: "edu", seed: "#3D5AFE"
    },
    {
      name: "Kids Hub — كيدز هب",
      tagline: "Trusted childcare, booked in minutes",
      year: "", role: "Published by Link Development",
      platforms: ["Android", "iOS"],
      summary:
        "One platform for certified childcare centers, nannies and babysitters: compare ratings and prices, book in-home or on-site care and follow the booking live.",
      highlights: ["Nearby search with ratings and reviews", "Real-time booking status", "Secure online payment and e-wallet"],
      stack: ["Flutter", "Dart"],
      links: { play: "https://play.google.com/store/apps/details?id=com.linkdevelopment.kidshub", appStore: "https://apps.apple.com/app/id6760254832" },
      screens: ["assets/apps/kids-hub/3.png"], gallery: ["assets/apps/kids-hub/1.png", "assets/apps/kids-hub/2.png", "assets/apps/kids-hub/3.png", "assets/apps/kids-hub/4.png"], icon: "assets/apps/kids-hub/icon.png",
      mock: "booking", seed: "#5E9AA8"
    },
    {
      name: "Kids Hub Provider",
      tagline: "The provider side of Kids Hub",
      year: "", role: "Published by Link Development",
      platforms: ["Android", "iOS"],
      summary:
        "Lets nannies, babysitters and childcare centers receive and manage bookings, talk to parents, set availability, post daily stories and follow their earnings.",
      highlights: ["Accept or decline booking requests", "Daily stories for parents", "Earnings and transactions dashboard"],
      stack: ["Flutter", "Dart"],
      links: { play: "https://play.google.com/store/apps/details?id=com.linkdevelopment.kidshubprovider", appStore: "https://apps.apple.com/app/id6760254818" },
      screens: ["assets/apps/kids-hub-provider/2.png"], gallery: ["assets/apps/kids-hub-provider/1.png", "assets/apps/kids-hub-provider/2.png", "assets/apps/kids-hub-provider/3.png", "assets/apps/kids-hub-provider/4.png"], icon: "assets/apps/kids-hub-provider/icon.png",
      mock: "booking", seed: "#5E9AA8"
    },
    {
      name: "Ya Hala — ياهلا",
      tagline: "Digital invitations for every occasion",
      year: "", role: "Published by Link Development",
      platforms: ["Android", "iOS"],
      summary:
        "Create, customise and send elegant invitations for weddings, graduations and birthdays, then manage the guest list in one place.",
      highlights: ["Ready-made and custom invitation templates", "Guest lists sent straight to WhatsApp", "Occasion management and RSVPs"],
      stack: ["Flutter", "Dart"],
      links: { play: "https://play.google.com/store/apps/details?id=com.link.yahala", appStore: "https://apps.apple.com/app/id6764285698" },
      screens: ["assets/apps/ya-hala/2.png"], gallery: ["assets/apps/ya-hala/1.png", "assets/apps/ya-hala/2.png", "assets/apps/ya-hala/3.png", "assets/apps/ya-hala/4.png"], icon: "assets/apps/ya-hala/icon.png",
      mock: "booking", seed: "#7B5BA6"
    },
    {
      name: "Jaras — جرس",
      tagline: "Order from the restaurants around you",
      year: "", role: "Published by Link Development",
      platforms: ["Android", "iOS"],
      summary: "Shows nearby restaurants and lets you order from the popular ones in a few taps, with a built-in wallet.",
      highlights: ["Nearby restaurants", "Wallet balance and payments", "Order history and account settings"],
      stack: ["Flutter", "Dart"],
      links: { play: "https://play.google.com/store/apps/details?id=com.linkdevelopment.jaras", appStore: "https://apps.apple.com/app/id6754528805" },
      screens: ["assets/apps/jaras/3.jpg"], gallery: ["assets/apps/jaras/1.jpg", "assets/apps/jaras/2.jpg", "assets/apps/jaras/3.jpg", "assets/apps/jaras/4.jpg"], icon: "assets/apps/jaras/icon.jpg",
      mock: "market", seed: "#8B1A1A"
    },
    {
      name: "Car House",
      tagline: "Car wash, ordered from your phone",
      year: "", role: "Published by Link Development",
      platforms: ["Android", "iOS"],
      summary: "Book a car wash in a few taps: pick the wash type, choose your location on the map and a time slot, then follow your bookings.",
      highlights: ["Location picker on Google Maps", "Date and time slot booking", "Bookings list with status"],
      stack: ["Flutter", "Dart", "Google Maps"],
      links: { play: "https://play.google.com/store/apps/details?id=com.linkdevelopment.car_house", appStore: "https://apps.apple.com/app/id6754608000" },
      screens: ["assets/apps/car-house/3.jpg"], gallery: ["assets/apps/car-house/1.jpg", "assets/apps/car-house/2.jpg", "assets/apps/car-house/3.jpg", "assets/apps/car-house/4.jpg"], icon: "assets/apps/car-house/icon.png",
      mock: "booking", seed: "#1A9FD0"
    },
    /* ---- Earlier work (from the CV) ---- */
    {
      name: "Taseese — تأسيس",
      tagline: "Learning for every school stage",
      year: "", role: "Published by SADEEMA",
      platforms: ["Android", "iOS"],
      summary:
        "Classes and materials for every stage, sub-sections for each subject, and question sets per section that feed into challenges to lift the student's level.",
      highlights: ["Social authentication", "FCM notifications and dynamic links", "Bloc state management, Hive local storage"],
      stack: ["Flutter", "Bloc", "Hive", "Get It", "FCM"],
      links: {
        play: "https://play.google.com/store/apps/details?id=com.edu_tasses.tasesse_app",
        appStore: "https://apps.apple.com/ca/app/taseese-%D8%AA%D8%A3%D8%B3%D9%8A%D8%B3/id6477544252"
      },
      screens: [], gallery: ["assets/apps/taseese/1.png", "assets/apps/taseese/2.jpg", "assets/apps/taseese/3.jpg", "assets/apps/taseese/4.jpg"], icon: "assets/apps/taseese/icon.png", mock: "edu", seed: "#E0662B"
    },
    {
      name: "MedKing",
      tagline: "Medical education in your pocket",
      year: "", role: "Published by Rhmany",
      platforms: ["Android", "iOS"],
      summary:
        "A complete medical-education app for students, practising physicians and anyone curious about medicine, built around video lessons.",
      highlights: ["Video lessons with a custom player", "FCM notifications and dynamic links", "Bloc state management, Get It for DI"],
      stack: ["Flutter", "Bloc", "Get It", "FCM", "Video player"],
      links: {
        play: "https://play.google.com/store/apps/details?id=com.MedKingAppLLC.MedKing",
        appStore: "https://apps.apple.com/app/id6664068510"
      },
      screens: ["assets/apps/medking/3.png"], gallery: ["assets/apps/medking/1.png", "assets/apps/medking/2.png", "assets/apps/medking/3.png", "assets/apps/medking/4.png"], icon: "assets/apps/medking/icon.png", mock: "video", seed: "#1E6FD9"
    },
    {
      name: "Atmemly",
      tagline: "Freelance services across the Arab world",
      year: "", role: "Published by Dubisign",
      platforms: ["Android", "iOS"],
      summary:
        "A marketplace where individuals offer professional services as freelancers and clients hire them online, anywhere in the Arab world.",
      highlights: ["Clean Architecture and clean-code principles", "Bloc (Cubit) state management", "Get It dependency injection"],
      stack: ["Flutter", "Cubit", "Clean Architecture", "Get It"],
      links: {
        play: "https://play.google.com/store/apps/details?id=com.leadution.need4",
        appStore: "https://apps.apple.com/de/app/atmemly/id6459831887"
      },
      screens: [], gallery: ["assets/apps/atmemly/1.png", "assets/apps/atmemly/2.png", "assets/apps/atmemly/3.png", "assets/apps/atmemly/4.png"], icon: "assets/apps/atmemly/icon.png", mock: "market", seed: "#5B4CDB"
    },
    {
      name: "Kateb — كاتب",
      tagline: "Write and blog without paper",
      year: "", role: "Published by SADEEMA",
      platforms: ["Android", "iOS"],
      summary: "A digital alternative to paper for writing and blogging, so ideas are saved and synced in seconds.",
      highlights: ["Firebase Database for storage", "Firebase Auth sign-in", "Provider state management, Get It for DI"],
      stack: ["Flutter", "Provider", "Firebase", "Get It"],
      links: {
        play: "https://play.google.com/store/apps/details?id=com.kateb.kateb",
        appStore: "https://apps.apple.com/eg/app/%D9%83%D8%A7%D8%AA%D8%A8/id6736739010"
      },
      screens: ["assets/apps/kateb/3.png"], gallery: ["assets/apps/kateb/1.png", "assets/apps/kateb/2.png", "assets/apps/kateb/3.png", "assets/apps/kateb/4.png"], icon: "assets/apps/kateb/icon.png", mock: "notes", seed: "#2F7D6D"
    },
    {
      name: "Darb w Tarh — ضرب وطرح",
      tagline: "Arithmetic practice for kids",
      year: "", role: "Published by SADEEMA",
      platforms: ["Android", "iOS"],
      summary: "Teaches simple arithmetic and checks progress with a short exam that tests how well the child has learned.",
      highlights: ["Short adaptive exam flow", "Works fully offline with static data", "Provider state management, Get It for DI"],
      stack: ["Flutter", "Provider", "Get It"],
      links: {
        play: "https://play.google.com/store/apps/details?id=com.sadeema.darbWTarh",
        appStore: "https://apps.apple.com/eg/app/%D8%B6%D8%B1%D8%A8-%D9%88%D8%B7%D8%B1%D8%AD/id1642753425"
      },
      screens: ["assets/apps/darb-w-tarh/4.png"], gallery: ["assets/apps/darb-w-tarh/1.png", "assets/apps/darb-w-tarh/2.png", "assets/apps/darb-w-tarh/3.png", "assets/apps/darb-w-tarh/4.png"], icon: "assets/apps/darb-w-tarh/icon.png", mock: "quiz", seed: "#D9367A"
    }
  ],

  /* Rendered as a pubspec-style YAML file. Keys are groups. */
  skills: {
    languages: ["Dart", "Java", "C#"],
    architecture: ["Clean Architecture", "MVVM", "SOLID", "OOP"],
    state: ["Bloc / Cubit", "Provider", "RxDart"],
    networking: ["Dio", "HTTP", "REST APIs", "Get It"],
    firebase: ["Firestore", "Auth", "Storage", "FCM"],
    features: ["Localization", "Payments", "Deep linking", "Google Maps", "Google & Apple sign-in"],
    storage: ["Hive", "Local database"],
    tools: ["Git & GitHub", "Postman", "Problem solving"],
    release: ["Google Play", "App Store"]
  },

  principles: [
    { title: "Design to app, faithfully", text: "Detailed UI/UX designs become interactive, polished Flutter screens." },
    { title: "Clean, scalable code", text: "Clean Architecture, SOLID and dependency injection keep projects easy to grow." },
    { title: "Shipped, not just built", text: "Every app above is live on both Google Play and the App Store." }
  ],

  experience: [
    {
      period: "Apr 2025 — Now", title: "Mid-level Flutter Developer", org: "Link Development",
      text: "Turning detailed UI/UX designs into polished Flutter apps for diverse business needs, and refactoring codebases for performance, maintainability and scale."
    },
    {
      period: "Mar 2024 — Mar 2025", title: "Flutter Developer", org: "SADEEMA",
      text: "Built custom business apps with designers, developers and testers, and optimised and refactored existing projects."
    },
    {
      period: "Oct 2023 — Feb 2024", title: "Flutter Developer", org: "Dubisign",
      text: "Connected mobile apps to RESTful APIs and backend services, and developed one app end to end with a focus on responsive UI and performance."
    }
  ],

  education: [
    { period: "2017 — 2021", title: "B.Sc. Computer Science", org: "Faculty of Computers & Information, Mansoura University", text: "" }
  ]
};
