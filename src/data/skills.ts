export type SkillCluster = {
  id: string
  title: string
  description: string
  items: {
    id: string
    label: string
    level: number
    projects: string[]
  }[]
}

// Skills aligned with actual projects from projects.ts
export const skillClusters: SkillCluster[] = [
  {
    id: 'backend-frameworks',
    title: 'Backend Frameworks',
    description: 'Building scalable APIs and full-stack apps using modern .NET technologies.',
    items: [
      { id: 'csharp', label: 'C#', level: 92, projects: ['hotelbooking-api', 'ecommerce-mvc', 'driving-license-app'] },
      { id: 'aspnet-core-api', label: 'ASP.NET Core Web API', level: 88, projects: ['hotelbooking-api'] },
      { id: 'aspnet-core-mvc', label: 'ASP.NET Core MVC', level: 85, projects: ['ecommerce-mvc'] },
      { id: 'windows-forms', label: '.NET Windows Forms', level: 78, projects: ['driving-license-app'] },
    ]
  },
  {
    id: 'databases',
    title: 'Databases & ORMs',
    description: 'Efficient and secure database operations using SQL Server and EF Core.',
    items: [
      { id: 'sql-server', label: 'SQL Server', level: 90, projects: ['hotelbooking-api', 'ecommerce-mvc', 'driving-license-app'] },
      { id: 'ef-core', label: 'Entity Framework Core', level: 87, projects: ['hotelbooking-api', 'ecommerce-mvc'] },
      { id: 'linq', label: 'LINQ', level: 86, projects: ['hotelbooking-api', 'ecommerce-mvc'] },
      { id: 'ado-net', label: 'ADO.NET', level: 80, projects: ['driving-license-app'] },
    ]
  },
  {
    id: 'architecture-patterns',
    title: 'Architecture & Design Patterns',
    description: 'Clean and maintainable code using modern architectural standards.',
    items: [
      { id: 'clean-arch', label: 'Clean Architecture', level: 88, projects: ['hotelbooking-api', 'ecommerce-mvc'] },
      { id: 'cqrs-mediator', label: 'CQRS + MediatR', level: 83, projects: ['hotelbooking-api'] },
      { id: 'repo-pattern', label: 'Repository Pattern', level: 91, projects: ['hotelbooking-api', 'ecommerce-mvc'] },
      { id: 'layered-arch', label: 'Layered Architecture', level: 82, projects: ['driving-license-app'] },
    ]
  },
  {
    id: 'security-auth',
    title: 'Security & Authentication',
    description: 'Secure development practices including identity and JWT-based auth.',
    items: [
      { id: 'jwt-auth', label: 'JWT Authentication', level: 86, projects: ['hotelbooking-api'] },
      { id: 'identity', label: 'ASP.NET Identity', level: 82, projects: ['ecommerce-mvc'] },
      { id: 'rbac', label: 'Role-Based Access Control (RBAC)', level: 85, projects: ['hotelbooking-api', 'ecommerce-mvc'] },
      { id: 'security-best', label: 'Security Best Practices', level: 80, projects: ['hotelbooking-api', 'ecommerce-mvc'] },
    ]
  },
  {
    id: 'testing-logging',
    title: 'Testing & Logging',
    description: 'Ensuring reliability through automated tests and structured logging.',
    items: [
      { id: 'integration-test', label: 'Integration Testing', level: 80, projects: ['hotelbooking-api'] },
      { id: 'unit-test', label: 'Unit Testing', level: 75, projects: ['hotelbooking-api'] },
      { id: 'serilog', label: 'Serilog Logging', level: 89, projects: ['hotelbooking-api', 'ecommerce-mvc'] },
      { id: 'exception-handling', label: 'Error & Exception Handling', level: 85, projects: ['hotelbooking-api', 'ecommerce-mvc'] },
    ]
  },
  {
    id: 'advanced-features',
    title: 'Advanced Features & Tooling',
    description: 'Enhancing user experience and system performance with modern tools.',
    items: [
      { id: 'stripe', label: 'Stripe Payments Integration', level: 78, projects: ['hotelbooking-api'] },
      { id: 'admin-dashboard', label: 'Admin Dashboard & Reports', level: 85, projects: ['ecommerce-mvc', 'hotelbooking-api'] },
      { id: 'devtools', label: 'Developer Tools (Swagger, Postman)', level: 87, projects: ['hotelbooking-api'] },
      { id: 'git', label: 'Git / GitHub Workflow', level: 85, projects: ['hotelbooking-api', 'ecommerce-mvc'] },
    ]
  }
]


