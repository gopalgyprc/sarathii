export interface CareerMilestone {
  year: string
  title: string
  role: string
  description: string
  impact: string
}

export interface Achievement {
  title: string
  domain: string
  description: string
  icon: string
}

export interface ProjectInnovation {
  name: string
  tagline: string
  description: string
  impactMetric: string
  category: string
}

export interface ExperiencePillar {
  title: string
  subtitle: string
  quote: string
  description: string
  qualities: string[]
  icon: string
}

export const founderProfile = {
  name: 'Jay Prakash Singh',
  shortName: 'J. P. Singh',
  title: 'Founder & Chief Mentor, Sarathii',
  tagline: 'From Village Soil to National Service — A Life of Discipline, Reform & Leadership',
  portraitUrl: '/images/founder-transparent.png',
  yearsOfService: '50+',
  bioParagraphs: [
    'Jay Prakash Singh represents a rare synthesis of India’s most demanding public disciplines: the martial vigilance of the Armed Forces, the executive rigor of the Indian Administrative Service, the moral equilibrium of the Judiciary, and the reflective depth of an accomplished author.',
    'Born in rural India and shaped by unyielding discipline, his journey spanned over five decades across the forefront of national governance, strategic policy reform, and landmark public sector modernization.',
    'Throughout his tenure across Indian Railways, Commercial Policy, Anti-Corruption, and Administrative Tribunals, J.P. Singh was recognized for cutting through bureaucratic inertia to create scalable, citizen-centric systems that continue to benefit millions across the country.',
    'Today, through Sarathii, he channels this half-century of lived governance experience to guide the next generation of civil servants—transforming raw potential into visionary, ethical, and calm leadership.',
  ],
}

export const experiencePillars: ExperiencePillar[] = [
  {
    title: 'The Soldier',
    subtitle: 'Discipline & Unshakable Focus',
    quote: 'The battle is won in the mind long before it is fought on the field.',
    description: 'Instills military precision, mental grit, daily physical & cognitive conditioning, and the capacity to stay calm under intense examination pressure.',
    qualities: ['Courage under ambiguity', 'Relentless execution discipline', 'Mission-oriented time management'],
    icon: 'Shield',
  },
  {
    title: 'The Administrator',
    subtitle: 'Vision & Systems Thinking',
    quote: 'True administration is the art of making the meaningful possible within complex constraints.',
    description: 'Imparts real-world policy understanding, multi-stakeholder governance models, and systemic problem-solving required for GS and Essay papers.',
    qualities: ['Policy deconstruction', 'Pragmatic public stewardship', 'Resource allocation mastery'],
    icon: 'Briefcase',
  },
  {
    title: 'The Judge',
    subtitle: 'Balance, Law & Ethics',
    quote: 'Justice is not merely a verdict; it is an attitude of scrupulous balance.',
    description: 'Develops dialectical reasoning, constitutional grounding, ethical neutrality, and the ability to formulate balanced administrative conclusions.',
    qualities: ['Constitutional morality', 'Objective dialectical analysis', 'Fair and balanced judgments'],
    icon: 'Scale',
  },
  {
    title: 'The Writer',
    subtitle: 'Sensitivity & Articulation',
    quote: 'Words carry the weight of your convictions; choose them with reverence.',
    description: 'Refines the craft of precise language, evocative expression, philosophical depth, and intellectual resonance in UPSC answer writing.',
    qualities: ['Concise and luminous prose', 'Cultural & civilizational depth', 'Empathy for human realities'],
    icon: 'Feather',
  },
]

