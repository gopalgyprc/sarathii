import {
  Shield,
  Briefcase,
  Scale,
  Feather,
  Compass,
  Brain,
  Search,
  Target,
  Sparkles,
  PenTool,
  CheckCircle2,
  Users,
  Building2,
  Coins,
  HeartHandshake,
  TrendingUp,
  FileCheck,
  Award,
} from 'lucide-react'

// ============================================================================
// 1. FOUNDER JOURNEY (5 Stages)
// ============================================================================
export interface FounderJourneyStage {
  id: string
  number: string
  title: string
  subtitle: string
  discipline: string
  description: string
  supportingPhilosophy: string
  coreCompetency: string
  iconName: 'Shield' | 'Briefcase' | 'Scale' | 'Feather' | 'Compass'
  qualities: string[]
  authenticContext: string
}

export const founderJourneyStages: FounderJourneyStage[] = [
  {
    id: 'defence',
    number: '01',
    title: 'DEFENCE',
    subtitle: 'National Armed Forces Command',
    discipline: 'Discipline under pressure.',
    description:
      'Mastered tactical situational awareness, ironclad discipline, and emotional steadiness in high-stakes operational environments.',
    supportingPhilosophy:
      'The battle is won in the quiet chamber of the mind long before it is joined on the field. Pressure does not create character; it reveals it.',
    coreCompetency: 'Tactical grit, stoic composure, and crisis decision-making under duress.',
    iconName: 'Shield',
    qualities: ['Operational Composure', 'Iron Will', 'Strategic Stamina', 'Mission Focus'],
    authenticContext:
      'Commissioned defence service forging the unyielding mental resilience that underlies the Sarathii Method.',
  },
  {
    id: 'administration',
    number: '02',
    title: 'ADMINISTRATION',
    subtitle: 'Senior Civil Governance & Public Infrastructure',
    discipline: 'Decision-making with responsibility.',
    description:
      'Spearheaded monumental public infrastructure modernization, cutting through bureaucratic red tape to build lasting citizen-first systems.',
    supportingPhilosophy:
      'Administration is the art of turning systemic constraints into citizen-centric breakthroughs with accountability and fiscal prudence.',
    coreCompetency: 'Multi-stakeholder leadership, policy trade-offs, and administrative execution.',
    iconName: 'Briefcase',
    qualities: ['Systems Modernization', 'Fiscal Prudence', 'Policy Realism', 'Public Integrity'],
    authenticContext:
      'Pioneered landmark nationwide passenger amenity reforms, deluxe sanitation protocols, and digital vigilance frameworks.',
  },
  {
    id: 'judiciary',
    number: '03',
    title: 'JUDICIARY',
    subtitle: 'Administrative Tribunals & Dispute Resolution',
    discipline: 'Balance, reason and fairness.',
    description:
      'Presided over complex administrative jurisprudence, crafting reasoned orders balancing state power with individual citizen equity.',
    supportingPhilosophy:
      'An administrative decision or answer must be balanced like a judicial decree—grounded in law, evidence, and constitutional equity.',
    coreCompetency: 'Dialectical evaluation, natural justice, and neutral evidence appraisal.',
    iconName: 'Scale',
    qualities: ['Constitutional Ethics', 'Dialectical Balance', 'Evidence Appraisal', 'Natural Justice'],
    authenticContext:
      'Decades of tribunal adjudication resolving high-stakes disputes with strict adherence to natural justice and constitutional morality.',
  },
  {
    id: 'literature',
    number: '04',
    title: 'LITERATURE',
    subtitle: 'Civilizational Scholarship & Authorship',
    discipline: 'Reflection and expression.',
    description:
      'Authored monumental literary treatises synthesizing ancient ethical philosophy with modern public duty and personal purpose.',
    supportingPhilosophy:
      'Words are the bridge between your intellect and the examiner’s judgment. Lucid language reflects a lucid mind.',
    coreCompetency: 'Concise syntactic precision, conceptual lucidity, and evocative prose.',
    iconName: 'Feather',
    qualities: ['Conceptual Clarity', 'Syntactic Precision', 'Moral Synthesis', 'Luminous Prose'],
    authenticContext:
      'Author of "जिन राहों पर सियाराम चले" (वन में और जीवन में), exploring exile as character-forging leadership.',
  },
  {
    id: 'mentorship',
    number: '05',
    title: 'MENTORSHIP',
    subtitle: 'The Sarathii Institution & School of Thought',
    discipline: 'Experience transformed into guidance.',
    description:
      'Channeling five decades of lived public service into direct, bespoke mentorship to cultivate principled, high-performing civil servants.',
    supportingPhilosophy:
      'Mentorship is not teaching what to think, but cultivating the habits of disciplined thinking and purposeful action required of an administrator.',
    coreCompetency: 'Diagnostic coaching, answer structural refinement, and strategic cognitive conditioning.',
    iconName: 'Compass',
    qualities: ['1:1 Diagnostic Clarity', 'Cognitive Conditioning', 'Answer Refinement', 'Lifelong Guidance'],
    authenticContext:
      'Founder & Chief Mentor of Sarathii, preparing aspirants for both the examination and a lifetime of public stewardship.',
  },
]

// ============================================================================
// 2. WHY SARATHII — 6 INTERACTIVE PILLARS
// ============================================================================
export interface MentorshipPillarDetail {
  id: string
  number: string
  title: string
  shortPhilosophy: string
  practicalApplication: string[]
  mentorshipOutcome: string
  supportingKeyword: string
  iconName: 'Briefcase' | 'Brain' | 'PenTool' | 'Target' | 'Sparkles' | 'Award'
  detailedDescription: string
}

