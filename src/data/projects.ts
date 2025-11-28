export type Project = {
  id: string
  title: string
  description: string
  image: string
  techStack: string[]
  repoUrl: string
  skills: string[]
}

export const projects: Project[] = [
  {
    id: 'hotelbooking-api',
    title: 'Hotel Booking API (.NET 8)',
    description:
      'Scalable and secure hotel booking REST API built with Clean Architecture. Supports hotel search, room availability, guest reservations, secure Stripe payments, hotel management dashboards, and full role-based authorization. Includes advanced testing, logging, caching, and API documentation.',
    image: '/assets/projects/Hotel_Booking_API.png',
    techStack: [
      'C#',
      'ASP.NET Core Web API',
      'EF Core',
      'SQL Server',
      'MediatR (CQRS)',
      'FluentValidation',
      'AutoMapper',
      'JWT Authentication',
      'Serilog',
      'Stripe',
      'Docker'
    ],
    repoUrl: 'https://github.com/Dev-Ahmed-Ashraf/Hotel_Booking_API',
    skills: [
    'Clean Architecture',
    'CQRS & MediatR',
    'JWT & Role-Based Security',
    'Error Handling & Logging',
    'Integration Testing',
    'Performance Optimization']
  },
  {
    id: 'ecommerce-mvc',
    title: 'E-Commerce Platform (MVC)',
    description:
      'A full multi-vendor e-commerce platform delivering a complete shopping experience — including authentication with roles & 2FA, advanced product catalog with search and variations, smart shopping cart with discounts, invoiced checkout flow, order and shipping management, vendor dashboards, and admin analytics.',
    image: '/assets/projects/E-Commerce_Main_Page.png',
    techStack: [
      'C#',
      'ASP.NET Core MVC',
      'EF Core',
      'LINQ',
      'SQL Server',
      'Identity',
      'Html',
      'css',
      'Javascript',
      'jQuery',
      'Ajax',
      'Bootstrap 5',
      'Chart.js'
    ],
    repoUrl: 'https://github.com/Dev-Ahmed-Ashraf/E-Commerce_Project',
    skills: [    'Authentication & Authorization',
    'Authentication & Authorization',
    'Multi-Vendor System',
    'Admin Analytics Dashboard',
    'Order & Inventory Management',
    'Search & Performance Optimization']
  },
  {
    id: 'driving-license-app',
    title: 'Driving License Management System',
    description:
      'A complete government-grade desktop system for managing driver licensing workflows. Supports license issuance/renewals, international licenses, replacement for lost/damaged licenses, license detention and release, test scheduling (Vision/Written/practical), application processing, and full driver history tracking — secured with role-based access control and comprehensive reporting.',
    image: '/assets/projects/Driver_License_Management_Project.png',
    techStack: [
      'C#',
      '.NET Framework (WinForms)',
      'SQL Server',
      'ADO.NET',
      'Layered Architecture'
    ],
    repoUrl: 'https://github.com/Dev-Ahmed-Ashraf/Driver-License-Management-System',
    skills: [
    'Desktop Development',
    'Authentication & Authorization',
    'Database Management',
    'Reporting System',
    'CRUD Operations']
  }
]


