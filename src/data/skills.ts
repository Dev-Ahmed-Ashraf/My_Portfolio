export type SkillCluster = {
  id: string;
  title: string;
  description: string;
  items: {
    id: string;
    label: string;
    level: number;
    projects: string[];
  }[];
};

// Skills aligned with actual projects from projects.ts
export const skillClusters: SkillCluster[] = [
  {
    id: "frontend-development",
    title: "Frontend Development",
    description:
      "Building responsive and maintainable user interfaces with modern web tooling.",
    items: [
      {
        id: "angular",
        label: "Angular",
        level: 85,
        projects: ["dbs-product-management"],
      },
      {
        id: "typescript",
        label: "TypeScript",
        level: 87,
        projects: ["ecommerce-mvc", "dbs-product-management"],
      },
      {
        id: "rxjs",
        label: "RxJS",
        level: 82,
        projects: ["dbs-product-management"],
      },
      {
        id: "javascript",
        label: "JavaScript",
        level: 86,
        projects: ["ecommerce-mvc"],
      },
      {
        id: "tailwind-css",
        label: "Tailwind CSS",
        level: 85,
        projects: ["dbs-product-management"],
      },
      { id: "ajax", label: "AJAX", level: 87, projects: ["ecommerce-mvc"] },
    ],
  },
  {
    id: "backend-development",
    title: "Backend Development",
    description:
      "Designing secure, scalable services and APIs with ASP.NET Core.",
    items: [
      {
        id: "csharp",
        label: "C#",
        level: 93,
        projects: [
          "hotelbooking-api",
          "ecommerce-mvc",
          "onlinecourses-notifications",
          "dbs-product-management",
        ],
      },
      {
        id: "aspnet-core",
        label: "ASP.NET Core",
        level: 91,
        projects: [
          "hotelbooking-api",
          "onlinecourses-notifications",
          "dbs-product-management",
        ],
      },
      {
        id: "aspnet-mvc",
        label: "ASP.NET MVC",
        level: 85,
        projects: ["ecommerce-mvc"],
      },
      {
        id: "rest-apis",
        label: "RESTful APIs",
        level: 91,
        projects: [
          "hotelbooking-api",
          "onlinecourses-notifications",
          "dbs-product-management",
        ],
      },
      {
        id: "background-services",
        label: "Background Services",
        level: 84,
        projects: ["onlinecourses-notifications"],
      },
    ],
  },
  {
    id: "architecture-design",
    title: "Architecture & Design Patterns",
    description:
      "Building maintainable enterprise systems using proven architectural approaches.",
    items: [
      {
        id: "clean-architecture",
        label: "Clean Architecture",
        level: 91,
        projects: [
          "hotelbooking-api",
          "onlinecourses-notifications",
          "dbs-product-management",
        ],
      },
      {
        id: "cqrs-mediatr",
        label: "CQRS (MediatR)",
        level: 89,
        projects: [
          "hotelbooking-api",
          "onlinecourses-notifications",
          "dbs-product-management",
        ],
      },
      {
        id: "repository-pattern",
        label: "Repository Pattern",
        level: 87,
        projects: ["hotelbooking-api", "ecommerce-mvc"],
      },
      {
        id: "unit-of-work",
        label: "Unit of Work",
        level: 84,
        projects: ["hotelbooking-api"],
      },
      {
        id: "layered-architecture",
        label: "Layered Architecture",
        level: 82,
        projects: ["ecommerce-mvc"],
      },
      {
        id: "fluentvalidation",
        label: "FluentValidation",
        level: 87,
        projects: [
          "hotelbooking-api",
          "onlinecourses-notifications",
          "dbs-product-management",
        ],
      },
      {
        id: "automapper",
        label: "AutoMapper",
        level: 85,
        projects: ["hotelbooking-api", "dbs-product-management"],
      },
      {
        id: "outbox-pattern",
        label: "Outbox Pattern",
        level: 85,
        projects: ["onlinecourses-notifications"],
      },
    ],
  },
  {
    id: "database-development",
    title: "Database Development",
    description:
      "Designing efficient SQL models and reliable data access layers.",
    items: [
      {
        id: "sql-server",
        label: "SQL Server",
        level: 91,
        projects: [
          "hotelbooking-api",
          "ecommerce-mvc",
          "onlinecourses-notifications",
          "dbs-product-management",
        ],
      },
      {
        id: "tsql",
        label: "T-SQL",
        level: 84,
        projects: ["onlinecourses-notifications"],
      },
      {
        id: "ef-core",
        label: "Entity Framework Core",
        level: 89,
        projects: [
          "hotelbooking-api",
          "ecommerce-mvc",
          "onlinecourses-notifications",
          "dbs-product-management",
        ],
      },
      {
        id: "linq",
        label: "LINQ",
        level: 87,
        projects: [
          "hotelbooking-api",
          "ecommerce-mvc",
          "onlinecourses-notifications",
          "dbs-product-management",
        ],
      },
      {
        id: "stored-procedures",
        label: "Stored Procedures",
        level: 82,
        projects: ["onlinecourses-notifications"],
      },
      {
        id: "indexing-transactions",
        label: "Indexing & Transactions",
        level: 80,
        projects: ["hotelbooking-api"],
      },
    ],
  },
  {
    id: "authentication-security",
    title: "Security & Authentication",
    description:
      "Applying secure authentication flows and authorization controls in production systems.",
    items: [
      {
        id: "jwt-authentication",
        label: "JWT Authentication",
        level: 90,
        projects: ["hotelbooking-api", "dbs-product-management"],
      },
      {
        id: "refresh-tokens",
        label: "Refresh Tokens",
        level: 84,
        projects: ["hotelbooking-api"],
      },
      {
        id: "aspnet-identity",
        label: "ASP.NET Identity",
        level: 84,
        projects: ["ecommerce-mvc"],
      },
      {
        id: "rbac",
        label: "Role-Based Access Control (RBAC)",
        level: 90,
        projects: [
          "hotelbooking-api",
          "ecommerce-mvc",
          "dbs-product-management",
        ],
      },
    ],
  },
  {
    id: "distributed-systems",
    title: "Distributed Systems & Messaging",
    description:
      "Building decoupled services using asynchronous communication patterns.",
    items: [
      {
        id: "microservices",
        label: "Microservices",
        level: 84,
        projects: ["onlinecourses-notifications"],
      },
      {
        id: "event-driven-architecture",
        label: "Event-Driven Architecture",
        level: 86,
        projects: ["onlinecourses-notifications"],
      },
      {
        id: "rabbitmq",
        label: "RabbitMQ",
        level: 85,
        projects: ["onlinecourses-notifications"],
      },
      {
        id: "masstransit",
        label: "MassTransit",
        level: 84,
        projects: ["onlinecourses-notifications"],
      },
    ],
  },
  {
    id: "cloud-devops-testing",
    title: "Cloud, DevOps & Testing",
    description:
      "Team-ready delivery workflows, testing practices, and developer tooling.",
    items: [
      {
        id: "git-github",
        label: "Git & GitHub",
        level: 88,
        projects: [
          "hotelbooking-api",
          "ecommerce-mvc",
          "onlinecourses-notifications",
        ],
      },
      {
        id: "docker",
        label: "Docker",
        level: 83,
        projects: ["hotelbooking-api"],
      },
      {
        id: "github-actions",
        label: "GitHub Actions (CI/CD)",
        level: 80,
        projects: ["hotelbooking-api"],
      },
      {
        id: "xunit",
        label: "xUnit",
        level: 80,
        projects: ["hotelbooking-api"],
      },
      { id: "moq", label: "Moq", level: 76, projects: ["hotelbooking-api"] },
      {
        id: "integration-testing",
        label: "Integration Testing",
        level: 82,
        projects: ["hotelbooking-api"],
      },
      {
        id: "swagger-postman",
        label: "Swagger & Postman",
        level: 88,
        projects: ["hotelbooking-api", "onlinecourses-notifications"],
      },
    ],
  },
];