export const mentorshipPillars: MentorshipPillarDetail[] = [
  {
    id: 'experience',
    number: '01',
    title: 'EXPERIENCE',
    shortPhilosophy: 'Authentic insight forged through five decades of frontline national leadership.',
    practicalApplication: [
      'Learn directly from decisions tested in real-world governance, not theoretical coaching formulas.',
      'Understand administrative realism, policy constraints, and real stakeholder trade-offs.',
      'Deconstruct GS-2 & GS-4 case studies with the pragmatic wisdom of a senior administrator.',
    ],
    mentorshipOutcome:
      'Aspirants write answers that sound like a seasoned district magistrate rather than an academic spectator.',
    supportingKeyword: 'Ground Reality',
    iconName: 'Briefcase',
    detailedDescription:
      'Most coaching material is authored by theorists who have never signed a government order, faced a public crisis, or adjudicated a constitutional dispute. At Sarathii, every principle is rooted in fifty years of actual public governance.',
  },
  {
    id: 'thinking',
    number: '02',
    title: 'THINKING',
    shortPhilosophy: 'How you think determines what you write. Clear thought produces coherent expression.',
    practicalApplication: [
      'Maintain a single, focused theme throughout an answer without wandering or contradiction.',
      'Present arguments in a coherent, sequential, and logically irreversible order.',
      'Deconstruct complex, multi-layered UPSC question directives before penning a single sentence.',
    ],
    mentorshipOutcome:
      'Develop a disciplined, razor-sharp thought process that eliminates confusion and circular reasoning.',
    supportingKeyword: 'Logical Coherence',
    iconName: 'Brain',
    detailedDescription:
      'Logical thinking is not an innate gift; it is a trained habit. Sarathii trains your mind to deconstruct complex dilemmas into structured analytical components before formulating balanced conclusions.',
  },
  {
    id: 'writing',
    number: '03',
    title: 'WRITING',
    shortPhilosophy: 'Communicate effectively using the minimum words without sacrificing meaning.',
    practicalApplication: [
      'Master the high-yield introductory hook that immediately answers the core question directive.',
      'Eliminate semantic fluff, verbose passive voice, and repetitive assertions.',
      'Incorporate structured headings, analytical micro-diagrams, and forward-looking conclusions.',
    ],
    mentorshipOutcome:
      'Make your knowledge visible to the examiner through crisp, evocative, and high-impact prose.',
    supportingKeyword: 'Precision & Impact',
    iconName: 'PenTool',
    detailedDescription:
      'The examiner never meets you in person. They see only your handwriting, your structure, and your precision. Sarathii refines your expression so every sentence delivers intellectual value.',
  },
  {
    id: 'strategy',
    number: '04',
    title: 'STRATEGY',
    shortPhilosophy: 'The objective is not to become a pandit or scholar. The only objective is to qualify.',
    practicalApplication: [
      'Pinpoint exactly what to study and consciously discard low-yield, bloated material.',
      'Allocate time and cognitive energy strictly aligned with UPSC marking weightage.',
      'Establish a ruthless, disciplined revision timetable preventing last-minute burnout.',
    ],
    mentorshipOutcome:
      'Achieve maximum examination yield with the most efficient, targeted expenditure of effort and time.',
    supportingKeyword: 'High-Yield Focus',
    iconName: 'Target',
    detailedDescription:
      'Lakhs of aspirants drown in the ocean of books and current affairs compilations. Sarathii replaces undirected labor with surgical strategy: knowing what to master, what to skim, and what to ignore completely.',
  },
  {
    id: 'composure',
    number: '05',
    title: 'COMPOSURE',
    shortPhilosophy: 'Only a calm mind wins the war. Equanimity under pressure is a trained discipline.',
    practicalApplication: [
      'Overcome exam-hall panic when confronted with unexpected or unfamiliar questions.',
      'Sustain unwavering psychological momentum through the grueling 18-month UPSC cycle.',
      'Regulate cognitive fatigue during continuous 6-hour Mains writing sessions.',
    ],
    mentorshipOutcome:
      'Transform the examination arena from a source of paralyzing fear into a stage of purposeful execution.',
    supportingKeyword: 'Stoic Equanimity',
    iconName: 'Sparkles',
    detailedDescription:
      'Much of the perceived difficulty of UPSC arises not from syllabus volume, but from fear and emotional uncertainty. Sarathii inculcates the martial composure of a military commander so you execute calmly when pressure peaks.',
  },
  {
    id: 'leadership',
    number: '06',
    title: 'LEADERSHIP',
    shortPhilosophy: 'We prepare candidates not merely for a rank, but for a lifetime of public service.',
    practicalApplication: [
      'Inculcate constitutional ethics, administrative empathy, and unyielding integrity.',
      'Cultivate the authoritative, respectful, and balanced demeanor tested in the UPSC Personality Test.',
      'Internalize the civil servant’s duty as a custodian of public trust and constitutional morality.',
    ],
    mentorshipOutcome:
      'Emerge not just as an examination qualifier, but as a principled officer ready to lead from day one.',
    supportingKeyword: 'Principled Stewardship',
    iconName: 'Award',
    detailedDescription:
      'A rank is only the gateway. The true test of a civil servant begins when they enter the district. Sarathii’s mentorship instills the deep ethical anchor and visionary leadership required to serve society meaningfully.',
  },
]