export const careerMilestones: CareerMilestone[] = [
  {
    year: 'Early Life & Formative Years',
    title: 'Village Roots to Academic Excellence',
    role: 'Scholastic Foundation',
    description: 'Grounded in traditional values of perseverance, self-reliance, and deep curiosity for civilizational history and literature.',
    impact: 'Built the foundational work ethic that defined a lifetime of public service.',
  },
  {
    year: 'Military Service',
    title: 'Armed Forces Leadership',
    role: 'Defence & Tactical Command',
    description: 'Served with distinction, mastering the tenets of operational strategy, rapid situational awareness, and stoic leadership under duress.',
    impact: 'Established the lifelong philosophy that discipline precedes triumph.',
  },
  {
    year: 'Civil Services & Railways Administration',
    title: 'Executive Reform & National Infrastructure',
    role: 'Senior Administrative Officer',
    description: 'Pioneered nationwide modernization initiatives, transparent ticketing architectures, and public amenities frameworks across major transport arteries.',
    impact: 'Dismantled entrenched inefficiency and introduced citizen-first governance.',
  },
  {
    year: 'Judicial Stewardship & Tribunals',
    title: 'Judicial & Dispute Resolution Leadership',
    role: 'Administrative Tribunal Member / Judge',
    description: 'Presided over critical administrative and service jurisprudence, upholding statutory equity, constitutional integrity, and balanced justice.',
    impact: 'Authored landmark reasoned orders balancing state interest with individual rights.',
  },
  {
    year: 'Scholarship & Authorship',
    title: 'Civilizational Research & Publication',
    role: 'Author & Historian',
    description: 'Authored authoritative literary treatises including "जिन राहों पर सियाराम चले", synthesizing ancient ethos with modern life.',
    impact: 'Enriched contemporary Indian thought with historical wisdom and ethical inquiry.',
  },
  {
    year: 'Present Day',
    title: 'The Sarathii Institution',
    role: 'Founder & Chief Mentor',
    description: 'Guiding UPSC aspirants, senior professionals, and future administrators through personal one-on-one strategic mentorship.',
    impact: 'Shaping ethical, resilient, and visionary civil servants for India’s future.',
  },
]

export const verifiedAchievements: Achievement[] = [
  {
    title: 'Military Honor & Discipline',
    domain: 'Armed Forces',
    description: 'Recognized for distinguished operational fortitude, mental composure, and exemplary command stewardship in national defense.',
    icon: 'Medal',
  },
  {
    title: 'Railway Excellence & Modernization',
    domain: 'Public Infrastructure',
    description: 'Conferred top administrative honors for transforming public passenger amenities, station sanitation, and commercial revenue frameworks.',
    icon: 'Train',
  },
  {
    title: 'Anti-Touting Revolution',
    domain: 'Governance & Vigilance',
    description: 'Spearheaded ruthless anti-corruption crackdowns and automated ticketing safeguards that eliminated parallel black markets in rail reservations.',
    icon: 'ShieldAlert',
  },
  {
    title: 'Judicial Pinnacle',
    domain: 'Legal & Administrative Justice',
    description: 'Presided over administrative tribunals with unyielding adherence to natural justice, constitutional equity, and administrative jurisprudence.',
    icon: 'Scale',
  },
  {
    title: 'Visionary Authorship',
    domain: 'Literature & Philosophy',
    description: 'Celebrated scholar and author of monumental civilizational works exploring ethical leadership and purpose through classical Indian narratives.',
    icon: 'BookOpen',
  },
]

export const majorProjects: ProjectInnovation[] = [
  {
    name: 'Deluxe Public Amenities & Sanitation',
    tagline: 'Standardising Public Dignity',
    description: 'Conceptualised and executed the landmark ‘Deluxe Toilets’ scheme across major railway terminals, setting a benchmark for cleanliness.',
    impactMetric: 'Scaled across hundreds of major stations',
    category: 'Public Infrastructure',
  },
  {
    name: 'PPP Trailblazer in Amenities',
    tagline: 'Sustainable Public-Private Synergy',
    description: 'Pioneered Public-Private Partnership models in station infrastructure and passenger conveniences without burdening the state exchequer.',
    impactMetric: '100% sustainable revenue-neutral operation',
    category: 'Policy & Finance',
  },
  {
    name: 'Cleanliness Framework & Audit',
    tagline: 'Systemic Accountability Protocols',
    description: 'Introduced rigorous real-time inspection checklists, audit protocols, and penalty mechanisms ensuring uncompromising hygiene standards.',
    impactMetric: 'Transformed passenger satisfaction indexes',
    category: 'Operations & Quality',
  },
  {
    name: 'Transparency Tools & Digital Ticketing',
    tagline: 'Democratising Citizen Access',
    description: 'Formulated procedural reforms and monitoring tools that secured reservation quotas for ordinary citizens against illicit tout syndicates.',
    impactMetric: 'Millions of secured genuine bookings',
    category: 'E-Governance & Vigilance',
  },
  {
    name: 'Commercial Publicity Pioneer',
    tagline: 'Unlocking Latent Public Value',
    description: 'Architected innovative non-fare revenue monetization strategies across public transit assets that set commercial standards for decades.',
    impactMetric: 'Multi-fold increase in non-tariff revenue',
    category: 'Revenue & Asset Optimization',
  },
]
