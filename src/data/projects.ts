export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  repoUrl: string;
  demoUrl?: string;
  skills: string[];
};

export const projects: Project[] = [
  {
    id: "dbs-product-management",
    title: "AI Product Intelligence Platform",
    description:
      "Enterprise-grade, AI-powered product management platform built with ASP.NET Core 8, Angular 21, Groq LLaMA-3.3-70B, Qdrant vector search, and Ollama embeddings. Combines Clean Architecture, CQRS with MediatR, agentic AI function calling, and RAG for conversational product search and automated document Q&A.",
    image: "/assets/projects/Dashboard_Overview.png",
    techStack: [
      "C#",
      "ASP.NET Core 8",
      "Angular 21",
      "TypeScript",
      "Groq (LLaMA-3.3)",
      "Qdrant (Vector DB)",
      "Ollama Embeddings",
      "EF Core",
      "SQL Server",
      "MediatR (CQRS)",
      "AutoMapper",
      "FluentValidation",
      "JWT & Refresh Tokens",
      "RxJS & Signals",
      "Tailwind CSS 4",
      "Docker",
      "Swagger/OpenAPI",
    ],
    repoUrl: "https://github.com/Dev-Ahmed-Ashraf/-AI-Product-Intelligence-Platform-",
    demoUrl:
      "https://drive.google.com/file/d/1O7r_LgC-59QLNwL-4cutUn7GmQBnQFOm/view?usp=sharing",
    skills: [
      "Agentic AI & Function Calling",
      "RAG (Retrieval-Augmented Generation)",
      "Vector Search (Qdrant)",
      "Ollama Local Embeddings",
      "Full-Stack Development",
      "Clean Architecture",
      "CQRS & MediatR",
      "JWT & Refresh Token Rotation",
      "Granular Permission-Based Authorization",
      "Async Background Ingestion Worker",
      "Angular 21 & Signals",
      "PDF Ingestion & Text Extraction",
    ],
  },
  {
    id: "onlinecourses-notifications",
    title: "Online Courses Notifications Microservice",
    description:
      "Backend microservice built for an Online Courses Platform to handle in-app, email, and push notifications using event-driven communication. Designed with Clean Architecture and CQRS, and implemented reliable delivery with Outbox Pattern, background workers, and retry/failure handling.",
    image: "/assets/projects/OnlineCourses_Notifications.png",
    techStack: [
      "C#",
      "ASP.NET Core Web API",
      "EF Core",
      "SQL Server",
      "Stored Procedures (TVPs)",
      "MediatR (CQRS)",
      "FluentValidation",
      "MassTransit",
      "RabbitMQ",
      "Firebase Admin SDK (FCM)",
    ],
    repoUrl:
      "https://github.com/Dev-Ahmed-Ashraf/OnlineCourseSystem.Notifications",
    skills: [
      "Microservices & Event-Driven Architecture",
      "RabbitMQ + MassTransit",
      "Outbox Pattern & Reliable Delivery",
      "Background Workers",
      "Multi-Channel Notifications",
      "RabbitMQ Messaging (MassTransit)",
      "Stored Procedures (SQL Server)",
      "CQRS & MediatR",
    ],
  },
  {
    id: "hotelbooking-api",
    title: "Hotel Booking API (.NET 8)",
    description:
      "Modular booking API with 40+ RESTful endpoints across hotels, rooms, offers, availability, bookings, reviews, and payments. Built with Clean Architecture and CQRS, secured with JWT/RBAC, and enhanced with validation pipelines, logging, Docker, and CI/CD automation.",
    image: "/assets/projects/Hotel_Booking_API.png",
    techStack: [
      "C#",
      "ASP.NET Core Web API",
      "EF Core",
      "SQL Server",
      "MediatR (CQRS)",
      "FluentValidation",
      "AutoMapper",
      "JWT Authentication",
      "Serilog",
      "Stripe",
      "Docker",
    ],
    repoUrl: "https://github.com/Dev-Ahmed-Ashraf/Hotel_Booking_API",
    demoUrl:
      "https://app-hotelbooking-production-fzajfm.azurewebsites.net/swagger",
    skills: [
      "Clean Architecture",
      "CQRS & MediatR",
      "JWT Authentication & RBAC",
      "Stripe Payment Integration",
      "Error Handling & Logging",
      "Docker & GitHub Actions",
      "Performance Optimization",
    ],
  },
  {
    id: "ecommerce-mvc",
    title: "E-Commerce Platform (MVC)",
    description:
      "End-to-end e-commerce platform covering product management, cart, checkout, authentication, and order workflows. Improved UX using AJAX-driven partial updates and implemented secure identity, pagination, logging, and server-side validation.",
    image: "/assets/projects/E-Commerce_Main_Page.png",
    techStack: [
      "C#",
      "ASP.NET Core MVC",
      "EF Core",
      "LINQ",
      "SQL Server",
      "ASP.NET Identity",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "AJAX",
      "Bootstrap 5",
    ],
    repoUrl: "https://github.com/Dev-Ahmed-Ashraf/E-Commerce_Project",
    skills: [
      "Authentication & Authorization",
      "AJAX-based Dynamic UI",
      "Order & Checkout Management",
      "Pagination & Query Optimization",
      "Server-Side Validation",
    ],
  },
];
