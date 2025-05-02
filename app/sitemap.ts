import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://diligentinsight.co.uk'
  
  // Get current date for lastModified
  const currentDate = new Date()
  
  // Define routes
  const routes = [
    // Main pages
    { url: '/', priority: 1.0 },
    { url: '/about', priority: 0.8 },
    { url: '/request-access', priority: 0.9 },
    { url: '/login', priority: 0.7 },
    
    // Platform pages
    { url: '/platform/overview', priority: 0.8 },
    { url: '/platform/integrations', priority: 0.8 },
    { url: '/platform/security', priority: 0.8 },
    { url: '/platform/pricing', priority: 0.7 },
    { url: '/platform/technology', priority: 0.7 },
    { url: '/platform/agent-quorum', priority: 0.7 },
    
    // Our Agents pages
    { url: '/our-agents', priority: 0.8 },
    { url: '/our-agents/due-diligence', priority: 0.8 },
    { url: '/our-agents/peer-group-benchmarking', priority: 0.8 },
    { url: '/our-agents/bank-statement-analysis', priority: 0.8 },
    { url: '/our-agents/data-extraction', priority: 0.8 },
    { url: '/our-agents/data-insights', priority: 0.8 },
    { url: '/our-agents/ip-assessment', priority: 0.8 },
    
    // Use Cases pages
    { url: '/use-cases', priority: 0.8 },
    { url: '/use-cases/venture-capital-private-equity', priority: 0.8 },
    { url: '/use-cases/incubators-accelerators', priority: 0.8 },
    { url: '/use-cases/purchasing', priority: 0.8 },
    { url: '/use-cases/corporate-due-diligence', priority: 0.8 },
    
    // Legal pages
    { url: '/legal/privacy', priority: 0.4 },
    { url: '/legal/terms', priority: 0.4 },
    { url: '/legal/accessibility', priority: 0.4 },
    { url: '/legal/esg', priority: 0.4 },
  ]
  
  // Convert routes to sitemap format
  return routes.map(route => ({
    url: `${baseUrl}${route.url}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: route.priority
  }))
} 