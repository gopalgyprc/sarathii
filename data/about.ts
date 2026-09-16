export interface BiographyChapter {
  number: string
  title: string
  subtitle: string
  period: string
  quote: string
  content: string[]
  takeaway: string
}

export interface ProofDomain {
  id: string
  title: string
  institution: string
  subtitle: string
  overview: string
  realWorldImpact: string
  mentorshipTranslation: string
  icon: string
  highlights: string[]
}

export interface JourneyStep {
  number: string
  title: string
  role: string
  essence: string
  description: string
  lessonForAspirants: string
  icon: string
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
  icon: string
  description: string
  quote: string
  qualities: string[]
}

export interface CareerMilestone {
  year: string
  title: string
  role: string
  description: string
  impact: string
}

export interface FounderProfile {
  name: string
  title: string
  credentials: string[]
  portraitUrl: string
  bioParagraphs: string[]
  keyMilestones: string[]
}

export const founderProfile: FounderProfile = {
  name: 'Jay Prakash Singh',
  title: 'Founder & Chief Mentor',
  credentials: [
    'Former Officer, National Defence Forces',
    'Former Senior Civil Administrator (Public Infrastructure & Railways)',
    'Former Adjudicator, Administrative Tribunals',
    'Author of "जिन राहों पर सियाराम चले"',
    'Over Five Decades of Distinguished Public Service',
  ],
  portraitUrl: '/images/digitalboard.png',
  bioParagraphs: [
    'Jay Prakash Singh brings a rare confluence of five decades across India’s most demanding public disciplines: the martial discipline and tactical grit of the Armed Forces, the complex systems modernization and commercial policy execution of the Indian Administrative Service, the dialectical balance and constitutional equity of judicial tribunals, and the profound ethical synthesis of civilizational literature.',
    'Throughout his distinguished public service career, he spearheaded monumental administrative innovations—including pioneering the nationwide Deluxe Sanitation Scheme, landmark Public-Private Partnership frameworks, and systemic anti-corruption ticketing safeguards that protected ordinary citizens from illicit tout cartels.',
    'Beyond administrative leadership, J.P. Singh is a celebrated scholar and author. His monumental work "जिन राहों पर सियाराम चले" decodes classical leadership virtues into actionable principles for modern governance.',
    'Through Sarathii, he now offers direct, 1:1 mentorship to serious civil services aspirants and emerging leaders—teaching not merely how to study, but how to think, write, analyse, plan, remain composed under duress, and lead with visionary purpose.',
  ],
  keyMilestones: [
    'Distinguished Command & Defence Service',
    'Executive Leadership across Transit & Public Amenities Infrastructure',
    'Judicial Tribunal Adjudication in Administrative Law',
    'Author of "जिन राहों पर सियाराम चले"',
    'Founding of Sarathii Mentorship Platform',
  ],
}

export const journeySteps: JourneyStep[] = [
  {
    number: '01',
    title: 'Armed Forces',
    role: 'Defence & Command',
    essence: 'Martial discipline & psychological fortitude under high pressure.',
    description: 'Mastered tactical situational awareness, iron discipline, and stoic composure in unpredictable environments.',
    lessonForAspirants: 'Mental stamina to withstand the grueling 18-month UPSC cycle without panic or fatigue.',
    icon: 'Shield',
  },
  {
    number: '02',
    title: 'Civil Services',
    role: 'Executive Administration',
    essence: 'Public stewardship, large-scale systems modernization & policy execution.',
    description: 'Pioneered landmark nationwide railway passenger reforms, deluxe sanitation protocols, and transparent ticketing frameworks.',
    lessonForAspirants: 'Understanding multi-stakeholder governance, policy trade-offs, and administrative realism for GS papers.',
    icon: 'Briefcase',
  },
  {
    number: '03',
    title: 'Judicial Tribunals',
    role: 'Administrative Justice & Ethics',
    essence: 'Constitutional balance, equity, and scrupulous dialectical analysis.',
    description: 'Presided over complex administrative jurisprudence, crafting reasoned orders balancing state power with individual citizen rights.',
    lessonForAspirants: 'Dialectical balance, ethical neutrality, and constitutional precision essential for GS-4 Ethics and Essay.',
    icon: 'Scale',
  },
  {
    number: '04',
    title: 'Author & Scholar',
    role: 'Civilizational Literature',
    essence: 'Articulating timeless civilizational wisdom and ethical leadership.',
    description: 'Authored monumental literary works including "जिन राहों पर सियाराम चले", synthesizing ancient ethical philosophy with modern duty.',
    lessonForAspirants: 'Mastery of concise, evocative, and luminous language in UPSC answer writing and personality tests.',
    icon: 'Feather',
  },
  {
    number: '05',
    title: 'Chief Mentor',
    role: 'The Sarathii Institution',
    essence: 'Distilling five decades of lived leadership into 1:1 strategic roadmaps.',
    description: 'Guiding serious civil services aspirants and emerging leaders through deep cognitive conditioning, answer refinement, and ethical grounding.',
    lessonForAspirants: 'Mentorship that transforms potential into calm, authoritative, and visionary administrative excellence.',
    icon: 'Compass',
  },
]

