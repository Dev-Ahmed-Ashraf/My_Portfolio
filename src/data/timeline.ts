export type TimelineItem = {
  period: string;
  company: string;
  role: string;
  summary: string;
};

// Swap with your actual experience timeline entries.
export const experienceTimeline: TimelineItem[] = [
  {
    period: "Apr 2026 — June 2026",
    company: "DIGITAL BUSINESS SYSTEMS (DBS MENA) | Onsite",
    role: "Full Stack .NET Developer Intern",
    summary:
      "Contributed to a Product Management System using ASP.NET Core and Angular. Developed secure RESTful APIs with Clean Architecture, CQRS, and EF Core, and built frontend features with TypeScript, RxJS, route guards, and interceptors. Implemented JWT, refresh tokens, RBAC, pagination, filtering, status tracking, and product history features.",
  },
  {
    period: "Sep 2025 — Jan 2026",
    company: "CodeWay | Remote",
    role: "Backend Developer Intern",
    summary:
      "Built the Notifications Microservice for an Online Courses Platform using ASP.NET Core and SQL Server. Implemented event-driven processing with RabbitMQ and MassTransit, asynchronous workflows for in-app/email/push notifications, retry handling, and maintainable architecture with CQRS, Outbox Pattern, FluentValidation, and background workers.",
  },
  {
    period: "Sep 2023 — May 2027",
    company: "Tanta University, Tanta, Egypt",
    role: "Bachelor of Computer Science and Information Technology",
    summary:
      "Academic foundation in software engineering, algorithms, databases, and systems design, continuously applied through hands-on full-stack and backend-focused .NET projects.",
  },
];
