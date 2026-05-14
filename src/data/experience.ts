export type ProfessionalExperience = {
  id: string;
  company: string;
  role: string;
  type: "internship" | "fulltime";
  period: string;
  location: string;
  locationType: "onsite" | "remote" | "hybrid";
  description: string;
  achievements: string[];
  technologies: string[];
  color: string;
};

export const professionalExperiences: ProfessionalExperience[] = [
  {
    id: "dbs-mena",
    company: "DIGITAL BUSINESS SYSTEMS (DBS MENA)",
    role: "Full Stack .NET Developer Intern",
    type: "internship",
    period: "Apr 2026 — June 2026",
    location: "340 S 90th st. , 5th Settlement, New Cairo, Cairo, Egypt",
    locationType: "onsite",
    description:
      "Built a comprehensive Product Management System demonstrating full-stack development expertise. Collaborated in a professional team environment implementing secure APIs and responsive frontend interfaces.",
    achievements: [
      "Designed and developed secure RESTful APIs using ASP.NET Core with Clean Architecture and CQRS patterns",
      "Built responsive Angular frontend with TypeScript, RxJS, route guards, and HTTP interceptors",
      "Implemented JWT authentication with refresh tokens and role-based access control (RBAC)",
      "Developed product status tracking with pagination, filtering, and comprehensive history management",
      "Utilized Git and GitHub for collaborative development and feature-based workflows",
    ],
    technologies: [
      "C#",
      "ASP.NET Core 8",
      "Angular 21",
      "TypeScript",
      "EF Core",
      "SQL Server",
      "MediatR (CQRS)",
      "AutoMapper",
      "FluentValidation",
      "JWT",
      "RxJS",
      "Tailwind CSS",
    ],
    color: "from-blue-600 to-cyan-600",
  },
  {
    id: "codeway",
    company: "CodeWay",
    role: "Backend Developer Intern",
    type: "internship",
    period: "Sep 2025 — Jan 2026",
    location: "Remote",
    locationType: "remote",
    description:
      "Developed a Notifications Microservice for an Online Courses Platform using event-driven architecture. Implemented sophisticated messaging patterns and reliable delivery mechanisms for distributed systems.",
    achievements: [
      "Built event-driven notifications microservice processing in-app, email, and push notifications",
      "Implemented RabbitMQ and MassTransit for asynchronous inter-service communication",
      "Designed and deployed Outbox Pattern for reliable message delivery with retry and failure handling",
      "Created background workers for scheduled notifications and user preference management",
      "Applied Clean Architecture, CQRS, FluentValidation, and Stored Procedures (TVPs) for maintainability",
      "Collaborated with team using Git, GitHub, and Azure DevOps in remote environment",
    ],
    technologies: [
      "C#",
      "ASP.NET Core",
      "RabbitMQ",
      "MassTransit",
      "EF Core",
      "SQL Server",
      "MediatR (CQRS)",
      "FluentValidation",
      "Stored Procedures",
      "Background Services",
      "Firebase Admin SDK",
    ],
    color: "from-purple-600 to-pink-600",
  },
];
