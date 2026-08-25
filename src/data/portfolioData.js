export const personalInfo = {
  name: "Roaim Mehdi",
  title: "Software Engineer & Full Stack Developer",
  location: "Karachi, Pakistan",
  phone: "03702301920",
  email: "roaimmehdi@gmail.com",
  status: "Open for Full-Stack & Frontend Engineering Roles",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  summary: "Software Engineering student at Sir Syed University of Engineering & Technology (SSUET) with practical experience developing responsive web applications, custom WordPress platforms, and mobile apps. Skilled in React.js, JavaScript (ES6+), PHP, Java, Python, and UI/UX implementation."
};

export const educationData = [
  {
    period: "2022 — Present",
    degree: "B.S. in Software Engineering",
    institution: "Sir Syed University of Engineering & Technology (SSUET)",
    status: "In Progress",
    description: "Focusing on software design patterns, data structures & algorithms, web engineering, database systems, and mobile architecture."
  },
  {
    period: "2021",
    degree: "Intermediate in Science (Pre-Engineering)",
    institution: "Govt. National College, Karachi",
    status: "Completed",
    description: "Core coursework in Advanced Mathematics, Physics, and Computer Fundamentals."
  },
  {
    period: "2019",
    degree: "Matriculation in Science",
    institution: "The Smart School",
    status: "Completed",
    description: "Secondary science education with focus on Mathematics and Computer Science."
  }
];

export const experienceData = [
  {
    role: "Frontend Developer Intern",
    company: "The Query Box Software House",
    location: "UK-Based (Remote)",
    period: "2024",
    type: "Remote Internship",
    highlights: [
      "Contributed to client-facing production applications for a UK-based software company.",
      "Developed responsive web interfaces using HTML5, CSS3, JavaScript, React.js, and Bootstrap.",
      "Translated Figma UI/UX designs into reusable, clean, and cross-browser compatible frontend components.",
      "Integrated RESTful APIs to connect frontend views with backend services for dynamic data loading.",
      "Collaborated in Agile sprints with senior developers, participating in code reviews and bug resolution."
    ]
  },
  {
    role: "Full Stack Developer Intern",
    company: "Codes Soft Software House",
    location: "Karachi (On-site)",
    period: "2024",
    type: "On-site Internship",
    highlights: [
      "Built and customized client websites using WordPress, custom themes, and PHP plugins.",
      "Worked across frontend and backend tasks to improve site speed, database performance, and mobile responsiveness.",
      "Managed website content updates, hosting deployment, security hardening, and SEO basics."
    ]
  },
  {
    role: "Computer Science & STEM Instructor",
    company: "Independent Educator",
    location: "Karachi (Remote / Hybrid)",
    period: "2022 — Present",
    type: "Instructional",
    highlights: [
      "Deliver virtual and in-person instruction in Computer Science, Mathematics, Physics, and English.",
      "Create tailored lesson plans, coding challenges, and interactive workshops to strengthen students' problem-solving skills."
    ]
  }
];

export const autovexoData = {
  title: "Autovexo",
  subtitle: "On-Demand Roadside Assistance Mobile Application",
  overview: "Autovexo is an on-demand roadside assistance mobile app that connects stranded drivers with nearby verified mechanics in real-time based on GPS location. Whether a driver suffers a flat tire, dead battery, or mechanical breakdown, Autovexo instantly locates help nearby.",
  problemSolved: "Vehicle breakdowns leave drivers stranded looking through random web listings or calling contacts. Autovexo eliminates search friction with instant, location-based mechanic discovery and direct communication.",
  roles: [
    { title: "Product Owner", desc: "Formulated the overall app concept, defined feature specifications, and mapped user workflows." },
    { title: "Project Manager", desc: "Managed developer sprints, gathered functional requirements, and monitored development milestones." },
    { title: "Quality Assurance Lead", desc: "Executed manual functional, GPS, and security testing across authentication and lock features." }
  ],
  keyFeatures: [
    { title: "Biometric Security App Lock", desc: "PIN code + Fingerprint biometric lock protecting user data (WhatsApp style)." },
    { title: "GPS Mechanic Discovery", desc: "Real-time location lookup of verified mechanics within radius." },
    { title: "Mechanic Profiles & Ratings", desc: "Shows distance, services offered, customer ratings, and direct contact options." },
    { title: "Live Map Integration", desc: "Interactive map interface tracking driver position and nearby service providers." },
    { title: "Authentication System", desc: "Firebase Email/Password login and One-Tap Google OAuth." }
  ],
  techHighlights: [
    "React Native / Mobile App",
    "Google Maps Geolocation API",
    "Firebase Authentication",
    "Biometric Fingerprint API"
  ],
  futureRoadmap: [
    { title: "Live Driver Tracking", desc: "Real-time mechanic vehicle tracking on map as they approach." },
    { title: "Estimated Arrival Time (ETA)", desc: "Traffic-adjusted ETA updates." },
    { title: "In-App Direct Chat", desc: "Direct messaging between driver and mechanic." },
    { title: "Service Categorization", desc: "Filter by Flat Tire, Jump-Start, Towing, Fuel Delivery, or Engine Work." },
    { title: "Price Quotes", desc: "Upfront price estimate before requesting service." },
    { title: "Rating & Review System", desc: "Verified post-service ratings and reviews." },
    { title: "One-Tap SOS Alert", desc: "Emergency alert to nearest provider and emergency contacts." },
    { title: "Digital Payments", desc: "In-app payment integration (Cash, Card, Wallet)." },
    { title: "Mechanic Portal App", desc: "Dedicated provider app for mechanics to manage job requests." },
    { title: "Service History", desc: "Logbook of all previous roadside requests." },
    { title: "Urdu / English Support", desc: "Bilingual interface localization." },
    { title: "Insurance Integration", desc: "Direct integration with auto roadside insurance policies." }
  ]
};