export const proofDomains: ProofDomain[] = [
  {
    id: 'defence',
    title: 'Defence & Tactical Command',
    institution: 'Armed Forces Leadership',
    subtitle: 'Discipline & Composure Under Duress',
    overview: 'Operational command demands immediate clarity when conditions are ambiguous and stakes are existential. This foundational phase forged an unyielding philosophy of mental grit and mission-first execution.',
    realWorldImpact: 'Distinguished stewardship, tactical leadership, and physical-cognitive resilience in national service.',
    mentorshipTranslation: 'Aspirants learn to replace exam anxiety with tactical discipline, structured schedules, and absolute focus during test hours.',
    icon: 'Shield',
    highlights: [
      'Operational decision-making under uncertainty',
      'Stoic emotional regulation under intense stress',
      'Mission-oriented time and energy management',
    ],
  },
  {
    id: 'administration',
    title: 'Civil Administration & Governance',
    institution: 'Indian Administrative Service / Public Infrastructure',
    subtitle: 'Systemic Reform & Citizen-First Policy',
    overview: 'Decades at the helm of national transit arteries and commercial policy, cutting through bureaucratic inertia to create scalable, enduring public welfare systems.',
    realWorldImpact: 'Pioneered nationwide Deluxe Amenities schemes, PPP public transit models, and anti-corruption digital ticketing architectures.',
    mentorshipTranslation: 'Teaches aspirants how to deconstruct policy dilemmas and write answers reflecting the pragmatism of a senior district magistrate.',
    icon: 'Briefcase',
    highlights: [
      'Nationwide passenger amenity modernization',
      'PPP frameworks saving public exchequer revenue',
      'Vigilance mechanisms dismantling tout syndicates',
    ],
  },
  {
    id: 'judiciary',
    title: 'Judicial & Dispute Resolution',
    institution: 'Administrative Tribunals',
    subtitle: 'Constitutional Equity & Dialectical Balance',
    overview: 'Presiding over administrative tribunals with unwavering commitment to natural justice, constitutional morality, and balanced evidence appraisal.',
    realWorldImpact: 'Authored landmark reasoned orders reconciling governmental efficiency with fundamental individual equity.',
    mentorshipTranslation: 'Inculcates the judicial mindset: presenting multi-dimensional arguments without cognitive bias in GS and Essay papers.',
    icon: 'Scale',
    highlights: [
      'Constitutional morality and natural justice application',
      'Objective, evidence-backed conclusion formulation',
      'Dialectical synthesis of conflicting perspectives',
    ],
  },
  {
    id: 'literature',
    title: 'Scholarship & Authorship',
    institution: 'Civilizational Research & Publication',
    subtitle: 'Sensitivity, Ethics & Philosophical Articulation',
    overview: 'Decoding eternal leadership principles embedded in classical Indian texts to provide moral clarity for contemporary societal and governance challenges.',
    realWorldImpact: 'Authored "जिन राहों पर सियाराम चले" (वन में और जीवन में), exploring exile as character forging and ethical leadership.',
    mentorshipTranslation: 'Elevates answer writing from dry data dumping to evocative, impactful prose that leaves an unforgettable impression on the examiner.',
    icon: 'Feather',
    highlights: [
      'Authoritative civilizational scholarship',
      'Synthesis of ancient philosophy with modern governance',
      'High-yield syntactic precision and evocative language',
    ],
  },
  {
    id: 'mentorship',
    title: 'The Sarathii Institution',
    institution: 'Sarathii Mentorship Platform',
    subtitle: 'Transforming Potential into Leadership',
    overview: 'Channelling half a century of multi-disciplinary governance experience into tailored, one-on-one mentorship for future public servants.',
    realWorldImpact: 'Shaping ethical, resilient, and visionary civil servants who think clearly, write precisely, and lead with purpose.',
    mentorshipTranslation: 'Direct, bespoke diagnostic guidance that refines your answer structure, study roadmap, and administrative personality.',
    icon: 'Compass',
    highlights: [
      'Diagnostic baseline evaluation and blind-spot identification',
      'High-yield primary source curation (eliminating fluff)',
      '1:1 cognitive conditioning and interview mastery',
    ],
  },
]

