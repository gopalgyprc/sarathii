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
  paragraphs: string[]
  bullets?: {
    title?: string
    items: string[]
  }
  keyPoints: string[]
  quote: string
  icon: string
}

export interface MethodStep {
  step: string
  name: string
  tagline: string
  description: string
  objective: string
  action: string
  mindset: string
  outcome: string
  details: string[]
}

export interface AnswerWritingStep {
  number: string
  title: string
  subtitle: string
  description: string
  examinerImpact: string
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

The guidance offered by Sarathii is rooted not only in academic understanding but also in decades of practical experience in public service, administration, the armed forces, the judiciary, and literature. It combines the discipline of a soldier, the vision of an administrator, the balance of a judge, and the sensitivity of a writer.

Sarathii therefore offers more than coaching. It offers mentorship.

Its purpose is not merely to help candidates secure a rank, but to prepare them for a lifetime of responsible leadership, ethical conduct, and meaningful public service.

For Sarathii, success is measured not only by the number of selections it produces, but also by the quality of officers it helps shape.

Sarathii is not merely a classroom. It is a school of thought.
Sarathii is not merely a mentor. It is a lifelong guide.`

export const sarathiiPhilosophySections = [
  {
    heading: 'The Foundational Premise',
    content:
      'Success in the Civil Services Examination is not determined solely by the amount of knowledge one possesses. It is determined by the ability to think clearly, analyse objectively, express precisely, and perform confidently under pressure.',
  },
  {
    heading: 'The Sarathii Method',
    content:
      'The Sarathii Method is founded on the belief that excellence is not an accident. It is the outcome of disciplined preparation, logical thinking, strategic planning, emotional resilience, and unwavering self-belief.',
  },
  {
    heading: 'Bridging the Critical Difference',
    content:
      'Every year, thousands of aspirants study the same books, attend the same lectures, and read the same current affairs. Yet only a few succeed. The difference lies not merely in what they know, but in how they think, how they write, and how they approach the examination. Sarathii seeks to bridge that difference.',
  },
  {
    heading: 'Qualities of a Civil Servant',
    content:
      'Its objective is not simply to complete the syllabus but to cultivate habits of disciplined thinking and purposeful action. It teaches aspirants to write with clarity, reason with logic, analyse with balance, plan strategically, remain composed under pressure, and maintain a positive outlook throughout their journey. These are not merely examination skills. They are the very qualities expected of a civil servant entrusted with the responsibility of serving society.',
  },
  {
    heading: 'The Confluence of Disciplines',
    content:
      'The guidance offered by Sarathii is rooted not only in academic understanding but also in decades of practical experience in public service, administration, the armed forces, the judiciary, and literature. It combines the discipline of a soldier, the vision of an administrator, the balance of a judge, and the sensitivity of a writer.',
  },
  {
    heading: 'Mentorship for a Lifetime',
    content:
      'Sarathii therefore offers more than coaching. It offers mentorship. Its purpose is not merely to help candidates secure a rank, but to prepare them for a lifetime of responsible leadership, ethical conduct, and meaningful public service. For Sarathii, success is measured not only by the number of selections it produces, but also by the quality of officers it helps shape.',
  },
]

export const sarathiiMantras = [
  'Sarathii is not merely a classroom. It is a school of thought.',
  'Sarathii is not merely a mentor. It is a lifelong guide.',
]

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
    description:
      'A clear, concise, and well-structured answer written in simple language immediately creates a positive and favourable impression. Clear writing is the ability to communicate effectively using the minimum words without sacrificing meaning.',
    paragraphs: [
      'Written communication is the medium through which a candidate comes face to face with the examiner.',
      'A clear, concise, and well-structured answer written in simple language immediately creates a positive and favourable impression.',
      'Clear writing is the ability to communicate effectively using the minimum words without sacrificing meaning. It requires expressing one’s ideas with such precision that the reader understands exactly what the writer intends, leaving no room for ambiguity.',
      'This is perhaps the most difficult skill for any writer to master, regardless of the field. Sarathii aims to help aspirants develop this invaluable ability through systematic guidance and continuous practice.',
    ],
    bullets: {
      title: 'Hallmarks of Mastered Writing',
      items: [
        'Communicate effectively using the minimum words without sacrificing meaning.',
        'Express ideas with such precision that the reader understands exactly what is intended.',
        'Eliminate ambiguity, semantic fluff, and circular phrasing entirely.',
        'Cultivate structured simplicity through systematic guidance and continuous practice.',
      ],
    },
    keyPoints: [
      'Communicating effectively using minimum words without sacrificing meaning',
      'Eliminating ambiguity so the examiner grasps your intent instantly',
      'Creating a favorable first impression with structured, simple language',
      'Mastering the hardest writing skill through systematic administrative guidance',
    ],
    quote: 'Clear writing is the ability to communicate effectively using the minimum words without sacrificing meaning, leaving no room for ambiguity.',
    icon: 'PenTool',
  },
  {
    number: '02',
    title: 'Logical and Coherent Thinking',
    headline: 'Success in the Civil Services Examination depends not only on knowledge but also on the ability to think logically and present ideas coherently.',
    description:
      'Logical thinking is a disciplined thought process in which rational and orderly arguments lead naturally to a well-reasoned conclusion without contradiction or confusion.',
    paragraphs: [
      'Success in the Civil Services Examination depends not only on knowledge but also on the ability to think logically and present ideas coherently.',
      'Logical thinking is a disciplined thought process in which rational and orderly arguments lead naturally to a well-reasoned conclusion without contradiction or confusion.',
      'Knowledge can be acquired through books and lectures. However, the art of expressing that knowledge logically and effectively can be developed only under the guidance of an accomplished mentor through sustained practice. Sarathii seeks to provide precisely that guidance.',
    ],
    bullets: {
      title: 'It requires the candidate to:',
      items: [
        'Maintain a single, focused theme throughout the answer without any diversion.',
        'Present ideas clearly in a coherent, logical, and sequential manner from beginning to end.',
      ],
    },
    keyPoints: [
      'Maintaining a single, focused theme throughout without diversion',
      'Presenting ideas in a coherent, logical, and sequential manner from beginning to end',
      'Building rational, orderly arguments leading to contradiction-free conclusions',
      'Developing logical expression under an accomplished mentor through sustained practice',
    ],
    quote: 'Knowledge can be acquired through books, but the art of expressing it logically can be developed only under the guidance of an accomplished mentor.',
    icon: 'Brain',
  },
  {
    number: '03',
    title: 'Analytical and Critical Approach',
    headline: 'The Civil Services Examination does not merely test memory; it evaluates the ability to analyse, evaluate, and form independent judgments.',
    description:
      'An analytical approach requires examining every issue critically, identifying its strengths and weaknesses in relation to the central theme, and arriving at a balanced and well-reasoned conclusion.',
    paragraphs: [
      'The Civil Services Examination does not merely test a candidate’s memory; it evaluates the ability to analyse, evaluate, and form independent judgments which is required of an administrator.',
      'An analytical approach requires examining every issue critically, identifying its strengths and weaknesses in relation to the central theme, and arriving at a balanced and well-reasoned conclusion. This is fundamentally different from many university examinations, where descriptive answers based largely on memorised material may suffice.',
      'Civil Services questions frequently contain directives such as analyse, critically examine, evaluate, comment, or discuss. These are designed to assess a candidate’s understanding of the subject and, more importantly, the ability to express an informed personal opinion rather than merely reproducing the views of established scholars.',
      'Sarathii intends to equip aspirants with the intellectual tools necessary to develop this analytical and critical style of writing.',
    ],
    bullets: {
      title: 'Decoding UPSC Directives (Analyse, Critically Examine, Evaluate, Comment, Discuss)',
      items: [
        'Assess understanding of the subject rather than memorised factual recall.',
        'Express an informed personal opinion rather than merely reproducing scholar views.',
        'Identify strengths and weaknesses in relation to the central theme.',
        'Synthesize balanced, well-reasoned conclusions required of an administrator.',
      ],
    },
    keyPoints: [
      'Examining issues critically in relation to the central theme',
      'Mastering key directives: Analyse, Critically Examine, Evaluate, Comment, Discuss',
      'Expressing an informed personal opinion rather than reproducing rote views',
      'Arriving at balanced, well-reasoned conclusions required of an administrator',
    ],
    quote: 'The examination evaluates the ability to express an informed personal opinion rather than merely reproducing the views of established scholars.',
    icon: 'Search',
  },
  {
    number: '04',
    title: 'A Strategically Planned Study Programme',
    headline: 'Proper planning is the foundation of success, where lakhs of candidates compete for a few hundred vacancies and time is the most precious resource.',
    description:
      'The objective of a sound study strategy is to achieve maximum results with the most efficient use of time and effort. This examination is not the means to become a scholar or a pandit; the only objective is to qualify.',
    paragraphs: [
      'Proper planning is the foundation of success in every sphere of life, but more so in the Civil Services Examination, wherein lakhs of candidates compete for few hundred vacancies in which time is the most precious resource.',
      'The objective of a sound study strategy is to achieve maximum results with the most efficient use of time and effort.',
      'Equally important is to understand the fact that this examination is not the means to become a scholar or a pandit. The only objective here is to qualify the examination and nothing else.',
      'Drawing upon decades of experience in the Army, the Civil Services, the higher judiciary and his own experience of preparation, Sarathii offers practical strategies that help aspirants prepare with clarity, discipline, and purpose.',
    ],
    bullets: {
      title: 'Every aspirant must know with precision:',
      items: [
        'What to study and what to consciously avoid.',
        'How to study for maximum analytical retention and recall.',
        'How much to study without falling into the scholar trap.',
        'From which authoritative, high-yield sources to study.',
      ],
    },
    keyPoints: [
      'Disciplined planning: Time management, study schedules, material selection & revision',
      'Knowing with clarity: What, How, How Much, and From Which Sources to study',
      'Shedding the scholar trap: The sole objective is qualifying the examination',
      'Practical strategies distilled from decades of military, IAS, and judicial experience',
    ],
    quote: 'This examination is not the means to become a scholar or a pandit. The only objective here is to qualify the examination and nothing else.',
    icon: 'Target',
  },
  {
    number: '05',
    title: 'Mental and Emotional Resilience',
    headline: 'Much of the perceived difficulty arises from fear, uncertainty, and lack of proper guidance. Only a calm mind wins the war.',
    description:
      'The examination is difficult for those who prepare without direction. However, for candidates who receive proper guidance and follow a systematic approach, it is one of the easiest ones.',
    paragraphs: [
      'The Civil Services Examination is widely perceived as extraordinarily difficult. It is only partly true. While it is certainly demanding, much of its perceived difficulty arises from fear, uncertainty, and lack of proper guidance.',
      'The examination is indeed difficult for those who prepare without direction. However, for candidates who receive proper guidance and follow a systematic approach, it is one of the easiest ones.',
      'A long examination cycle inevitably creates anxiety. As the examination dates approach, many candidates get overwhelmed by both real and imaginary fears. Their confidence gets shaken, concentration declines, affecting their preparation adversely. Some become real nervous in examination hall on finding unexpected questions on unfamiliar topics.',
      'These psychological challenges are common and often determine the final outcome. Sarathii helps aspirants develop the mental strength, emotional resilience, and confidence to remain calm under pressure.',
      'It has been proven umpteen times that only a calm mind wins the war. The objective is not merely to reduce stress but to transform preparation into an enjoyable, disciplined, and rewarding journey.',
    ],
    bullets: {
      title: 'Navigating Psychological Challenges',
      items: [
        'Deconstruct real and imaginary fears that erode confidence and concentration.',
        'Overcome exam-hall nervousness when facing unexpected questions on unfamiliar topics.',
        'Build emotional resilience to sustain focus through the demanding multi-year cycle.',
        'Transform preparation from an ordeal into an enjoyable, disciplined, and rewarding journey.',
      ],
    },
    keyPoints: [
      'Much perceived difficulty arises from fear, uncertainty, and lack of direction',
      'With proper guidance and a systematic approach, it becomes manageable and clear',
      'Mastering exam-hall nervousness on unfamiliar questions',
      'Cultivating the proven truth: Only a calm mind wins the war',
    ],
    quote: 'It has been proven umpteen times that only a calm mind wins the war.',
    icon: 'Sparkles',
  },
  {
    number: '06',
    title: 'Positive Thinking',
    headline: 'Positive thinking is one of the greatest assets in life. A confident mind produces confident answers.',
    description:
      'The quality of a candidate’s thinking is reflected in every stage of the examination—from preparation to answer writing and finally to the personality test.',
    paragraphs: [
      'Positive thinking is one of the greatest assets in every field of life, particularly in the Civil Services Examination.',
      'The quality of a candidate’s thinking is reflected in every stage of the examination—from preparation to answer writing and finally to the personality test.',
      'A confident mind produces confident answers. Conversely, a mind filled with uncertainty and self-doubt invariably produces confused and indecisive writing. This is where many aspirants lose the war.',
      'Sarathii helps them cultivate confidence, optimism, and a positive mindset through practical techniques and disciplined preparation, enabling them to perform to the best of their abilities under every circumstance.',
    ],
    bullets: {
      title: 'How Mindset Shapes Outcomes',
      items: [
        'A confident mind produces confident, authoritative answers on the examination page.',
        'Uncertainty and self-doubt invariably produce confused and indecisive writing.',
        'Cultivating quiet, authentic confidence that resonates in the Personality Test.',
        'Performing to the absolute best of your abilities under every circumstance.',
      ],
    },
    keyPoints: [
      'Positive thinking is reflected across preparation, answer writing, and the interview',
      'A confident mind produces confident, decisive answers on paper',
      'Eliminating the uncertainty and self-doubt where many aspirants lose the war',
      'Performing to the absolute best of your abilities under every circumstance',
    ],
    quote: 'A confident mind produces confident answers. Conversely, a mind filled with uncertainty and self-doubt invariably produces confused and indecisive writing.',
    icon: 'Sun',
  },
]

export const answerWritingTransformationSteps: AnswerWritingStep[] = [
  {
    number: '01',
    title: 'Raw Knowledge',
    subtitle: 'From Information to Understanding',
    description: 'Candidates accumulate facts, articles, and statistics. But rote recall alone leads to unstructured data dumping that fails to engage the examiner.',
    examinerImpact: 'Overwhelms the page without answering the core demand of the question.',
  },
  {
    number: '02',
    title: 'Structured Thinking',
    subtitle: 'Architectural Framing',
    description: 'Deconstruct the exact directive (Discuss, Critically Analyse, Evaluate). Frame the answer into clear thematic pillars and sub-dimensions.',
    examinerImpact: 'Signals immediate cognitive discipline and logical organization.',
  },
  {
    number: '03',
    title: 'Clear Argument',
    subtitle: 'Coherent Sequential Logic',
    description: 'Present ideas in seamless inductive and deductive sequences. Eliminate semantic fluff and redundant filler words.',
    examinerImpact: 'Allows the examiner to absorb your reasoning in seconds with zero friction.',
  },
  {
    number: '04',
    title: 'Balanced Analysis',
    subtitle: 'Judicial Neutrality & Trade-offs',
    description: 'Weigh multi-stakeholder impacts, fiscal constraints, and constitutional morality with the scrupulous balance of a judge.',
    examinerImpact: 'Demonstrates executive maturity and balanced administrative temper.',
  },
  {
    number: '05',
    title: 'Precise Answer',
    subtitle: 'Actionable Governance Conclusion',
    description: 'Conclude with a forward-looking, constitutionally anchored policy solution that reflects visionary public leadership.',
    examinerImpact: 'Secures top-bracket marks and leaves a lasting impression of officer readiness.',
  },
]

export const sarathiiMethodSteps: MethodStep[] = [
  {
    step: '01',
    name: 'Assess',
    tagline: 'Understand Capabilities & Gaps',
    description: 'A comprehensive diagnostic evaluation of your current knowledge base, answer-writing maturity, analytical reasoning, and psychological readiness.',
    objective: 'Understand current strengths, weaknesses, blind spots, and preparation gaps.',
    action: 'Diagnostic baseline evaluation of answers, reading habits, and optional subject alignment.',
    mindset: 'Radical intellectual honesty and curiosity for improvement.',
    outcome: 'A clear baseline assessment matrix mapping exact areas for breakthrough.',
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
    objective: 'Build a realistic, high-yield roadmap eliminating source hoarding and low-ROI materials.',
    action: 'Micro and macro milestone mapping across Prelims, Mains, and Essay syllabi.',
    mindset: 'Strategic focus — courageously deciding what NOT to study.',
    outcome: 'A calibrated month-by-month execution blueprint designed for your timeline.',
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
    objective: 'Execute consistently with military precision and sustained daily rhythm.',
    action: 'Structured daily writing, thematic note distillation, and weekly milestone check-ins.',
    mindset: 'Process fidelity over result anxiety.',
    outcome: 'Deep syllabus mastery transformed into structured, high-retention memory.',
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
    objective: 'Identify micro-weaknesses and polish expression to top-bracket standards.',
    action: 'Line-by-line answer structural critique, speed optimization, and mock stress tests.',
    mindset: 'Constructive receptivity to critique; relentless pursuit of precision.',
    outcome: 'Crisp, structured, and luminous answers produced effortlessly under timed conditions.',
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
    objective: 'Perform with calm confidence, executive authority, and clarity.',
    action: 'Final peak simulation, personality test anchoring, and strategic revision.',
    mindset: 'Stoic equanimity rooted in purposeful public service.',
    outcome: 'Examination success and seamless transition into responsible administrative leadership.',
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
