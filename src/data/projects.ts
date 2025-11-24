export type Project = {
  id: string
  title: string
  description: string
  image: string
  techStack: string[]
  liveUrl: string
  repoUrl: string
  skills: string[]
}

// Update the projects below with your real case studies, links, and assets.
export const projects: Project[] = [
  {
    id: 'hyperion-api',
    title: 'Hyperion Billing APIs',
    description:
      'Multi-tenant billing engine serving 30M+ monthly invoices with resilient ASP.NET Core microservices, CQRS, and Azure Service Bus.',
    image: '/assets/projects/hyperion-api.svg',
    techStack: ['ASP.NET Core', 'Azure', 'Service Bus', 'PostgreSQL'],
    liveUrl: 'https://billing.yourdomain.com',
    repoUrl: 'https://github.com/your-handle/hyperion-billing',
    skills: ['aspnet', 'azure', 'postgresql', 'distributed'],
  },
  {
    id: 'insight-dashboard',
    title: 'InsightOps Observability',
    description:
      'End-to-end telemetry pipeline streaming 2B+ logs/day via Event Hubs, ElasticSearch, and Grafana dashboards for proactive SRE insights.',
    image: '/assets/projects/insight-dashboard.svg',
    techStack: ['.NET 8', 'Elastic', 'Grafana', 'Redis'],
    liveUrl: 'https://insightops.yourdomain.com',
    repoUrl: 'https://github.com/your-handle/insight-ops',
    skills: ['dotnet', 'observability', 'redis', 'grafana'],
  },
  {
    id: 'reliance-ci',
    title: 'Reliance CI/CD Platform',
    description:
      'GitOps inspired delivery platform orchestrating Kubernetes rollouts with ArgoCD, Azure DevOps pipelines, and policy-gated releases.',
    image: '/assets/projects/reliance-ci.svg',
    techStack: ['Kubernetes', 'ArgoCD', 'Azure DevOps', 'Docker'],
    liveUrl: 'https://reliance.yourdomain.com',
    repoUrl: 'https://github.com/your-handle/reliance-platform',
    skills: ['devops', 'kubernetes', 'docker', 'azure'],
  },
]

