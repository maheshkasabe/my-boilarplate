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
    
    // Solutions pages
    { url: '/solutions/due-diligence', priority: 0.8 },
    { url: '/solutions/financial-risk-assessment', priority: 0.8 },
    { url: '/solutions/financial-assessment', priority: 0.8 },
    { url: '/solutions/compliance', priority: 0.8 },
    
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