export const portfolioData = {
  personal: {
    name: "Nikhil Gahane",
    title: "Full Stack Web Developer",
    tagline:
      "Passionate web developer with a strong foundation in full-stack development.",
    location: "Ayodhya Nagar, Nagpur, Maharashtra, India",
    phone: "+91 9422498134",
    email: "nikhil462001@gmail.com",
    availability: "Available for Hire",
    isAvailable: true,
    resumeUrl:
      "https://res.cloudinary.com/duyu0hpog/image/upload/v1786268062/Nikhil_Gahane_Resume.pdf",
    profileImage: "/myimage.jpg",
    bio: [
      "I'm Nikhil Gahane from Nagpur, a passionate web developer with a strong foundation in full-stack development.",
      "Passionate web developer with hands-on experience in React and Node js, experienced in building full-stack applications. Proficient in creating dynamic and user-friendly web solutions, including an E-learning platform and a E-Commerce website project. Completed a web development internship at Digital Ipsum, refining skills in frontend and backend development. Dedicated to delivering innovative, efficient, and engaging digital experiences.",
      "I thrive on creating user-centric solutions, solving complex problems, and contributing to innovative web applications. If you’re looking for a developer with a blend of creativity and technical expertise, I’m excited to connect and collaborate. Let’s build something amazing together! 🚀",
    ],
    socials: {
      github: "https://github.com/Ng462001",
      linkedin: "https://www.linkedin.com/in/nikhil-gahane-94b967220",
      instagram: "https://www.instagram.com/nikhilgahane",
      facebook: "https://www.facebook.com/nikhil.gahane.2001#",
      email: "mailto:nikhil462001@gmail.com",
    },
  },

  stats: [
    { label: "Full stack and mini Projects", value: 5, suffix: "+" },
    { label: "MCA Percentage", value: 71, suffix: "%" },
    { label: "BCA Percentage", value: 81, suffix: "%" },
    { label: "Months Internship", value: 6, suffix: "+" },
  ],

  skillCategories: [
    { id: "all", name: "All Technologies" },
    { id: "frontend", name: "Frontend Development" },
    { id: "backend", name: "Backend & Databases" },
    { id: "tools", name: "Tools & Technologies" },
  ],

  skills: [
    {
      name: "React",
      category: "frontend",
      level: "Advanced",
      icon: "Code2",
      color: "#61DAFB",
    },
    {
      name: "JavaScript",
      category: "frontend",
      level: "Expert",
      icon: "FileCode",
      color: "#F7DF1E",
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      level: "Advanced",
      icon: "Palette",
      color: "#06B6D4",
    },
    {
      name: "Bootstrap 5",
      category: "frontend",
      level: "Expert",
      icon: "Palette",
      color: "#7952B3",
    },
    {
      name: "HTML5 / CSS3",
      category: "frontend",
      level: "Expert",
      icon: "Code2",
      color: "#E34F26",
    },
    {
      name: "Node.js & Express",
      category: "backend",
      level: "Advanced",
      icon: "Server",
      color: "#339933",
    },
    {
      name: "Spring Boot",
      category: "backend",
      level: "Intermediate",
      icon: "Terminal",
      color: "#007396",
    },
    {
      name: "MongoDB",
      category: "backend",
      level: "Advanced",
      icon: "Database",
      color: "#47A248",
    },
    {
      name: "MySQL",
      category: "backend",
      level: "Advanced",
      icon: "Database",
      color: "#4479A1",
    },
    {
      name: "REST API",
      category: "backend",
      level: "Expert",
      icon: "Share2",
      color: "#FF6C37",
    },
    {
      name: "JWT",
      category: "backend",
      level: "Advanced",
      icon: "Activity",
      color: "#000000",
    },
    {
      name: "Stripe",
      category: "tools",
      level: "Intermediate",
      icon: "Cloud",
      color: "#635BFF",
    },
    {
      name: "Git & GitHub",
      category: "tools",
      level: "Advanced",
      icon: "GitBranch",
      color: "#F05032",
    },
    {
      name: "Axios",
      category: "tools",
      level: "Expert",
      icon: "CheckCircle",
      color: "#FF6C37",
    },
  ],

  projects: [
    {
      id: "e-commerce",
      title: "E-Commerce Website",
      category: "React, Node.js, Express, MongoDB",
      categoryTag: "MERN Stack",
      highlight: "Stripe Payment Gateway & JWT Authentication",
      shortDescription:
        "Built a full-stack e-commerce platform with product discovery, cart management, JWT authentication, admin controls, and secure Stripe payments.",
      featured: false,
      image: "/portfolio/e-commerce.png",
      role: "Full Stack Developer",
      duration: "Jan 2026 — Present",
      liveUrl: "https://ngstore-ecommerce.vercel.app/",
      githubUrl: "https://github.com/Ng462001/ngstore-ecommerce",

      tags: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "REST API",
        "Tailwind CSS",
        "Material UI",
        "JWT",
        "Cloudinary",
        "Stripe",
      ],

      metrics: [
        { label: "Payments", value: "Stripe" },
        { label: "Security", value: "JWT Auth" },
        { label: "Media", value: "Cloudinary" },
      ],

      problem:
        "Users need a centralized shopping platform that provides product discovery, secure authentication, cart management, and online payment functionality.",

      solution:
        "Developed a complete MERN-based e-commerce application with product management, search and filtering, persistent shopping cart functionality, JWT authentication, admin controls, and Stripe payment processing.",

      systemArchitecture:
        "React frontend, Express REST APIs, Node.js backend, MongoDB database, Stripe payment gateway, Cloudinary media storage, and JWT-based authentication.",

      keyFeatures: [
        "JWT-based user authentication and authorization",
        "Product catalog with search, filtering, and sorting",
        "Dynamic shopping cart and checkout workflow",
        "Secure online payments using Stripe",
        "Admin dashboard for product and order management",
        "Cloudinary integration for product image management",
        "Responsive UI optimized for mobile, tablet, and desktop",
      ],
    },

    {
      id: "student-management",
      title: "University Student Management System",
      category: "React, Spring Boot, MySQL",
      categoryTag: "Spring Boot & React",
      highlight: "Spring Security, JWT & Role-Based Access Control",
      shortDescription:
        "Built a full-stack university management system for course enrollment, announcements, fee invoicing, attendance tracking, and administrative operations.",
      featured: false,
      image: "/portfolio/student-management.png",
      role: "Full Stack Developer",
      duration: "May 2026 — Aug 2026",
      liveUrl: "https://student-management-ng.vercel.app",
      githubUrl: "https://github.com/Ng462001/student-management",

      tags: [
        "React",
        "Java",
        "Spring Boot",
        "Spring Security",
        "MySQL",
        "Spring Data JPA",
        "JWT",
        "Axios",
        "Bootstrap 5",
        "REST API",
      ],

      metrics: [
        {
          label: "Backend",
          value: "Spring Boot",
        },
        {
          label: "Database",
          value: "MySQL",
        },
        {
          label: "Authorization",
          value: "JWT",
        },
      ],

      problem:
        "Academic institutions require a centralized system to manage students, courses, enrollments, announcements, fees, and attendance while controlling access based on user roles.",

      solution:
        "Developed a full-stack academic management application using React and Spring Boot with Spring Security, JWT authentication, MySQL, and role-based access control for Students and Administrators.",

      systemArchitecture:
        "React frontend, Java Spring Boot REST APIs, Spring Security, JWT authentication, Spring Data JPA, and MySQL relational database.",

      keyFeatures: [
        "Role-Based Access Control for Admin and Student users",
        "JWT authentication and Spring Security authorization",
        "Course enrollment with real-time capacity tracking",
        "Course enrollment and drop functionality",
        "Admin dashboard for managing users, courses, notices, fees, and attendance",
        "Inactive user policy restricting enrollment and status modifications",
        "Campus bulletin system with categories, target audiences, and pinned announcements",
        "Student fee invoice generation and payment recording",
        "Transaction reference number tracking for fee payments",
        "Attendance management with enrollment validation",
        "Automatic attendance percentage calculation",
        "Responsive glassmorphic UI with loading states and password visibility controls",
      ],
    },

    {
      id: "e-course",
      title: "E-Course Site",
      category: "React, Node.js, Express, MySQL",
      categoryTag: "Full Stack Learning",
      highlight: "MySQL Database & Course Administration",
      shortDescription:
        "Built a full-stack e-learning platform with course discovery, student enrollment, secure authentication, online payments, and administrative course management.",
      featured: false,
      image: "/portfolio/e-learning.jpg",
      role: "Full Stack Developer",
      duration: "Jan 2024 — May 2024",
      liveUrl: "https://ngtech-olive.vercel.app/",
      githubUrl: "https://github.com/Ng462001/ngtech",

      tags: [
        "React",
        "Node.js",
        "Express",
        "MySQL",
        "REST API",
        "Bootstrap",
        "JWT",
        "Axios",
        "Stripe",
      ],

      metrics: [
        {
          label: "Database",
          value: "MySQL",
        },
        {
          label: "Backend",
          value: "REST API",
        },
        {
          label: "Management",
          value: "Full CRUD",
        },
      ],

      problem:
        "Students need a centralized platform to discover courses, enroll in learning programs, access course content, and manage their profiles, while administrators need tools to manage courses and students.",

      solution:
        "Developed an end-to-end e-learning platform using React, Node.js, Express, and MySQL with JWT authentication, Stripe payments, course management, student enrollment, and administrative controls.",

      systemArchitecture:
        "React frontend, Node.js and Express REST APIs, MySQL relational database, JWT authentication, Axios API communication, and Stripe payment integration.",

      keyFeatures: [
        "Course browsing and search functionality",
        "Student registration, login, and JWT authentication",
        "Student enrollment and purchased course management",
        "Course lesson and content management",
        "Admin dashboard with CRUD operations",
        "Secure online payments using Stripe",
        "MySQL relational database for structured data management",
        "Student profiles with enrolled course details",
        "Course feedback and review functionality",
        "Responsive UI built with Bootstrap",
      ],
    },

    {
      id: "job-search",
      title: "Job Search Website",
      category: "React, Bootstrap, REST API",
      categoryTag: "Web Application",
      highlight: "Job Search, Filtering & CRUD Operations",
      shortDescription:
        "Built a job recruitment web application with real-time job search, filtering, application submission, and complete job listing management.",
      featured: false,
      image: "/portfolio/job-search.jpg",
      role: "Frontend Developer",
      duration: "3 Months",
      liveUrl: "https://jobsearchproject.vercel.app/",
      githubUrl: "https://github.com/Ng462001/jobs-project",

      tags: [
        "React",
        "Bootstrap",
        "REST API",
        "Axios",
        "JavaScript",
        "Node.js",
        "Express",
        "CORS",
      ],

      metrics: [
        {
          label: "Job Search",
          value: "Real-Time Filtering",
        },
        {
          label: "Job Management",
          value: "Full CRUD",
        },
        {
          label: "API Integration",
          value: "REST + Axios",
        },
      ],

      problem:
        "Job seekers need an efficient way to discover and filter job opportunities, while employers require a simple system for managing job listings and applicants.",

      solution:
        "Developed a responsive job recruitment application that enables users to search and filter vacancies while providing employers with tools to create, update, delete, and manage job listings.",

      systemArchitecture:
        "React single-page application communicating with REST APIs through Axios for job listings, filtering, applications, and CRUD operations.",

      keyFeatures: [
        "Job search and filtering by category, location, and employment type",
        "Dynamic job listing retrieval through REST APIs",
        "Job application submission workflow",
        "CRUD operations for job postings",
        "Employer job listing management",
        "Candidate management functionality",
        "Axios-based API communication",
        "Responsive Bootstrap layout for mobile, tablet, and desktop",
      ],
    },

    {
      id: "e-learning-html",
      title: "E-Learning Website",
      category: "HTML, CSS, JavaScript, Bootstrap",
      categoryTag: "Frontend Development",
      highlight: "Bootstrap 5 Responsive UI & JavaScript Validation",
      shortDescription:
        "Designed and developed a responsive e-learning website using HTML5, CSS3, JavaScript, and Bootstrap 5 with interactive UI components and client-side form validation.",
      featured: false,
      image: "/portfolio/e-learning-html.png",
      role: "Frontend Developer",
      duration: "2 Months",
      liveUrl: "https://e-learning-project-live.vercel.app/",
      githubUrl: "https://github.com/Ng462001/e-learning-site",

      tags: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap 5",
        "Responsive Web Design",
      ],

      metrics: [
        {
          label: "UI Framework",
          value: "Bootstrap 5",
        },
        {
          label: "Form Validation",
          value: "JavaScript",
        },
        {
          label: "Responsive Design",
          value: "Cross-Device",
        },
      ],

      problem:
        "Educational websites require a clean and responsive interface that allows users to browse courses, interact with content, and submit information through accessible forms.",

      solution:
        "Designed and developed a modern frontend e-learning website using semantic HTML5, custom CSS, JavaScript, and Bootstrap 5 to deliver a responsive and user-friendly learning experience.",

      systemArchitecture:
        "Semantic HTML5 structure, CSS3 styling and animations, Bootstrap 5 responsive grid system, and client-side JavaScript functionality.",

      keyFeatures: [
        "Modern and responsive e-learning interface",
        "Bootstrap 5 grid system for responsive layouts",
        "Interactive hero section with animated elements",
        "Course catalog cards with hover interactions",
        "Contact form with JavaScript validation",
        "Responsive navigation and content sections",
        "Cross-browser compatible frontend",
        "Mobile, tablet, and desktop responsive design",
      ],
    },
  ],

  experience: [
    {
      company: "Digital Ipsum",
      role: "Web Development Intern",
      period: "May 2025 — Nov 2025",
      location: "Remote, India",
      description:
        "Completed a web development internship at Digital Ipsum, refining skills in frontend and backend development.",
      highlights: [
        "Designed and developed a website with flawless payment gateway integration, Demonstrating Mastery in HTML5, CSS3, Bootstrap, React, Node js and Express js.",
        "Created an exceptional User experience and ensure seamless functionality.",
        "Make the website responsive and user-friendly.",
        "Identified and resolved front-end issues to enhance functionality and user experience.",
        "Optimized web pages for faster load times and efficient resource management.",
      ],
    },
  ],

  education: [
    {
      institution: "Jaywant Rao College of Engineering, Hadpsar Pune",
      degree: "Master of Computer Applications(MCA)",
      period: "2022 — 2024",
      details: "Percentage: 71%",
    },
    {
      institution: "Prerna College, Nagpur",
      degree: "Bachelor of Computer Application(BCA)",
      period: "2019 — 2022",
      details: "Percentage: 81.15%",
    },
  ],
};
