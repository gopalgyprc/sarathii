export interface NavItem {
  label: string
  href: string
}

export interface StatItem {
  value: string
  label: string
  description?: string
}

export interface SiteConfig {
  name: string
  tagline: string
  concept: string
  logo: string
  founderPortrait: string
  navItems: NavItem[]
  stats: StatItem[]
  contact: {
    address: {
      line1: string
      line2: string
      city: string
      state: string
      pincode: string
      full: string
    }
    email: string
    phone: string
    hours: string
  }
  socials: {
    platform: string
    url: string
    icon: string
  }[]
}

export const siteConfig: SiteConfig = {
  name: 'Sarathii',
  tagline: 'Transform Your Potential into Excellence',
  concept: 'Civil Services & Leadership Mentorship',
  logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropped-updated-logo-NZs5Mvv9RwpnqXOLhFIiMsGdYhuUnk.webp',
  founderPortrait: '/images/founder-transparent.png',
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Books', href: '/books' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ],
  stats: [
    { value: '50+', label: 'Years of Experience', description: 'Across Administration, Defence, Judiciary & Public Service' },
    { value: '5', label: 'Domains of Service', description: 'Indian Administrative Service, Armed Forces, Judiciary, Literature & Policy' },
    { value: '100%', label: 'Leadership Mindset', description: 'Cultivating strategic, ethical, and calm decision-making' },
    { value: '1:1', label: 'Outcome-Driven Mentorship', description: 'Personalised strategic roadmaps for serious aspirants' },
  ],
  contact: {
    address: {
      line1: '1601, A Block, Spectrum Metro',
      line2: 'Sector-75, Noida',
      city: 'Gautam Buddha Nagar',
      state: 'Uttar Pradesh',
      pincode: '201301',
      full: '1601, A Block, Spectrum Metro, Sector-75, Noida, Gautam Buddha Nagar, Uttar Pradesh 201301',
    },
    email: 'sarathii@sarathii.online',
    phone: '+91 123-456-7890',
    hours: 'Mon – Sat: 9:00 AM – 6:00 PM IST',
  },
  socials: [
    { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
    { platform: 'Twitter (X)', url: 'https://twitter.com', icon: 'Twitter' },
    { platform: 'Instagram', url: 'https://instagram.com', icon: 'Instagram' },
    { platform: 'YouTube', url: 'https://youtube.com', icon: 'Youtube' },
  ],
}
