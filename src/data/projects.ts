export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  repoUrl: string;
  skills: string[];
};

export const projects: Project[] = [
  {
    id: "dbs-product-management",
    title: "Product Management System (Full-Stack)",
    description:
      "Enterprise full-stack application for managing products with role-based access control, built during internship at DBS MENA. Features JWT authentication, RBAC, product status tracking, and comprehensive dashboard. Demonstrates production-ready architecture with clean separation between backend APIs and responsive frontend.",
    image: "/assets/projects/DBS_Product_Management.png",
    techStack: [
      "C#",
      "ASP.NET Core 8",
      "Angular 21",
      "TypeScript",
      "EF Core",
      "SQL Server",
      "MediatR (CQRS)",
      "AutoMapper",
      "FluentValidation",
      "JWT Authentication",
      "ASP.NET Core Identity",
      "RxJS",
      "Tailwind CSS",
      "SweetAlert2",
      "Swagger/OpenAPI",
    ],
    repoUrl: "https://github.com/Dev-Ahmed-Ashraf/ProductManagement",
    skills: [
      "Full-Stack Development",
      "Clean Architecture",
      "CQRS & MediatR",
      "JWT Authentication & RBAC",
      "RESTful API Design",
      "Angular Development",
      "RxJS Reactive Programming",
      "Entity Framework Core",
      "SQL Server & Stored Procedures",
      "Responsive UI with Tailwind CSS",
      "API Documentation (Swagger)",
      "Permission-Based Authorization",
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
