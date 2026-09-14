export interface PhilosophyConcept {
  id: string
  title: string
  subtitle: string
  description: string
  iconName: string
}

export interface PillarOffer {
  number: string
  title: string
  headline: string
  description: string
  keyPoints: string[]
  quote: string
  icon: string
}

export interface MethodStep {
  step: string
  name: string
  tagline: string
  description: string
  details: string[]
}

export interface TargetAudience {
  title: string
  description: string
  idealFor: string
  icon: string
}

export const fullPhilosophyText = `Success in the Civil Services Examination is not determined solely by the amount of knowledge one possesses. It is determined by the ability to think clearly, analyse objectively, express precisely, and perform confidently under pressure.

The Sarathii Method is founded on the belief that excellence is not an accident. It is the outcome of disciplined preparation, logical thinking, strategic planning, emotional resilience, and unwavering self-belief.

Every year, thousands of aspirants study the same books, attend the same lectures, and read the same current affairs. Yet only a few succeed. The difference lies not merely in what they know, but in how they think, how they write, and how they approach the examination.

Sarathii seeks to bridge that difference.

Its objective is not simply to complete the syllabus but to cultivate habits of disciplined thinking and purposeful action. It teaches aspirants to write with clarity, reason with logic, analyse with balance, plan strategically, remain composed under pressure, and maintain a positive outlook throughout their journey.

These are not merely examination skills. They are the very qualities expected of a civil servant entrusted with the responsibility of serving society.

The guidance offered by Sarathii is rooted not only in academic understanding but also in decades of practical experience in public service, administration, the armed forces, the judiciary, and literature.

It combines the discipline of a soldier, the vision of an administrator, the balance of a judge, and the sensitivity of a writer.

Sarathii therefore offers more than coaching. It offers mentorship.

Its purpose is not merely to help candidates secure a rank, but to prepare them for a lifetime of responsible leadership, ethical conduct, and meaningful public service.

For Sarathii, success is measured not only by the number of selections it produces, but also by the quality of officers it helps shape.

Sarathii is not merely a classroom. It is a school of thought.
Sarathii is not merely a mentor. It is a lifelong guide.`

export const philosophyConcepts: PhilosophyConcept[] = [
  {
    id: 'think-clearly',
    title: 'Think Clearly',
    subtitle: 'Clarity over Clutter',
    description: 'Cut through information overload. Distill complex socio-economic and geopolitical questions into fundamental underlying principles with sharp intellectual lucidity.',
    iconName: 'Compass',
  },
  {
    id: 'analyse-objectively',
    title: 'Analyse Objectively',
    subtitle: 'Balance over Bias',
    description: 'Evaluate multi-dimensional national issues without cognitive prejudice. Construct measured, evidence-backed arguments reflecting the administrative temper.',
    iconName: 'Scale',
  },
  {
    id: 'express-precisely',
    title: 'Express Precisely',
    subtitle: 'Impact over Volume',
    description: 'Master the high-yield art of concise, structured, and evocative answer writing that establishes instant intellectual resonance with the examiner.',
    iconName: 'Feather',
  },
  {
    id: 'perform-confidently',
    title: 'Perform Confidently',
    subtitle: 'Composure under Pressure',
    description: 'Cultivate the emotional steadiness of a seasoned commander. Transform the examination arena from a source of anxiety into a stage of purposeful execution.',
    iconName: 'ShieldCheck',
  },
]