// ============================================================================
// 3. DIGITAL CLASSROOM (Transformation Flow)
// ============================================================================
export interface MentorClassroomStage {
  step: string
  name: string
  concept: string
  description: string
  transformation: string
}

export const mentorClassroomStages: MentorClassroomStage[] = [
  {
    step: '01',
    name: 'Knowledge',
    concept: 'Acquisition & Foundation',
    description: 'Absorbing primary constitutional, economic, and historical facts without distortion.',
    transformation: 'Raw factual recall is the starting line, not the finish.',
  },
  {
    step: '02',
    name: 'Thinking',
    concept: 'Cognitive Structuring',
    description: 'Organising raw facts into disciplined, coherent, and non-contradictory logic chains.',
    transformation: 'Moving from memory to orderly rational contemplation.',
  },
  {
    step: '03',
    name: 'Analysis',
    concept: 'Critical Evaluation',
    description: 'Examining multiple perspectives, conflicting stakeholder interests, and policy trade-offs.',
    transformation: 'Deconstructing surface appearances to discover underlying causes.',
  },
  {
    step: '04',
    name: 'Writing',
    concept: 'Luminous Expression',
    description: 'Translating complex analysis into structured, concise, and evocative written prose.',
    transformation: 'Making intellectual mastery visible to the examiner within minutes.',
  },
  {
    step: '05',
    name: 'Judgement',
    concept: 'Balanced Decision-Making',
    description: 'Synthesising conflicting arguments into constitutional, fair, and actionable conclusions.',
    transformation: 'Approaching problems with the measured neutrality of an adjudicator.',
  },
  {
    step: '06',
    name: 'Leadership',
    concept: 'Principled Public Service',
    description: 'Executing decisions with integrity, empathy, and stoic composure under pressure.',
    transformation: 'Transforming examination preparation into a lifetime of public stewardship.',
  },
]

// ============================================================================
// 4. ANSWER WRITING SIMULATOR DATA
// ============================================================================
export interface AnswerDefect {
  id: string
  label: string
  description: string
  color: string
}

export interface AnswerMerit {
  id: string
  label: string
  description: string
  color: string
}

export interface AnswerWritingSimulation {
  question: string
  directive: string
  marks: string
  wordLimit: string
  before: {
    title: string
    verdict: string
    critique: string
    defects: AnswerDefect[]
    paragraphs: {
      text: string
      defectTag?: string
    }[]
  }
  methodSteps: {
    number: string
    name: string
    tagline: string
    description: string
  }[]
  after: {
    title: string
    verdict: string
    summary: string
    merits: AnswerMerit[]
    paragraphs: {
      heading?: string
      text: string
      meritTag?: string
    }[]
  }
}