export const biographyChapters: BiographyChapter[] = [
  {
    number: '01',
    title: 'The Soil and The Spark',
    subtitle: 'Village Roots to Academic Rigor',
    period: 'Formative Foundation',
    quote: 'The roots of authentic leadership are nourished not in palaces, but in the patient soil of perseverance.',
    content: [
      'Born in rural India, Jay Prakash Singh’s early life was defined by the timeless rhythms of perseverance, community duty, and an insatiable curiosity for history, civilizational philosophy, and literature.',
      'Growing up far from elite coaching hubs, he cultivated an unshakeable self-reliance and the profound conviction that clarity of purpose outweighs circumstance.',
    ],
    takeaway: 'Instilled the foundational work ethic that discipline and purpose surpass external privilege.',
  },
  {
    number: '02',
    title: 'The Soldier’s Crucible',
    subtitle: 'Armed Forces & Tactical Fortitude',
    period: 'National Defence',
    quote: 'The battle is won in the quiet chamber of the mind long before it is joined on the field.',
    content: [
      'Commissioned into national defence service, he mastered tactical command, situational awareness, and the psychological fortitude required to lead under life-and-death stakes.',
      'Military service forged his lifelong conviction that emotional equanimity under pressure is not an accident of nature, but a trained habit of mind.',
    ],
    takeaway: 'Built the unyielding mental resilience that forms the cornerstone of the Sarathii Method.',
  },
  {
    number: '03',
    title: 'The Administrative Canvas',
    subtitle: 'Civil Services & National Modernization',
    period: 'Governance & Infrastructure',
    quote: 'Administration is the art of turning administrative constraints into citizen-centric breakthroughs.',
    content: [
      'Entering the civil services, J.P. Singh took charge of critical transportation arteries, passenger amenities, commercial policy, and anti-corruption vigilance.',
      'Recognized for cutting through entrenched bureaucratic red tape, he conceptualized and executed landmark public welfare models including the Deluxe Sanitation Scheme and PPP asset frameworks.',
    ],
    takeaway: 'Direct executive experience in designing scalable policy, fiscal sustainability, and citizen welfare.',
  },
  {
    number: '04',
    title: 'The Scales of Justice',
    subtitle: 'Judicial Tribunals & Constitutional Integrity',
    period: 'Administrative Jurisprudence',
    quote: 'Justice is not merely a verdict; it is an attitude of scrupulous balance.',
    content: [
      'Elevated to administrative dispute tribunals, he adjudicated complex service and administrative matters with unyielding fidelity to constitutional equity and natural justice.',
      'His reasoned judgments balanced sovereign public administrative need with individual fundamental rights, setting benchmarks for procedural fairness.',
    ],
    takeaway: 'Deep grounding in constitutional morality, balanced reasoning, and dialectical synthesis.',
  },
  {
    number: '05',
    title: 'The Scholar’s Quill',
    subtitle: 'Civilizational Research & Publication',
    period: 'Authorship & Thought',
    quote: 'Words carry the weight of your convictions; choose them with reverence.',
    content: [
      'Synthesizing decades of governance with classical Indian philosophical inquiry, he authored monumental works including "जिन राहों पर सियाराम चले" (वन में और जीवन में).',
      'The book decodes Shri Ram’s exile not as mythological lore, but as a universal crucible for ethical leadership, equanimity during crises, and statesmanship.',
    ],
    takeaway: 'Refined the art of luminous articulation and ethical depth essential for UPSC GS-4 and Essay.',
  },
  {
    number: '06',
    title: 'The Charioteer’s Call',
    subtitle: 'Founder & Chief Mentor, Sarathii',
    period: 'The Present Mission',
    quote: 'To guide another is not to walk their path, but to kindle the light by which they find their own.',
    content: [
      'Today, through Sarathii, Jay Prakash Singh distills this half-century of lived governance, tactical command, judicial equity, and literary scholarship into direct personal mentorship.',
      'His mission is clear: to prepare candidates not merely to pass an examination, but to become the ethical, resolute, and visionary administrators India needs.',
    ],
    takeaway: 'A lifelong charioteer guiding the next generation of civil servants to purposeful excellence.',
  },
]

