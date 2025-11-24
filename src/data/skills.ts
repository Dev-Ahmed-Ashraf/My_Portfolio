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

// Adjust levels + project mappings to match your stack depth.
export const skillClusters: SkillCluster[] = [
  {
    id: 'backend',
    title: 'Backend',
    description: 'Modern .NET stacks focused on performance and reliability.',
    items: [
      { id: 'aspnet', label: 'ASP.NET Core', level: 95, projects: ['hyperion-api'] },
      { id: 'dotnet', label: '.NET 8 C#', level: 92, projects: ['hyperion-api', 'insight-dashboard'] },
      { id: 'distributed', label: 'Distributed Systems', level: 90, projects: ['hyperion-api'] },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    description: 'SQL + NoSQL tuned for scale, consistency, and reporting.',
    items: [
      { id: 'postgresql', label: 'PostgreSQL', level: 88, projects: ['hyperion-api'] },
      { id: 'redis', label: 'Redis', level: 85, projects: ['insight-dashboard'] },
      { id: 'elastic', label: 'ElasticSearch', level: 80, projects: ['insight-dashboard'] },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps',
    description: 'Automated delivery on Azure and Kubernetes.',
    items: [
      { id: 'azure', label: 'Azure', level: 87, projects: ['hyperion-api', 'reliance-ci'] },
      { id: 'kubernetes', label: 'Kubernetes', level: 84, projects: ['reliance-ci'] },
      { id: 'docker', label: 'Docker', level: 82, projects: ['reliance-ci'] },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    description: 'Collaboration + monitoring stack.',
    items: [
      { id: 'grafana', label: 'Grafana', level: 78, projects: ['insight-dashboard'] },
      { id: 'gitops', label: 'GitOps', level: 80, projects: ['reliance-ci'] },
      { id: 'observability', label: 'Observability', level: 83, projects: ['insight-dashboard'] },
    ],
  },
]

