const projects = [
    {
        id: "e-commerce",
        title: "E-Commerce Website",
        language: "React, Node.js, Express, MongoDB, Tailwind CSS, Material UI",
        techStack: ["React", "Node.js", "Express", "MongoDB", "REST API", "Tailwind CSS", "Material UI"],
        image_src: "/portfolio/e-commerce.png",
        desc: "Developed a full-stack e-commerce platform with product listings, user authentication, and secure payment processing",
        fullDescription: "A comprehensive full-stack e-commerce application designed to offer a seamless shopping experience for users while providing robust management features for administrators. Built using the MERN stack with modern UI component libraries. The platform features a dynamic product catalog with advanced search and filtering capabilities, allowing users to find products quickly. The shopping cart system is fully interactive with real-time updates, quantity management, and persistent storage. User authentication is handled securely with JWT tokens, including features like password reset, email verification, and role-based access control. The payment gateway is integrated with Stripe, supporting multiple payment methods and providing a secure checkout experience. On the admin side, a comprehensive dashboard allows for product inventory management, order processing, user management, and sales analytics. The entire application is fully responsive, ensuring a consistent experience across all devices, from mobile phones to desktop computers.",
        features: [
            "User Authentication & Authorization with JWT",
            "Interactive Product Catalog with search, filter, and sorting",
            "Dynamic Shopping Cart & Checkout system",
            "Integrated Payment Gateway using Stripe for secure transactions",
            "Admin dashboard for inventory management and order tracking",
            "Responsive design optimized for mobile, tablet, and desktop"
        ],
        github_link: "https://github.com/Ng462001/ngstore-ecommerce",
        website_link: "https://ngstore-ecommerce.vercel.app/"
    },
    {
        id: "e-course",
        title: "E-Course Site",
        language: "React, Node.js, Express, MySQL",
        techStack: ["React", "Node.js", "Express", "MySQL", "REST API", "Bootstrap"],
        image_src: "/portfolio/e-learning.jpg",
        desc: "Developed an e-course website to provide online learning, featuring course listings, enrollment, and user profiles.",
        fullDescription: "An end-to-end online learning platform built to connect students with educational courses and instructors. The platform features a robust course management system where instructors can create, update, and manage their course content, including video lectures, assignments, and quizzes. Students can browse through a wide range of courses, enroll in their chosen subjects, and track their learning progress through a personalized dashboard. The relational MySQL database schema is carefully designed to ensure data integrity, tracking student enrollments, course progress, quiz scores, and certificate completions. The platform includes a comprehensive search and filtering system, allowing students to find courses based on categories, difficulty levels, and ratings. An integrated payment gateway using Stripe handles course purchases securely. The admin panel provides complete oversight of users, courses, payments, and platform analytics.",
        features: [
            "Browse & search extensive course categories",
            "Student enrollment & course progress tracking",
            "Admin dashboard for uploading & updating course modules",
            "Integrated Payment Gateway using Stripe for secure transactions",
            "Relational MySQL database schema for data integrity",
            "User profiles with courses details and reviews"
        ],
        github_link: "https://github.com/Ng462001/ngtech",
        website_link: "https://ngtech-olive.vercel.app/"
    },
    {
        id: "job-search",
        title: "Job Search Website",
        language: "React, REST API, Bootstrap",
        techStack: ["React", "Bootstrap", "REST API"],
        image_src: "/portfolio/job-search.jpg",
        desc: "Built features for fetching job posting, updates, and deletions, enabling users to manage listings efficiently",
        fullDescription: "A modern job recruitment platform designed to help job seekers find their dream careers and allow employers to post job vacancies efficiently. The platform connects thousands of job seekers with employers across multiple industries. Job seekers can create detailed profiles, upload resumes, and apply to positions with a single click. Advanced search filters allow candidates to find jobs by location, industry, experience level, and salary range. Employers can create company profiles, post job openings, manage applications, and track candidate progress through a dedicated dashboard. The application features real-time job posting updates, application status tracking, and automated email notifications for both candidates and employers. Built with React for a responsive and interactive user experience, the platform ensures seamless navigation across all devices.",
        features: [
            "Real-time job search & filtering by category, location, and type",
            "Job application submission workflow",
            "CRUD operations for job postings (Create, Read, Update, Delete)",
            "Employer candidate management dashboard",
            "Responsive layout for all screen sizes"
        ],
        github_link: "https://github.com/Ng462001/jobs-project",
        website_link: "https://jobsearchproject.vercel.app/"
    },
    {
        id: "e-learning-html",
        title: "E-learning Website",
        language: "HTML, CSS, JavaScript, Bootstrap",
        techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
        image_src: "/portfolio/e-learning-html.png",
        desc: "User Interface: Designed a clean and user-friendly interface with Bootstrap for responsiveness and consistent styling",
        fullDescription: "A clean, modern frontend prototype for an educational website showcasing the power of Bootstrap 5 and custom CSS styling. This project demonstrates a strong focus on user interface design and responsive web development principles. The website features a professional layout with a fully responsive navigation system that adapts to all screen sizes. Interactive elements include a hero section with animated CTAs, course catalog cards with smooth hover effects, and an accordion-style FAQ section. The platform includes a contact form with client-side JavaScript validation, ensuring data integrity before submission. Custom CSS animations enhance the user experience, making the interface feel dynamic and engaging. The entire project is built with mobile-first design principles, ensuring optimal viewing on smartphones, tablets, and desktops. Cross-browser compatibility ensures consistent performance across Chrome, Firefox, Safari, and Edge.",
        features: [
            "Clean & modern UI layout built with Bootstrap 5",
            "Interactive hero section with animated elements",
            "Course catalog cards with hover effects",
            "Contact form with client-side JavaScript validation",
            "Cross-browser compatibility & mobile responsiveness"
        ],
        github_link: "https://github.com/Ng462001/e-learning-site",
        website_link: "https://e-learning-project-live.vercel.app/"
    }
];

export default projects;