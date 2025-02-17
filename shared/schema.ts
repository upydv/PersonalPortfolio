import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const profile = {
  name: "Updesh Kumar",
  title: "Aspiring Software Engineer with expertise in full-stack development and software engineering. Proficient in C++, Python, JavaScript, React, Node.js, Express.js, and SQL, with a strong command of data structures, algorithms, OOP, and SDLC. Successfully implemented a Unified KYC System, enhancing operational efficiency. Holds multiple certifications and practical experience through internships, bringing innovation and technical expertise to every project. Passionate about developing scalable solutions and eager to contribute to innovative tech initiatives.",
  email: "updesh.kumar@srmap.edu.in",
  phone: "8650701726",
  photoUrl: "/upphoto.png", // Updated with your photo
  education: [
    {
      school: "SRM University",
      degree: "Bachelor of Technology in Computer Science",
      grade: "CGPA: 8.05",
      duration: "2021 - 2025",
      location: "Guntur, Andhra Pradesh"
    },
    {
      school: "Vidyagyan School",
      degree: "CBSE Class XII",
      grade: "Percentage: 95.4%",
      duration: "2020 - 2021",
      location: "Bulandshahr, Uttar Pradesh"
    },
    {
      school: "Vidyagyan School",
      degree: "CBSE Class X",
      grade: "Percentage: 94.8%",
      duration: "2018 - 2019",
      location: "Bulandshahr, Uttar Pradesh"
    }
  ],
  projects: [
    {
      title: "Unified KYC System",
      type: "Software Engineering, Full Stack Development",
      date: "February 2024",
      description: [
        "Engineered a cutting-edge Unified KYC System by leveraging a full-stack development approach; digitized the conventional KYC process for financial institutions and online retailers, leading to a 40% reduction in onboarding time and a 25% increase in compliance accuracy.",
        "Created a secure database to store customer data, facilitating seamless KYC verification across multiple institutions by generating a unique KYC ID (AASIN) for each individual, ensuring regulatory compliance, and significantly reducing paperwork by up to 80%."
      ],
      url: "https://github.com/upydv/Unified-KYC-System",
      screenshot: "" // Will be updated when screenshot is provided
    },
    {
      title: "TastyFair",
      type: "MERN-Stack",
      date: "August 2024",
      description: [
        "Developed a MERN stack e-commerce platform with features like user authentication, product management, and dynamic cart functionality, ensuring seamless user experience.",
        "Integrated responsive front-end with bootstrap and built RESTful APIs for secure data handling and efficient backend operations."
      ],
      url: "https://github.com/upydv/TastyFare",
      screenshot: "" // Will be updated when screenshot is provided
    },
    {
      title: "Street Dog Management System",
      type: "C++, Project Planning",
      date: "August 2022",
      description: [
        "Developed an interface to manage street dogs, including medical care and adoption tracking, improving organizational efficiency and animal welfare.",
        "Implemented a system to record and monitor stray dogs' health status and adoptions, ensuring humane rescue and protection efforts."
      ],
      url: "https://github.com/upydv/street-dog-management", // Dummy link as requested
      screenshot: "" // Will be updated when screenshot is provided
    },
    {
      title: "Glasstique",
      type: "Web Development",
      date: "January 2024",
      description: [
        "Developed a modern e-commerce platform for eyewear products",
        "Implemented responsive design and seamless user experience"
      ],
      url: "https://github.com/upydv/Glasstique",
      screenshot: "" // Will be updated when screenshot is provided
    },
    {
      title: "Zoho Invoice Generator Clone",
      type: "Web Application",
      date: "December 2023",
      description: [
        "Created a clone of the Zoho Invoice Generator with modern features",
        "Implemented invoice generation and management functionality"
      ],
      url: "https://github.com/upydv/Zoho-Invoice-Generator-Clone",
      screenshot: "" // Will be updated when screenshot is provided
    },
    {
      title: "Image Editor Application",
      type: "Desktop Application",
      date: "November 2023",
      description: [
        "Built a feature-rich image editing application",
        "Implemented various image manipulation tools and filters"
      ],
      url: "https://github.com/upydv/Image-Editor-Application",
      screenshot: "" // Will be updated when screenshot is provided
    }
  ],
  skills: {
    languages: ["C++", "Python", "SQL (MySQL)", "JavaScript", "HTML/CSS"],
    frameworks: ["React", "Node.js", "Express.js"],
    tools: ["Git", "GitHub", "VS Code", "Cursor"],
    concepts: [
      "Data Structures",
      "Algorithms",
      "Object-Oriented Programming (OOPs)",
      "Software Development Life Cycle",
      "Database Management Systems (DBMS)"
    ]
  },
  certifications: [
    {
      title: "Google AI Essentials",
      grade: "Grade Achieved: 100%",
      date: "Dec 2024"
    },
    {
      title: "Design & Implementation of Human-Computer Interfaces",
      grade: "Score Achieved: 84%, Topper- Top 5%",
      date: "Nov 2024"
    },
    {
      title: "Accenture UK Developer and Technology Virtual Experience Programme on Forage",
      description: "Completed a Developer and Technology Job Simulation, mastering the Software Development Lifecycle and researching emerging DevOps trends.",
      date: "April 2024"
    }
  ]
};

// Simple message schema for contact form
export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
});

export const insertMessageSchema = createInsertSchema(messages);
export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type Message = typeof messages.$inferSelect;