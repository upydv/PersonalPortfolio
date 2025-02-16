import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const profile = {
  name: "Updesh Kumar",
  title: "Software Engineer",
  email: "updesh.kumar@srmap.edu.in",
  phone: "8650701726",
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
      ]
    },
    {
      title: "TastyFair",
      type: "MERN-Stack",
      date: "August 2024",
      description: [
        "Developed a MERN stack e-commerce platform with features like user authentication, product management, and dynamic cart functionality, ensuring seamless user experience.",
        "Integrated responsive front-end with bootstrap and built RESTful APIs for secure data handling and efficient backend operations."
      ]
    },
    {
      title: "Street dog management system",
      type: "C++, Project planning",
      date: "August 2022",
      description: [
        "Developed an interface to manage street dogs, including medical care and adoption tracking, improving organizational efficiency and animal welfare.",
        "Implemented a system to record and monitor stray dogs' health status and adoptions, ensuring humane rescue and protection efforts."
      ]
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