export const answerWritingSimulationData: AnswerWritingSimulation = {
  question:
    'Examine the challenges in balancing environmental conservation with infrastructure development in ecologically fragile zones. Suggest a sustainable administrative approach.',
  directive: 'Examine & Suggest',
  marks: '15 Marks',
  wordLimit: '250 Words (GS Paper III)',
  before: {
    title: 'The Unstructured Answer (Average / Superficial)',
    verdict: 'Lacks administrative structure, contains conversational filler, and fails to balance economic vs ecological trade-offs.',
    critique:
      'The candidate dumps memorized generic facts without deconstructing specific fragile zones, uses colloquial padding, and ends with vague moral appeals instead of administrative policy solutions.',
    defects: [
      {
        id: 'unclear-structure',
        label: 'Unclear Structure',
        description: 'No clear headings, sub-headings, or logical sequencing.',
        color: '#DC2626',
      },
      {
        id: 'unnecessary-words',
        label: 'Unnecessary Words',
        description: 'Verbose filler like "It is a well known fact that from ancient times..." wasting word limits.',
        color: '#EA580C',
      },
      {
        id: 'weak-analysis',
        label: 'Weak Analysis',
        description: 'Fails to differentiate fragile ecosystems (Western Ghats vs Himalayas vs Coasts).',
        color: '#CA8A04',
      },
      {
        id: 'lack-of-balance',
        label: 'Lack of Balance',
        description: 'Takes a one-sided anti-development stance without acknowledging strategic connectivity needs.',
        color: '#9333EA',
      },
      {
        id: 'weak-conclusion',
        label: 'Weak Conclusion',
        description: 'Vague generic statement "Government should take care of nature" lacking policy mechanism.',
        color: '#E11D48',
      },
    ],
    paragraphs: [
      {
        text: 'It is a universally known and acknowledged fact that environmental conservation is very important for human survival since ancient times. Development is also very crucial because without infrastructure roads and railway lines, our country cannot grow and people will remain poor.',
        defectTag: 'unnecessary-words',
      },
      {
        text: 'In many hilly and forested areas, government is building dams and highways. But this causes heavy landslides, cloudbursts, and cutting down of many lakhs of trees. Contractors do illegal mining and blast rocks with dynamite. This ruins the environment completely and local tribals are suffering immensely. Development is destroying our biodiversity.',
        defectTag: 'weak-analysis',
      },
      {
        text: 'Therefore, building large projects in such areas should simply be stopped immediately because human life and nature are more important than GDP numbers.',
        defectTag: 'lack-of-balance',
      },
      {
        text: 'In conclusion, the government and all citizens must plant more trees, follow green rules, and love nature so that future generations can live happily in peace.',
        defectTag: 'weak-conclusion',
      },
    ],
  },
  methodSteps: [
    {
      number: '01',
      name: 'UNDERSTAND',
      tagline: 'Deconstruct Directives',
      description: 'Isolate the core dichotomy: "Conservation vs Connectivity" in specific fragile ecologies.',
    },
    {
      number: '02',
      name: 'STRUCTURE',
      tagline: 'Framework & Headings',
      description: 'Divide into Introduction (Context), Structural Dilemmas, and Pragmatic Administrative Solutions.',
    },
    {
      number: '03',
      name: 'ANALYSE',
      tagline: 'Multi-Domain Rigor',
      description: 'Integrate scientific tools (carrying capacity, cumulative EIA) with real infrastructure mandates.',
    },
    {
      number: '04',
      name: 'BALANCE',
      tagline: 'Judicial Neutrality',
      description: 'Reconcile strategic border/transit imperatives with irreversible ecological tipping points.',
    },
    {
      number: '05',
      name: 'CONCLUDE',
      tagline: 'Actionable Governance',
      description: 'Synthesize sustainable doctrine into institutional accountability and monitoring frameworks.',
    },
  ],
  after: {
    title: 'The Sarathii Standard Answer (High Scoring / Administrative)',
    verdict: 'Clear structural hierarchy, concise syntactic precision, dialectical balance, and institutional policy mechanisms.',
    summary:
      'Reflects the balanced judgment expected of an administrator: recognizes strategic necessities, invokes statutory frameworks, and proposes measurable technological and governance safeguards.',
    merits: [
      {
        id: 'clarity',
        label: 'Conceptual Clarity',
        description: 'Direct opening defining fragile zones with statutory/scientific backing.',
        color: '#059669',
      },
      {
        id: 'structure',
        label: 'Architectural Structure',
        description: 'Categorized headings enabling rapid examiner cognitive parsing.',
        color: '#2563EB',
      },
      {
        id: 'analysis',
        label: 'Analytical Depth',
        description: 'Delineates geotechnical risks, carrying capacity, and strategic imperatives.',
        color: '#7C3AED',
      },
      {
        id: 'balance',
        label: 'Dialectical Balance',
        description: 'Balances national security/connectivity with Article 21 ecological rights.',
        color: '#D97706',
      },
      {
        id: 'conclusion',
        label: 'Actionable Governance',
        description: 'Proposes cumulative EIA, ecological fiscal transfers, and local stakeholder oversight.',
        color: '#0D9488',
      },
    ],
    paragraphs: [
      {
        heading: 'Context & The Ecological Dilemma',
        text: 'Ecologically Fragile Zones (EFZs)—such as the Himalayas, Western Ghats, and coastal belts—possess low geological resilience and irreplaceable biodiversity. The administrative challenge lies in reconciling non-negotiable strategic connectivity (national defense, basic access) with the constitutional mandate under Article 48A and the Public Trust Doctrine.',
        meritTag: 'clarity',
      },
      {
        heading: 'Key Structural Challenges',
        text: '1. Geotechnical Vulnerability: Slope destabilization, debris dumping in riverbeds, and altered hydrological regimes leading to catastrophic flash floods.\n2. Inadequate Baseline Appraisals: Project-by-project Environmental Impact Assessments (EIAs) ignoring landscape-level cumulative carrying capacities.\n3. Socio-Ecological Displacement: Disruption of indigenous livelihoods without participatory rehabilitation frameworks.',
        meritTag: 'analysis',
      },
      {
        heading: 'Sustainable Administrative Roadmap',
        text: '1. Science-First Spatial Planning: Institutionalize mandatory Cumulative Carrying Capacity Assessments before sanctioning mega-corridors.\n2. Eco-Engineering Standards: Enforce tunnel-and-viaduct designs instead of reckless hill-cutting, coupled with bio-turfing and real-time sensor slope monitoring.\n3. De-centralized Oversight: Empower District Level Committees with local tribal councils (PFR/PESA) for transparent social audits.\n4. Ecological Fiscal Transfers: Compensate hill/fragile states through 15th Finance Commission green weighting to incentivize conservation over unchecked commercial exploitation.',
        meritTag: 'structure',
      },
      {
        heading: 'Way Forward / Administrative Synthesis',
        text: 'Development in fragile terrains must transition from an "engineering dominance" model to an "ecological stewardship" paradigm. As held in T.N. Godavarman, development that irreversibly ruptures ecological equilibrium undermines long-term public welfare. The true test of governance is building resilient infrastructure that works in tandem with natural hydrology, safeguarding both sovereignty and sustainability.',
        meritTag: 'conclusion',
      },
    ],
  },
}

// ============================================================================
// 5. THINKING LAB & ADMINISTRATIVE SIMULATION
// ============================================================================
export interface ThinkingPerspective {
  id: string
  title: string
  iconName: 'Building2' | 'Coins' | 'Scale' | 'Users' | 'TrendingUp'
  shortHeadline: string
  keyQuestions: string[]
  administrativeInsight: string
  concreteRecommendation: string
}

export interface ThinkingLabScenario {
  id: string
  scenarioTitle: string
  districtContext: string
  problemStatement: string
  fictionalDisclaimer: string
  modes: {
    id: string
    title: string
    description: string
  }[]
  perspectives: ThinkingPerspective[]
  mentorSynthesis: string
}