export const portfolioProjects = [
  {
    id: "autovexo",
    title: "Autovexo Roadside Assistance System",
    category: "Mobile Apps",
    image: "/autovexo-welcome.jpeg",
    description: "On-demand roadside assistance app connecting drivers with nearby verified mechanics in real-time.",
    tags: ["React Native", "Google Maps API", "Firebase", "Biometrics"],
    featured: true,
    client: "Autovexo System",
    year: "2025"
  },
  {
    id: "triple-z",
    title: "Triple Z Fitness Gym Website",
    category: "E-Commerce",
    image: "https://codenexra.vercel.app/ecom21.png",
    description: "Modern multi-page fitness platform with dynamic class schedules, trainer profiles, and interactive workout tracking.",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "Responsive UI"],
    featured: true,
    client: "Triple Z Fitness",
    year: "2025"
  },
  {
    id: "tikit-go-portal",
    title: "Tikit&Go Web Portal",
    category: "Web Portals",
    image: "https://codenexra.vercel.app/port1.jpg",
    description: "Scalable ticket booking and dispatch management web portal with live status tracking and admin controls.",
    tags: ["React.js", "Node.js", "REST API", "Admin Dashboard"],
    featured: true,
    client: "Tikit&Go",
    year: "2025"
  },
  {
    id: "kaja-designer",
    title: "KAJA Designer Ladies Handbags",
    category: "E-Commerce",
    image: "https://codenexra.vercel.app/ecom11.png",
    description: "React-based e-commerce platform for a luxury ladies' handbag brand with product catalog filtering and shopping cart UI.",
    tags: ["React.js", "Express.js", "Tailwind CSS", "Cart System"],
    featured: true,
    client: "KAJA Store",
    year: "2025"
  },
  {
    id: "dr-remote-web",
    title: "Dr. Remote Healthcare Platform",
    category: "Web Apps",
    image: "https://codenexra.vercel.app/web21.jpg",
    description: "Telehealth web portal enabling virtual doctor consultations, appointment booking, and patient records.",
    tags: ["React.js", "Node.js", "MongoDB", "REST API"],
    featured: false,
    client: "Dr. Remote",
    year: "2024"
  },
  {
    id: "dr-remote-app",
    title: "Dr. Remote Mobile App",
    category: "Mobile Apps",
    image: "https://codenexra.vercel.app/app12.jpg",
    description: "Mobile app for virtual consultations, digital prescription access, and secure health records.",
    tags: ["React Native", "Java", "Firebase", "Biometrics"],
    featured: false,
    client: "Dr. Remote Mobile",
    year: "2024"
  },
  {
    id: "smh-coders",
    title: "SMH Coders Corporate Website",
    category: "Web Apps",
    image: "https://codenexra.vercel.app/web1.png",
    description: "Full-stack WordPress website development with custom theme layout, plugin integration, and performance tuning.",
    tags: ["WordPress", "PHP", "CSS3", "Plugin Customization"],
    featured: false,
    client: "SMH Coders",
    year: "2025"
  },
  {
    id: "finance-hub",
    title: "Finance Hub Analytics Dashboard",
    category: "Web Apps",
    image: "https://codenexra.vercel.app/web31.png",
    description: "Financial analytics platform providing real-time data visualization and investment tracking dashboards.",
    tags: ["React.js", "Chart.js", "Node.js", "FinTech"],
    featured: false,
    client: "Finance Hub",
    year: "2024"
  },
  {
    id: "digital-docket",
    title: "Digital Docket OCR Receipt System",
    category: "Web Apps",
    image: "https://codenexra.vercel.app/web41.png",
    description: "Web tool utilizing OCR technology for receipt scanning, automatic expense extraction, and digital archiving.",
    tags: ["React.js", "OCR API", "Node.js"],
    featured: false,
    client: "Digital Docket",
    year: "2024"
  },
  {
    id: "conntrave",
    title: "ConnTrave Corporate Travel App",
    category: "Mobile Apps",
    image: "https://codenexra.vercel.app/app3.jpg",
    description: "Mobile application for corporate travel booking, itinerary tracking, and biometric user authentication.",
    tags: ["Mobile UI", "MySQL", "Biometrics"],
    featured: false,
    client: "ConnTrave Inc",
    year: "2024"
  },
  {
    id: "jimset-cms",
    title: "Jimset Academic CMS Portal",
    category: "Web Portals",
    image: "https://codenexra.vercel.app/port2.png",
    description: "Academic content management portal for student administration, course registration, and records management.",
    tags: ["React.js", "Node.js", "MySQL"],
    featured: false,
    client: "Jinnah Institute",
    year: "2024"
  },
  {
    id: "tikit-go-app",
    title: "Tikit&Go Mobile App",
    category: "Mobile Apps",
    image: "https://codenexra.vercel.app/app2.jpg",
    description: "On-demand booking and parcel dispatch mobile application with real-time GPS tracking.",
    tags: ["Mobile App", "GPS Tracking", "REST API"],
    featured: false,
    client: "Tikit&Go App",
    year: "2025"
  },
  {
    id: "kiel-brand",
    title: "Kiel Corporate Brand Identity",
    category: "Graphic Design",
    image: "https://codenexra.vercel.app/Brand1.jpg",
    description: "Minimalist brand identity design guidelines, visual assets, and print collateral.",
    tags: ["Adobe Illustrator", "Branding", "Vector Design"],
    featured: false,
    client: "Kiel Studio",
    year: "2024"
  },
  {
    id: "starting-biz",
    title: "Startup Brand & Identity Package",
    category: "Graphic Design",
    image: "https://codenexra.vercel.app/Brand3.png",
    description: "Corporate identity card and visual branding kit built for modern tech startups.",
    tags: ["Branding", "Print Design", "Identity"],
    featured: false,
    client: "Startup Launch",
    year: "2024"
  },
  {
    id: "vshopfy-logo",
    title: "VSHOPFY Brand Logo Design",
    category: "Graphic Design",
    image: "https://codenexra.vercel.app/Logo1.jpg",
    description: "Modern vector logo design for an e-commerce retail platform.",
    tags: ["Logo Design", "Adobe Illustrator", "Branding"],
    featured: false,
    client: "VShopfy",
    year: "2024"
  },
  {
    id: "bankers-algo",
    title: "Banker's Algorithm Simulator",
    category: "Web Apps",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
    description: "Operating Systems deadlock avoidance simulator for safe state detection and dynamic resource allocation.",
    tags: ["Python", "C++", "OS Algorithms"],
    featured: false,
    client: "Academic Project (SSUET)",
    year: "2024"
  },
  {
    id: "bakery-system",
    title: "Bakery Inventory & Order System",
    category: "Web Apps",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1000",
    description: "Web application for bakery inventory management, online order processing, and automated invoice tax calculations.",
    tags: ["PHP", "MySQL", "Bootstrap"],
    featured: false,
    client: "Bakery Project",
    year: "2023"
  },
  {
    id: "hospital-system",
    title: "Hospital Management System",
    category: "Web Apps",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000",
    description: "System for managing patient medical records, appointment scheduling, staff details, and billing analytics.",
    tags: ["Java", "SQL", "Database System"],
    featured: false,
    client: "Medical Center Project",
    year: "2023"
  }
];

