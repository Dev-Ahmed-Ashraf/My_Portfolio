export type TimelineItem = {
  period: string
  company: string
  role: string
  summary: string
}

// Swap with your actual experience timeline entries.
export const experienceTimeline: TimelineItem[] = [
  {
    period: '2023 — Present',
    company: 'Nimbus FinTech',
    role: 'Senior .NET Backend Engineer',
    summary: 'Owning high-volume payments APIs, latency budgets, and SLO-driven operations.',
  },
  {
    period: '2021 — 2023',
    company: 'AzureWorks',
    role: 'Backend Engineer',
    summary: 'Designed Azure-native microservices, Dapr integrations, and IaC blueprints.',
  },
  {
    period: '2019 — 2021',
    company: 'DevSphere Labs',
    role: 'Software Engineer',
    summary: 'Built RESTful services, modernized legacy .NET Framework workloads.',
  },
]