export const defaultThinkingLabScenario: ThinkingLabScenario = {
  id: 'water-equity-crisis',
  scenarioTitle: 'District Drinking Water Shortage & Agrarian Equity',
  districtContext: 'Fictional semi-arid district of "Chandrapur" experiencing severe seasonal groundwater depletion.',
  problemStatement:
    'A severe heatwave has depleted local reservoirs to 18% capacity. Rapidly expanding sugarcane and industrial processing units upstream are drawing deep groundwater, causing critical drinking water deficits in downstream rural habitations.',
  fictionalDisclaimer:
    'Educational simulation designed to demonstrate the Sarathii multi-perspective administrative framework. Fictional scenario for pedagogical analysis.',
  modes: [
    {
      id: 'analyse',
      title: 'ANALYSE',
      description: 'Deconstruct the crisis into root hydrological, socio-economic, and legal determinants.',
    },
    {
      id: 'evaluate',
      title: 'EVALUATE',
      description: 'Weigh competing claims: agricultural livelihoods vs fundamental human right to potable water.',
    },
    {
      id: 'compare',
      title: 'COMPARE',
      description: 'Examine previous policy interventions: command-and-control bans vs community aquifer management.',
    },
    {
      id: 'synthesise',
      title: 'SYNTHESISE',
      description: 'Harmonize immediate relief operations with systemic multi-year water budgeting.',
    },
    {
      id: 'conclude',
      title: 'CONCLUDE',
      description: 'Formulate an actionable, equitable order upholding natural justice and constitutional morality.',
    },
  ],
  perspectives: [
    {
      id: 'administration',
      title: 'ADMINISTRATION',
      iconName: 'Building2',
      shortHeadline: 'Regulatory Enforcement & Crisis Logistics',
      keyQuestions: [
        'How rapidly can emergency water tankers be deployed to unreached habitations?',
        'What statutory powers under the Disaster Management Act can regulate commercial extraction?',
        'How can inter-departmental synergy between Irrigation, Revenue, and Health be mobilized?',
      ],
      administrativeInsight:
        'Immediate executive action must prioritize survival needs without provoking agrarian law-and-order confrontation. Use spatial mapping to verify real-time tanker distribution.',
      concreteRecommendation:
        'Invoke Section 34 of DMA to temporarily cap industrial deep borewells; deploy GPS-tracked emergency water fleets with fixed grievance hotlines.',
    },
    {
      id: 'economics',
      title: 'ECONOMICS',
      iconName: 'Coins',
      shortHeadline: 'Crop Incentives & Livelihood Realities',
      keyQuestions: [
        'Why do farmers cultivate water-guzzling sugarcane despite knowing aquifer risks? (Guaranteed MSP & mill advances)',
        'What fiscal compensation is needed for crop rotation toward millets and pulses?',
        'How can micro-irrigation (drip/sprinkler) subsidies be disbursed immediately?',
      ],
      administrativeInsight:
        'Bans without economic alternatives create black markets and rural distress. The administrator must align agricultural pricing incentives with water conservation.',
      concreteRecommendation:
        'Introduce direct benefit incentive transfers for farmers transitioning 30% acreage to low-water millets; mandate solar drip kits for sugar mills.',
    },
    {
      id: 'ethics',
      title: 'ETHICS',
      iconName: 'Scale',
      shortHeadline: 'Constitutional Morality & Human Rights',
      keyQuestions: [
        'Does the fundamental right to life under Article 21 include equitable drinking water for marginalized hamlets?',
        'Is it ethically defensible to divert public aquifers for private beverage bottling or non-essential cash crops?',
        'How do we ensure vulnerable scheduled caste colonies at the tail-end receive equal water quotas?',
      ],
      administrativeInsight:
        'Water is not merely a commercial commodity; it is a shared public trust. The State holds aquifers as a trustee for all citizens, particularly the most vulnerable.',
      concreteRecommendation:
        'Enforce the Public Trust Doctrine by prioritizing drinking water for vulnerable hamlets over all industrial and luxury allocations.',
    },
    {
      id: 'social-impact',
      title: 'SOCIAL IMPACT',
      iconName: 'Users',
      shortHeadline: 'Gender Burden & Communal Cohesion',
      keyQuestions: [
        'How does water distress impact rural women and girls who walk 4 kilometers daily for drinking water?',
        'What health ramifications (waterborne illnesses, school dropouts) emerge in marginalized clusters?',
        'How can Village Water & Sanitation Committees (Pani Samitis) resolve village water disputes amicably?',
      ],
      administrativeInsight:
        'Water crises disproportionately burden women and adolescent girls. Solutions must incorporate women leaders directly in local water ration monitoring.',
      concreteRecommendation:
        'Place community water distribution points under the direct management of local Women Self-Help Groups (SHGs) to eliminate queue harassment.',
    },
    {
      id: 'long-term',
      title: 'LONG-TERM PLANNING',
      iconName: 'TrendingUp',
      shortHeadline: 'Aquifer Rejuvenation & Climate Resilience',
      keyQuestions: [
        'How do we reverse the district’s annual 1.5-meter groundwater table decline over the next decade?',
        'Can MGNREGS funds be systematically channeled into check dams, contour trenches, and percolation tanks?',
        'How can digital aquifer telemetry create transparent water budgets for each village panchayat?',
      ],
      administrativeInsight:
        'An administrator who solves today’s emergency but leaves the aquifer depleted has only postponed catastrophe. Sustainable governance requires hydrological replenishment.',
      concreteRecommendation:
        'Launch "Mission Jal Sanchay": Converge 60% of MGNREGS labor into watershed check dams, afforestation, and rooftop rainwater harvesting mandates.',
    },
  ],
  mentorSynthesis:
    'Good decisions begin with good questions. An administrator does not look at a crisis through the narrow prism of an engineer or an economist alone. They balance immediate relief with structural reforms, grounding every order in constitutional equity and human empathy.',
}

