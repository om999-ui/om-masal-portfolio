import oracleCert from "@/assets/certs/Oracle_Certificate.pdf.asset.json";
import webDevCert from "@/assets/certs/Certificate_of_web-dev.pdf.asset.json";
import sqlCert from "@/assets/certs/SQL_Basic_Certificate.pdf.asset.json";
import javaCert from "@/assets/certs/java_basic_certificate.pdf.asset.json";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  highlights: string[];
  stack: string[];
  live?: string;
  repo?: string;
  accent: "one" | "two" | "three" | "four";
};

export type Certificate = {
  slug: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  file?: string;
  description?: string;
  accent: "one" | "two" | "three" | "four";
};

export const profile = {
  name: "Om Masal",
  role: "Full-Stack Developer",
  headline: "I build production-ready web apps with the MERN stack.",
  summary:
    "Full-stack developer focused on MERN applications, REST API design and clean, responsive interfaces. I've shipped nutrition tracking, ticketing, job-portal and ML-powered products end to end — from MongoDB schema design to deployed frontends.",
  location: "India",
  email: "ommasal1311@gmail.com",
  phone: "+91 74993 91463",
  phoneHref: "+917499391463",
  resume: "/resume/Om-Masal-Resume.pdf",
  github: "https://github.com/om999-ui",
};

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["React.js", "React Router", "Tailwind CSS", "Recharts", "Axios", "Vite", "HTML5 / CSS3"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "bcrypt.js", "Flask", "Java / JDBC"],
  },
  {
    group: "Data & ML",
    items: ["MongoDB", "Mongoose", "MongoDB Atlas", "MySQL", "Scikit-Learn", "Joblib"],
  },
  {
    group: "Tools & Deploy",
    items: ["Git & GitHub", "Docker", "Vercel", "Render", "Postman", "VS Code"],
  },
];

export const projects: Project[] = [
  {
    slug: "fitmeal",
    title: "FitMeal",
    tagline: "Nutrition tracker with goals, analytics and a live dashboard",
    category: "MERN · Full-Stack",
    description:
      "A MERN nutrition tracking app where users log meals, track calories and macronutrients, set daily goals and visualise progress through an interactive dashboard.",
    highlights: [
      "JWT authentication with protected routes",
      "Interactive nutrition charts and progress cards",
      "Full CRUD meal management with live macro calculation",
      "Daily goal tracking for calories, protein, carbs and fat",
      "Profile management, loading skeletons and toast notifications",
    ],
    stack: [
      "React",
      "Tailwind CSS",
      "Recharts",
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "JWT",
      "Vercel",
      "Render",
    ],
    live: "https://fit-meal-two.vercel.app",
    accent: "one",
  },
  {
    slug: "eventx",
    title: "EventX",
    tagline: "Event ticket booking platform with payments and role-based access",
    category: "MERN · Payments",
    description:
      "A full-stack ticketing platform where users discover events and pay online via Razorpay, organizers publish events and admins review and approve submissions.",
    highlights: [
      "Razorpay checkout with order creation and signature verification",
      "Role-based authorization for users, organizers and admins",
      "Real-time ticket availability and automatic price calculation",
      "Search and filter events by title, category and location",
      "Admin dashboard for approvals, stats and event monitoring",
    ],
    stack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Mongoose", "Razorpay", "JWT"],
    repo: "https://github.com/om999-ui/EventX-Event-Ticket-Booking-Platform",
    accent: "two",
  },
  {
    slug: "jstack",
    title: "JSTACK",
    tagline: "Job portal with listings, search and application workflow",
    category: "Node · REST API",
    description:
      "A job portal web application for browsing listings, applying to roles and managing job data through a secure, scalable REST backend.",
    highlights: [
      "CRUD APIs for job postings and applications",
      "Search and filter jobs by criteria",
      "MongoDB schema design for jobs and applications",
      "API validation, error handling and performance tuning",
    ],
    stack: ["JavaScript", "Node.js", "Express", "MongoDB", "HTML", "CSS"],
    repo: "https://github.com/om999-ui/job-Portal",
    accent: "three",
  },
  {
    slug: "weather-ml",
    title: "Weather Prediction API",
    tagline: "Dockerised Flask app serving a Scikit-Learn temperature model",
    category: "Python · ML · Docker",
    description:
      "A machine-learning powered web app that predicts temperature from user inputs, classifies conditions and visualises results — packaged in Docker for one-command deployment.",
    highlights: [
      "Linear regression model trained with Scikit-Learn and served via Flask",
      "Weather classification: hot, pleasant or cool",
      "Chart.js data visualisation of predictions",
      "Fully containerised with Docker for portable deploys",
    ],
    stack: ["Python", "Flask", "Scikit-Learn", "Joblib", "Chart.js", "Docker"],
    repo: "https://github.com/om999-ui/Dockerized-Flask-Weather-API",
    accent: "four",
  },
  {
    slug: "service-booking",
    title: "Service Booking Backend",
    tagline: "Java + JDBC booking system backed by MySQL",
    category: "Java · MySQL",
    description:
      "A Java backend system for managing service bookings with JDBC and MySQL, covering the full lifecycle of a booking record.",
    highlights: [
      "Create, view, update and delete service bookings",
      "Booking status workflow",
      "Relational schema design and SQL queries via JDBC",
    ],
    stack: ["Java", "JDBC", "MySQL", "SQL"],
    accent: "three",
  },
];

export const certificates: Certificate[] = [
  {
    slug: "oracle-oci-ai-foundations",
    title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
    issuer: "Oracle",
    date: "Jan 2026",
    credentialId: "103387828OCI25AICFA",
    file: oracleCert.url,
    description:
      "Certified in AI fundamentals, machine learning concepts, generative AI, OCI AI services, and responsible AI practices.",
    accent: "one",
  },
  {
    slug: "udemy-full-stack-bootcamp",
    title: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    date: "Aug 2025",
    credentialId: "UC-414d2ab0-19c1-41cb-bc72-a35b8fd5046a",
    verifyUrl: "https://ude.my/UC-414d2ab0-19c1-41cb-bc72-a35b8fd5046a",
    file: webDevCert.url,
    description: "61.5 total hours covering full-stack web development.",
    accent: "two",
  },
  {
    slug: "hackerrank-sql-basic",
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "Aug 2025",
    credentialId: "8C259C823940",
    file: sqlCert.url,
    description: "Passed the HackerRank SQL Basic skill certification test.",
    accent: "three",
  },
  {
    slug: "hackerrank-java-basic",
    title: "Java (Basic)",
    issuer: "HackerRank",
    date: "Jul 2026",
    credentialId: "BCEFD9F4BA94",
    file: javaCert.url,
    description: "Passed the HackerRank Java Basic skill certification test.",
    accent: "four",
  },
  {
    slug: "gssoc-2025-contributor",
    title: "GirlScript Summer of Code 2025 Contributor",
    issuer: "GirlScript Summer of Code",
    date: "2025",
    verifyUrl: "https://gssoc.girlscript.tech/",
    description: "Open Source Project – Java/React Contributions.",
    accent: "two",
  },
];