export const whatSarathiiOffers: PillarOffer[] = [
  {
    number: '01',
    title: 'Clear and Concise Writing',
    headline: 'Written communication is the medium through which a candidate comes face to face with the examiner.',
    description: 'A clear, concise, and well-structured answer written in simple language immediately creates a positive and favourable impression. Clear writing is the ability to communicate effectively using the minimum words without sacrificing meaning.',
    keyPoints: [
      'Eliminating semantic redundancy and fluff',
      'Structural architectural framing (Introduction, Core Logic, Balanced Conclusion)',
      'High-impact keyword and data integration',
      'Effective diagrammatic representations',
    ],
    quote: 'Clear writing is the mirror of a clear mind.',
    icon: 'PenTool',
  },
  {
    number: '02',
    title: 'Logical and Coherent Thinking',
    headline: 'Success depends not only on knowledge but also on the ability to think logically and present ideas coherently.',
    description: 'Logical thinking requires maintaining a single focused theme, presenting ideas clearly, following a coherent sequence, and reaching a well-reasoned conclusion.',
    keyPoints: [
      'Maintaining thematic integrity across diverse GS papers',
      'Logical flow and seamless transition between arguments',
      'Contextual linkage between static concepts and current dynamics',
      'Evidence-based inductive and deductive reasoning',
    ],
    quote: 'Structure is what turns raw knowledge into persuasive administrative reasoning.',
    icon: 'Brain',
  },
  {
    number: '03',
    title: 'Analytical and Critical Approach',
    headline: 'The Civil Services Examination does not merely test memory—it evaluates critical discernment.',
    description: 'It evaluates the ability to analyse, evaluate, think critically, form independent judgments, and reach balanced conclusions. Sarathii equips aspirants with the intellectual tools necessary to develop an analytical style of writing.',
    keyPoints: [
      'Deconstructing complex policy trade-offs',
      'Multi-stakeholder impact assessments',
      'Constitutional and ethical perspective anchoring',
      'Constructive critique with actionable policy solutions',
    ],
    quote: 'An administrator must not only see the problem; they must perceive the unseen consequences.',
    icon: 'Search',
  },
  {
    number: '04',
    title: 'A Strategically Planned Study Programme',
    headline: 'Planning is the foundation of success. The goal is examination readiness, not passive scholarship.',
    description: 'The strategy covers time management, realistic study schedules, curated source selection, rigorous prioritisation, cyclical revision, and continuous answer-writing practice.',
    keyPoints: [
      'What to study vs. What to consciously ignore',
      'Curated primary source discipline over material hoarding',
      'Precision micro-schedules and milestone tracking',
      'Synchronised Prelims-cum-Mains integrated workflow',
    ],
    quote: 'Strategy is the art of concentrating maximum force at the point of greatest impact.',
    icon: 'Target',
  },
  {
    number: '05',
    title: 'Mental and Emotional Resilience',
    headline: 'The examination is demanding, and the long preparation cycle tests the spirit. A calm mind wins the war.',
    description: 'Sarathii helps aspirants develop deep mental strength, emotional resilience, steady confidence, composure, and razor-sharp concentration throughout the preparation journey.',
    keyPoints: [
      'Managing burnout, plateaus, and performance fatigue',
      'Stoic emotional self-regulation techniques',
      'Overcoming fear of failure and examination anxiety',
      'Transforming preparation into an enjoyable, disciplined journey',
    ],
    quote: 'Under pressure, you do not rise to the occasion; you sink to the level of your training and calm.',
    icon: 'Sparkles',
  },
  {
    number: '06',
    title: 'Positive Thinking',
    headline: 'Positive thinking is one of the greatest assets in life. A confident mind produces confident answers.',
    description: 'Aspirants cultivate steady self-belief, disciplined optimism, constructive self-dialogue, and consistent performance across all stages of the examination and interview.',
    keyPoints: [
      'Replacing self-doubt with evidence-backed personal progress',
      'Developing quiet executive presence for the personality test',
      'Constructive mindset towards feedback and evaluation',
      'Long-term vision for meaningful public service',
    ],
    quote: 'When your purpose is rooted in service rather than ego, clarity naturally follows.',
    icon: 'Sun',
  },
]

export const sarathiiMethodSteps: MethodStep[] = [
  {
    step: '01',
    name: 'Assess',
    tagline: 'Understand Capabilities & Gaps',
    description: 'A comprehensive diagnostic evaluation of your current knowledge base, answer-writing maturity, analytical reasoning, and psychological readiness.',
    details: [
      'Diagnostic baseline answer-writing evaluation',
      'Identification of blind spots and cognitive biases',
      'Mapping individual strengths and optional subject alignment',
    ],
  },
  {
    step: '02',
    name: 'Strategise',
    tagline: 'Customised Roadmap for Success',
    description: 'Design a bespoke, high-yield preparation blueprint tailored to your timeline, learning velocity, and target examination cycle.',
    details: [
      'Month-by-month micro and macro milestone mapping',
      'High-yield source curation (eliminating low-ROI material)',
      'Customised revision cycles and test-series scheduling',
    ],
  },
  {
    step: '03',
    name: 'Implement',
    tagline: 'Discipline & Daily Execution',
    description: 'Execute the strategy with relentless discipline, active learning protocols, and structured daily answer-writing routines.',
    details: [
      'Structured daily writing and analytical synthesis',
      'Core syllabus completion with administrative depth',
      'Periodic accountability check-ins with mentor',
    ],
  },
  {
    step: '04',
    name: 'Refine',
    tagline: 'Honest Feedback & Iteration',
    description: 'Continuous micro-corrections through rigorous, line-by-line answer critique, simulated mock tests, and cognitive refinement.',
    details: [
      'Line-by-line answer structural critique',
      'Speed and presentation optimization under timed conditions',
      'Emotional calibration and stress-testing under mock pressures',
    ],
  },
  {
    step: '05',
    name: 'Achieve',
    tagline: 'Confident Execution & Rank',
    description: 'Enter the examination hall and the UPSC interview board with unshakable composure, intellectual clarity, and executive presence.',
    details: [
      'Peak psychological and physical performance state',
      'Fluid execution across GS, Essay, and Optional papers',
      'Personality Test mastery reflecting authentic leadership',
    ],
  },
]

export const targetAudiences: TargetAudience[] = [
  {
    title: 'Serious UPSC Aspirants',
    description: 'Candidates who understand that UPSC is not a memory contest, but a test of administrative maturity, clarity, and depth.',
    idealFor: 'Aspirants targeting top ranks in IAS / IPS / IFS',
    icon: 'Award',
  },
  {
    title: 'Struggling with Answer Writing',
    description: 'Candidates with vast knowledge who find it difficult to compress their thoughts into crisp, 150/250-word structured answers.',
    idealFor: 'Mains-focused students needing structural breakthroughs',
    icon: 'FileText',
  },
  {
    title: 'Seeking Strategic Clarity',
    description: 'Aspirants overwhelmed by multiple coachings, endless materials, and advice who need a single trusted charioteer.',
    idealFor: 'Working professionals and full-time aspirants',
    icon: 'MapPin',
  },
  {
    title: 'Developing Leadership & Ethics',
    description: 'Future public servants who wish to cultivate genuine administrative acumen, ethics, and mental resilience for life.',
    idealFor: 'Aspiring civil servants, administrators, and policy thinkers',
    icon: 'Users',
  },
]