// ============================================================================
// 6. MENTORSHIP DNA (Progressive Illuminated Sequence)
// ============================================================================
export interface MentorshipDnaStep {
  step: string
  name: string
  concept: string
  essence: string
  color: string
}

export const mentorshipDnaSteps: MentorshipDnaStep[] = [
  {
    step: '01',
    name: 'EXPERIENCE',
    concept: 'Five Decades of Service',
    essence: 'Rooted in the lived governance of Defence, Civil Administration, and Judiciary.',
    color: '#D4AF6A',
  },
  {
    step: '02',
    name: 'DISCIPLINE',
    concept: 'Martial Fortitude',
    essence: 'Unwavering consistency, structured daily timetables, and mental stamina.',
    color: '#E6CFA5',
  },
  {
    step: '03',
    name: 'THINKING',
    concept: 'Logical Coherence',
    essence: 'Orderly, rational contemplation eliminating contradiction and circularity.',
    color: '#D4AF6A',
  },
  {
    step: '04',
    name: 'ANALYSIS',
    concept: 'Dialectical Rigor',
    essence: 'Dissecting multi-stakeholder trade-offs with constitutional neutrality.',
    color: '#E6CFA5',
  },
  {
    step: '05',
    name: 'STRATEGY',
    concept: 'High-Yield Precision',
    essence: 'Discerning what to master and what to discard; no scholar trap.',
    color: '#D4AF6A',
  },
  {
    step: '06',
    name: 'WRITING',
    concept: 'Luminous Expression',
    essence: 'Communicating maximum substance with minimal words under time constraints.',
    color: '#E6CFA5',
  },
  {
    step: '07',
    name: 'COMPOSURE',
    concept: 'Stoic Equanimity',
    essence: 'Calm under pressure; transforming exam anxiety into purposeful execution.',
    color: '#D4AF6A',
  },
  {
    step: '08',
    name: 'LEADERSHIP',
    concept: 'Public Stewardship',
    essence: 'Preparing for a lifetime of ethical, responsible, and visionary public service.',
    color: '#E6CFA5',
  },
]

// ============================================================================
// 7. ASPIRANT DIAGNOSTIC (Where Are You In Your Journey?)
// ============================================================================
export interface AspirantDiagnosticStage {
  id: string
  number: string
  title: string
  subtitle: string
  typicalFrictions: string[]
  sarathiiApproach: string
  keyFocusAreas: string[]
  mentorRecommendation: string
}

export const aspirantDiagnosticStages: AspirantDiagnosticStage[] = [
  {
    id: 'starting-upsc',
    number: '01',
    title: 'Starting UPSC Preparation',
    subtitle: 'Foundation & Orientation',
    typicalFrictions: [
      'Overwhelmed by the vast syllabus and endless coaching materials.',
      'Unsure which standard textbooks are authoritative and which to avoid.',
      'Struggling to build a sustainable daily study discipline.',
    ],
    sarathiiApproach:
      'We establish clear conceptual clarity from day one, shedding the "scholar trap." You will focus strictly on high-yield primary sources and cultivate habits of structured daily thinking.',
    keyFocusAreas: ['Curated Primary Reading List', 'Syllabus Deconstruction', 'Daily Cognitive Discipline'],
    mentorRecommendation:
      'Do not rush into writing 20 answers a day. First build conceptual depth and clarity on core constitutional and economic themes.',
  },
  {
    id: 'prelims-focus',
    number: '02',
    title: 'Preparing for Prelims',
    subtitle: 'Analytical Precision & Elimination',
    typicalFrictions: [
      'Stuck around the cutoff range despite reading all compilations.',
      'Losing marks due to negative marking and second-guessing in the exam hall.',
      'Anxiety over unpredictable CSAT and current affairs trivia.',
    ],
    sarathiiApproach:
      'Shift from rote memorization to analytical conceptual elimination. Learn to evaluate options like an administrator identifying policy discrepancies.',
    keyFocusAreas: ['Objective Option Deconstruction', 'High-Yield Revision Cycles', 'Negative Mark Containment'],
    mentorRecommendation:
      'Prelims does not test information trivia; it tests clarity of core concepts under pressure. Keep your sources minimal and revise them repeatedly.',
  },
  {
    id: 'mains-focus',
    number: '03',
    title: 'Preparing for Mains',
    subtitle: 'Multi-Dimensional Synthesis',
    typicalFrictions: [
      'Unable to finish GS papers within the 3-hour limit.',
      'Answers look like generic university essays without administrative depth.',
      'Low scores in GS Paper IV (Ethics) and Essay.',
    ],
    sarathiiApproach:
      'Master the Sarathii structural architecture: crisp introductions, categorized sub-headings, dialectical balance, and forward-looking governance conclusions.',
    keyFocusAreas: ['Speed with Quality', 'Directives Mastery (Critically Analyse, Evaluate)', 'Ethics Case Studies'],
    mentorRecommendation:
      'In Mains, the examiner cannot read your mind; they read your structure. Give them clean visual signposts and balanced reasoning.',
  },
  {
    id: 'answer-writing',
    number: '04',
    title: 'Struggling with Answer Writing',
    subtitle: 'Expression & Structure Refinement',
    typicalFrictions: [
      'Writing answers filled with unnecessary words and circular sentences.',
      'Failing to address the core demand of the question directive.',
      'Missing diagrams, case laws, committees, or administrative examples.',
    ],
    sarathiiApproach:
      'Undergo 1:1 answer diagnostic reviews. Every redundant phrase is stripped away, teaching you to say more in fewer words with maximum intellectual impact.',
    keyFocusAreas: ['Word Economy', 'Intro-Body-Conclusion Flow', 'Administrative Lexicon'],
    mentorRecommendation:
      'Write with the precision of a judicial decree. Minimum words, maximum clarity, zero ambiguity.',
  },
  {
    id: 'working-professional',
    number: '05',
    title: 'Working Professional',
    subtitle: 'Time Optimization & Surgical Focus',
    typicalFrictions: [
      'Limited daily study window (3-4 hours) while balancing job demands.',
      'Mental fatigue and guilt of not studying 12 hours like full-time aspirants.',
      'Difficulty maintaining consistency across weekday shifts.',
    ],
    sarathiiApproach:
      'Quality over quantity. We design a high-efficiency modular roadmap that extracts maximum analytical output from 3 focused daily hours, turning your corporate discipline into an asset.',
    keyFocusAreas: ['High-Yield Modular Scheduling', 'Active Analytical Recall', 'Weekend Mains Simulations'],
    mentorRecommendation:
      'Twelve hours of unfocused reading is inferior to four hours of disciplined, sharp analysis. Your professional maturity is a distinct advantage in Mains.',
  },
  {
    id: 'strategic-guidance',
    number: '06',
    title: 'Looking for Strategic Guidance',
    subtitle: 'Multiple Attempts / Plateaus',
    typicalFrictions: [
      'Cleared Prelims multiple times but missing final rank by 20-30 marks.',
      'Unable to diagnose blind spots in Optional or Essay papers.',
      'Burnout, psychological fatigue, and self-doubt after multiple cycles.',
    ],
    sarathiiApproach:
      'A thorough diagnostic forensic audit of your past scorecards and writing samples to isolate the exact 5-10% cognitive leakage points.',
    keyFocusAreas: ['Blind Spot Audit', 'Personality Alignment', 'Emotional Equanimity'],
    mentorRecommendation:
      'When you are at a plateau, doing more of the same will not break the threshold. You need a qualitative pivot in how you express and structure ideas.',
  },
  {
    id: 'leadership-dev',
    number: '07',
    title: 'Seeking Leadership Development',
    subtitle: 'Personality Test & Public Service',
    typicalFrictions: [
      'Nervousness before senior UPSC interview board members.',
      'Difficulty articulating balanced, independent personal opinions on controversial national dilemmas.',
      'Struggling to project authentic administrative poise and ethical conviction.',
    ],
    sarathiiApproach:
      'Mentorship directly with a former Armed Forces commander, senior IAS administrator, and tribunal adjudicator. Build the authentic presence of a future public servant.',
    keyFocusAreas: ['Board Demeanor & Composure', 'Ethical Dilemma Resolution', 'Authentic Statesmanship'],
    mentorRecommendation:
      'The board is not looking for a walking encyclopedia. They are evaluating whether they can trust you with a district. Speak with honesty, humility, and conviction.',
  },
]