export const skillsData = {
  categories: [
    {
      title: "Frontend Development",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5 / CSS3", "Tailwind CSS", "Bootstrap", "Angular JS"]
    },
    {
      title: "Backend & CMS",
      skills: ["Node.js", "Express.js", "PHP", "WordPress Development", "Java", "Python & OOP"]
    },
    {
      title: "Mobile & OS",
      skills: ["Flutter", "React Native", "Android Development Fundamentals", "Ubuntu (Linux)", "Operating Systems"]
    },
    {
      title: "Design & Media",
      skills: ["UI/UX Implementation", "Adobe Photoshop", "Adobe Illustrator", "Graphic Design"]
    }
  ],
  softSkills: [
    "Technical Communication",
    "Public Presentation",
    "Requirements Gathering",
    "Technical Documentation",
    "Agile Teamwork",
    "Quality Assurance & Manual Testing"
  ],
  certifications: [
    { title: "CertiProf SFPC™", desc: "Scrum Foundation Professional Certification", issuer: "CertiProf", year: "2024" },
    { title: "Python Data Structures", desc: "Data Structures & Algorithms Course Certificate", issuer: "Coursera", year: "2023" },
    { title: "Graphic Design Specialization", desc: "Visual Communication & Design Principles", issuer: "Coursera", year: "2023" }
  ],
  tools: [
    "VS Code", "Visual Studio", "Android Studio", "Postman", "Git & SourceTree", "NetBeans", "Anaconda", "MS Office Suite"
  ]
};