export const experiencePillars: ExperiencePillar[] = [
  {
    title: 'The Soldier',
    subtitle: 'Armed Forces Command',
    icon: 'Shield',
    description: 'Martial discipline, tactical situational awareness, and psychological fortitude to withstand the intense pressure of the Civil Services exam cycle.',
    quote: 'Calmness under pressure is not an accident of nature; it is a trained habit of mind.',
    qualities: ['Discipline', 'Composure Under Fire', 'Tactical Planning', 'Execution'],
  },
  {
    title: 'The Administrator',
    subtitle: 'Civil Services & Public Policy',
    icon: 'Briefcase',
    description: 'Decades of senior executive leadership solving real policy dilemmas, executing reforms, and managing complex socio-economic systems.',
    quote: 'Real administrative acumen comes from understanding systemic cause and effect.',
    qualities: ['Strategic Vision', 'Public Welfare', 'Policy Analysis', 'Systemic Reform'],
  },
  {
    title: 'The Judge',
    subtitle: 'Judicial Tribunals',
    icon: 'Scale',
    description: 'Constitutional balance, equity, and scrupulous analysis. Evaluating arguments without bias and writing with measured judicial precision.',
    quote: 'An answer must be balanced like a judicial decree—grounded in law and logic.',
    qualities: ['Objective Analysis', 'Dialectical Balance', 'Constitutional Ethics', 'Equity'],
  },
  {
    title: 'The Writer',
    subtitle: 'Author & Scholar',
    icon: 'Feather',
    description: 'The literary sensitivity of a published author. Transforming dense facts into concise, evocative, and impactful answers that captivate examiners.',
    quote: 'Words are the bridge between your intellect and the examiner’s judgment.',
    qualities: ['Concise Expression', 'Conceptual Lucidity', 'Evocative Language', 'Clarity'],
  },
]

export const careerMilestones: CareerMilestone[] = [
  {
    year: '1970s',
    title: 'Defence Service & Command',
    role: 'Armed Forces Officer',
    description: 'Commissioned into national defence service, instilling lifelong values of operational discipline, leadership under duress, and high-stakes decision-making.',
    impact: 'Tactical command and military-grade resilience.',
  },
  {
    year: '1980s - 2000s',
    title: 'Civil Services & Public Policy Leadership',
    role: 'Senior Executive Administrator',
    description: 'Spearheaded critical transport, passenger welfare, and commercial revenue innovations across the national public infrastructure network.',
    impact: 'Pioneered Deluxe Amenities schemes and anti-corruption vigilance frameworks.',
  },
  {
    year: '2010s',
    title: 'Judicial Tribunal Adjudication',
    role: 'Tribunal Member & Adjudicator',
    description: 'Presided over administrative law disputes, authoring landmark balanced decrees grounded in constitutional equity and natural justice.',
    impact: 'Strengthened administrative jurisprudence and equitable dispute resolution.',
  },
  {
    year: '2020s',
    title: 'Civilizational Authorship',
    role: 'Author & Scholar',
    description: 'Authored monumental works on Indian civilizational ethics and leadership, including "जिन राहों पर सियाराम चले".',
    impact: 'Bridged classical ethical philosophy with modern public governance.',
  },
  {
    year: 'Present',
    title: 'Sarathii Mentorship Platform',
    role: 'Founder & Chief Mentor',
    description: 'Dedicated to mentoring the next generation of civil servants, transforming exam preparation into an art of ethical leadership and intellectual mastery.',
    impact: 'Direct 1:1 mentorship shaping future visionary administrators.',
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
  {
    title: 'Chief Mentorship & Sarathii Foundation',
    domain: 'Leadership & Mentorship',
    description: 'Founded Sarathii to deliver bespoke, 1:1 strategic mentorship for future civil servants, synthesizing five decades of lived public governance.',
    icon: 'Award',
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
  {
    name: 'Administrative Dispute Resolution Protocols',
    tagline: 'Fast-Track Constitutional Equity',
    description: 'Pioneered structured evidentiary conciliation and streamlined tribunal procedures, accelerating fair justice in administrative governance.',
    impactMetric: 'Over 1,000+ disputes resolved with zero overturns',
    category: 'Policy & Finance',
  },
]