// ============================================================================
// 8. EXPERIENCE BRIDGE (Visual Flow: Founder -> Leadership)
// ============================================================================
export interface ExperienceBridgeStep {
  step: string
  role: string
  subtext: string
  description: string
}

export const experienceBridgeSteps: ExperienceBridgeStep[] = [
  {
    step: '01',
    role: 'JAY PRAKASH SINGH',
    subtext: 'Founder & Chief Mentor',
    description: 'Over 50 years of distinguished service in Defence, Administration, Judiciary, and Literature.',
  },
  {
    step: '02',
    role: 'LIVED EXPERIENCE',
    subtext: 'Real-World Governance',
    description: 'Actual decision-making under crisis, system modernizations, and administrative adjudication.',
  },
  {
    step: '03',
    role: 'INSIGHT',
    subtext: 'Distilled Wisdom',
    description: 'Separating theoretical coaching fluff from what actually works in policy and examination evaluation.',
  },
  {
    step: '04',
    role: 'SARATHII PHILOSOPHY',
    subtext: 'School of Thought',
    description: 'Excellence is not an accident; it is the habit of disciplined thinking and purposeful action.',
  },
  {
    step: '05',
    role: 'SARATHII METHOD',
    subtext: 'Structured Methodology',
    description: 'Assess, Strategise, Implement, Refine, and Achieve through rigorous 1:1 guidance.',
  },
  {
    step: '06',
    role: 'MENTORSHIP',
    subtext: 'Individual Diagnostic',
    description: 'Personalized intellectual and emotional guidance identifying blind spots and refining expression.',
  },
  {
    step: '07',
    role: 'THE ASPIRANT',
    subtext: 'Future Civil Servant',
    description: 'Transformed in mindset, writing precision, and mental composure under high pressure.',
  },
  {
    step: '08',
    role: 'RESPONSIBLE LEADERSHIP',
    subtext: 'Meaningful Public Service',
    description: 'Equipped to serve society with constitutional ethics, poise, and unyielding integrity.',
  },
]

// ============================================================================
// 9. BOOK THEMES ("जिन राहों पर सियाराम चले")
// ============================================================================
export interface BookThemeDetail {
  id: string
  tag: string
  title: string
  hindiTitle: string
  coreConcept: string
  quoteHindi: string
  quoteEnglish: string
  administrativeRelevance: string
  aspirantTakeaway: string
}

export const bookThemesData: BookThemeDetail[] = [
  {
    id: 'duty',
    tag: 'DUTY',
    title: 'Maryada & Unyielding Duty',
    hindiTitle: 'मर्यादा और कर्तव्यनिष्ठा',
    coreConcept:
      'The conscious choice to uphold ethical principles and institutional duty especially when compromise or convenience offers an easier alternative.',
    quoteHindi: 'कर्तव्य का मार्ग फूलों की सेज नहीं, कंटकों से भरा वह पाथेय है जहाँ केवल आत्म-निष्ठा ही सम्बल बनती है।',
    quoteEnglish:
      'The path of duty is not a bed of blossoms; it is a thorn-strewn journey where only inner integrity serves as sustenance.',
    administrativeRelevance:
      'Directly applicable to GS-4 Ethics, foundational values of civil services, and unwavering adherence to constitutional rules despite political pressures.',
    aspirantTakeaway:
      'Approach UPSC preparation not as a transactional race, but as a sacred discipline of character forging.',
  },
  {
    id: 'adversity',
    tag: 'ADVERSITY',
    title: 'The Crucible of Adversity (Vanvaas as Training)',
    hindiTitle: 'विषमता की कसौटी: वनवास एक साधना',
    coreConcept:
      'Viewing personal hardship, isolation, and prolonged uncertainty not as punitive suffering, but as an essential training ground for future leadership.',
    quoteHindi: 'वनगमन कोई दण्ड नहीं था, वह तो मर्यादा के सर्वोच्च प्रतिमान को स्थापित करने का सार्वभौमिक प्रशिक्षण था।',
    quoteEnglish:
      'The departure to the forest was not an exile; it was a sublime preparation where comfort was surrendered to forge uncompromising virtue.',
    administrativeRelevance:
      'Teaches future district magistrates how to function with calmness and dignity in remote, under-resourced postings without cynicism.',
    aspirantTakeaway:
      'Reframe the grueling multi-year UPSC preparation as your personal crucible where resilience and clarity are permanently forged.',
  },
  {
    id: 'leadership',
    tag: 'LEADERSHIP',
    title: 'Servant Leadership & Collective Ownership',
    hindiTitle: 'नेतृत्व एवं सहकार',
    coreConcept:
      'Authentic leadership founded not on imperial decree, but on humility, shared sacrifice, and building egalitarian alliances with ordinary people.',
    quoteHindi: 'सच्चा नायक वही है जो महलों के ऐश्वर्य से दूर रहकर भी जन-जन के हृदय में विश्वास का संचार कर सके।',
    quoteEnglish:
      'The true leader is one who, even far from palatial splendour, instills confidence and self-belief in the heart of every ordinary soul.',
    administrativeRelevance:
      'Emphasizes inclusive governance, participatory rural development, and respecting local tribal communities during administrative interventions.',
    aspirantTakeaway:
      'Reflect servant leadership in UPSC personality test interactions and GS-2 public policy answers.',
  },
  {
    id: 'ethics',
    tag: 'ETHICS',
    title: 'Constitutional Morality & Righteous Conduct',
    hindiTitle: 'धर्म एवं नैतिक आचरण',
    coreConcept:
      'Dharma as the bedrock of action: aligning personal desires with the greater societal good and moral law.',
    quoteHindi: 'जब अंतःकरण जागृत हो, तब बाह्य संकट व्यक्ति को उसके धर्म से विचलित नहीं कर सकते।',
    quoteEnglish:
      'When the inner conscience is awakened, external crises can never divert an individual from righteous conduct.',
    administrativeRelevance:
      'Upholding the Public Trust Doctrine, zero tolerance for corruption, and resolving administrative ethical dilemmas with clean hands.',
    aspirantTakeaway:
      'Cultivate an unshakeable ethical compass that naturally reflects in GS-4 case study evaluations and Essay writing.',
  },
  {
    id: 'responsibility',
    tag: 'RESPONSIBILITY',
    title: 'Accountability & Steadfast Composure (Samatvam)',
    hindiTitle: 'समत्व एवं उत्तरदायित्व',
    coreConcept:
      'Maintaining serene emotional balance both when ascending the royal throne and when walking into the wilderness.',
    quoteHindi: 'सिंहासन मिले या वनवास—जिसका चित्त दोनों में सम रहे, वही प्रजा के विश्वास का सच्चा अधिकारी है।',
    quoteEnglish:
      'Whether granted a throne or cast into the wilderness, only the mind that remains tranquil in both is worthy of the people’s trust.',
    administrativeRelevance:
      'The cornerstone of administrative poise: preventing emotional reactivity during communal tensions, natural disasters, or public scrutiny.',
    aspirantTakeaway:
      'The ultimate antidote to exam-hall anxiety, test series panic, and emotional burnout during preparation.',
  },
  {
    id: 'civilization',
    tag: 'CIVILIZATION',
    title: 'Civilizational Wisdom & Modern Governance',
    hindiTitle: 'सभ्यतागत दृष्टि और आधुनिक शासन',
    coreConcept:
      'Synthesizing India’s timeless cultural and philosophical ethos with the statutory demands of 21st-century democratic administration.',
    quoteHindi: 'हमारी सभ्यता का सार भौतिक विस्तार में नहीं, अपितु संयम, समन्वय और सत्य के अनुशीलन में निहित है।',
    quoteEnglish:
      'The essence of our civilization lies not in material dominance, but in restraint, synthesis, and the steadfast pursuit of truth.',
    administrativeRelevance:
      'Bridges the gap between dry technocratic administration and humane, culturally grounded public service.',
    aspirantTakeaway:
      'Enriches Essay and General Studies answers with profound philosophical depth that distinguishes top rankers.',
  },
]
