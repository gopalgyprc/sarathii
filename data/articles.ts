export interface Article {
  slug: string
  title: string
  subtitle: string
  category: 'Mindset' | 'Leadership' | 'Preparation' | 'Ethics'
  author: string
  authorRole: string
  date: string
  formattedDate: string
  readTime: string
  image: string
  excerpt: string
  content: {
    intro: string
    sections: {
      heading: string
      paragraphs: string[]
      callout?: string
    }[]
    conclusion: string
    takeaways: string[]
  }
}

export const articles: Article[] = [
  {
    slug: 'mental-resilience-exam-success',
    title: 'Mental Resilience: The Hidden Key to Exam Success',
    subtitle: 'Why psychological fortitude and emotional steadiness matter more than rote knowledge in high-stakes examinations.',
    category: 'Mindset',
    author: 'Jay Prakash Singh',
    authorRole: 'Founder & Chief Mentor, Sarathii',
    date: '2026-02-14',
    formattedDate: 'February 14, 2026',
    readTime: '6 min read',
    image: '/images/insight-resilience.jpg',
    excerpt:
      'Resilience is not the absence of pressure. It is the presence of a steady, unwavering mind when pressure arrives. Learn how psychological fortitude transforms exam outcomes.',
    content: {
      intro:
        'In the competitive arena of the Civil Services Examination, thousands of brilliant candidates memorize identical standard textbooks, solve identical test series, and consume identical current affairs notes. Yet, when the results are announced, only a fraction cross the threshold. What separates those who prevail from those who falter is rarely intellectual capacity—it is almost invariably emotional equanimity and psychological resilience.',
      sections: [
        {
          heading: 'The Anatomy of Examination Anxiety',
          paragraphs: [
            'The human brain under severe anxiety shifts into survival mode, narrowing cognitive breadth and impairing working memory. When an aspirant faces an unconventional question in General Studies or an unexpected Essay topic, panic triggers cognitive freeze.',
            'A resilient mind, by contrast, interprets unpredictability not as an existential threat, but as a neutral problem-solving exercise. This psychological buffer allows for rapid analytical synthesis, structured articulation, and calm recall under the ticking examination clock.',
          ],
          callout: 'A calm mind wins the war. Under pressure, you do not rise to your expectations; you sink to the depth of your composure.',
        },
        {
          heading: 'Building the Stoic Buffer',
          paragraphs: [
            'Resilience is not an innate genetic trait; it is a systematic muscle cultivated through deliberate daily protocols. At Sarathii, we instruct aspirants to detach the value of their self-worth from daily mock test fluctuations.',
            'By adopting a process-oriented discipline rather than an outcome-obsessed fixation, the daily 8–10 hours of study shift from a grueling chore to an inspiring act of self-mastery.',
          ],
        },
        {
          heading: 'Handling the Long Preparation Cycle',
          paragraphs: [
            'The UPSC journey spans 18 to 24 months from preliminary preparation to the final interview. Plateaus, fatigue, and self-doubt are inevitable milestones along this path.',
            'Those who succeed treat fatigue as a signal to rest and recalibrate, rather than an excuse to despair. By maintaining physical vigor, structured sleep, and purposeful contemplation, resilience becomes an effortless second nature.',
          ],
        },
      ],
      conclusion:
        'As you prepare for the defining examinations of your life, remember that the examiner is not just testing what you know. They are testing who you are when the stakes are highest. Cultivate the steady mind of a charioteer, and let your calm lead the way.',
      takeaways: [
        'Shift focus from result anxiety to relentless process fidelity.',
        'View unexpected questions as opportunities for analytical distinction.',
        'Protect cognitive stamina through disciplined sleep and physical health.',
        'Develop an inner sanctuary of quiet self-belief rooted in service.',
      ],
    },
  },
  {
    slug: 'leadership-mindset-aspirants',
    title: 'The Leadership Mindset Every Competitive Exam Aspirant Must Develop',
    subtitle: 'Transitioning from the narrow perspective of a student to the strategic vision of an administrative leader.',
    category: 'Leadership',
    author: 'Jay Prakash Singh',
    authorRole: 'Founder & Chief Mentor, Sarathii',
    date: '2026-02-08',
    formattedDate: 'February 8, 2026',
    readTime: '8 min read',
    image: '/images/insight-leadership.jpg',
    excerpt:
      'Leadership is forged in quiet moments long before titles appear. Discover how adopting an administrative posture elevates your answer writing and interview presence.',
    content: {
      intro:
        'Many candidates approach the UPSC syllabus as students trying to impress a school teacher. They dump data points, quote random statistics, and reproduce memorized slogans. But the Union Public Service Commission is not looking for students; it is seeking future District Magistrates, Ambassadors, Police Chiefs, and Policy Architects.',
      sections: [
        {
          heading: 'Thinking from the Chair of Governance',
          paragraphs: [
            'When evaluating policy issues such as agricultural subsidies, data sovereignty, or regional geopolitical tensions, a student lists polarized pros and cons. An administrator, however, analyzes structural trade-offs, fiscal feasibility, administrative bandwidth, and constitutional morality.',
            'Adopting this mental posture transforms your answers from juvenile critiques into mature, actionable policy memorandums that instantly command top-bracket marks.',
          ],
          callout: 'An administrator does not merely complain about institutional bottlenecks; they design the mechanisms to resolve them.',
        },
        {
          heading: 'The 4 Dimensions of Administrative Acumen',
          paragraphs: [
            'Throughout my decades in the Indian Administrative Service, the Armed Forces, and the Judiciary, four core traits defined every truly exceptional officer: the strategic discipline of a soldier, the pragmatic vision of an administrator, the impartial balance of a judge, and the empathetic sensitivity of a writer.',
            'When these four dimensions harmonise, your writing attains a rare luminescence of balanced authority and compassionate realism.',
          ],
        },
        {
          heading: 'The Personality Test: Authenticity Over Artifice',
          paragraphs: [
            'In the UPSC Interview room, rehearsed artificial answers crumble within minutes under probing cross-examination. The board evaluates your humility, intellectual honesty, moral courage, and decisiveness.',
            'A candidate who has spent two years living with a true leadership mindset speaks with a quiet, grounded confidence that cannot be faked.',
          ],
        },
      ],
      conclusion:
        'Do not wait until the appointment letter arrives to begin acting like an officer. Start today in the silence of your study room: in how you structure your notes, how you honor your schedule, and how you think about our nation.',
      takeaways: [
        'Write answers as actionable policy frameworks rather than passive academic essays.',
        'Balance ideological ideals with fiscal and administrative realities.',
        'Cultivate constitutional morality and natural empathy for the marginalized.',
        'Embrace intellectual humility—admit gaps with grace and clarity.',
      ],
    },
  },
  {
    slug: 'strategic-preparation-study-smart',
    title: 'Strategic Preparation: Study Smart, Lead Strong',
    subtitle: 'A high-yield blueprint for cutting through syllabus bloat and mastering UPSC answer writing.',
    category: 'Preparation',
    author: 'Jay Prakash Singh',
    authorRole: 'Founder & Chief Mentor, Sarathii',
    date: '2026-01-29',
    formattedDate: 'January 29, 2026',
    readTime: '7 min read',
    image: '/images/insight-strategy.jpg',
    excerpt:
      'A focused plan turns scattered effort into unstoppable momentum. Learn the three golden principles of high-yield source curation and precision answer writing.',
    content: {
      intro:
        'The greatest illusion in Civil Services preparation is equating the number of books read with the likelihood of success. The syllabus is vast, and the ocean of available coaching material is infinite. Without rigorous strategic boundaries, preparation easily deteriorates into passive, exhausting consumption.',
      sections: [
        {
          heading: 'The Rule of Minimal Sources, Maximal Revisions',
          paragraphs: [
            'Mastery of one definitive source revised five times yields exponentially higher examination marks than reading five different sources once. In the examination hall, only deeply consolidated memory pathways can be rapidly accessed under time pressure.',
            'Choose your core texts with extreme scrutiny, and then defend your boundaries against the fear of missing out (FOMO).',
          ],
          callout: 'True strategy is not deciding what to do; it is courageously deciding what NOT to do.',
        },
        {
          heading: 'The Daily Answer-Writing Architecture',
          paragraphs: [
            'Answer writing is not a post-syllabus activity; it is the primary engine of syllabus absorption. Writing forces you to identify logical gaps, refine syntactic clarity, and internalize high-impact headings.',
            'A standard high-scoring answer follows a clean architecture: a 2-line conceptual definition or context, 3 to 4 analytical sub-dimensions with clear micro-headings, relevant constitutional articles or committee data, and a forward-looking administrative conclusion.',
          ],
        },
        {
          heading: 'Synchronized Prelims-cum-Mains Integration',
          paragraphs: [
            'Studying for Prelims and Mains in isolated silos is a fatal strategic error. Facts memorized without thematic context are quickly forgotten; thematic concepts studied without precise factual grounding fail Prelims cut-offs.',
            'Integrate your workflow so that every topic studied is simultaneously framed as both an objective MCQs matrix and an analytical 250-word policy question.',
          ],
        },
      ],
      conclusion:
        'Excellence in competitive exams is not a product of frantic luck, but of cold, calculated, disciplined strategy. Measure your days not by hours spent in a chair, but by the clarity of thoughts synthesized and answers mastered.',
      takeaways: [
        'Limit study material to trusted high-yield primary sources.',
        'Adopt cyclical revisions: 24 hours, 7 days, and 30 days.',
        'Make daily answer writing non-negotiable from month one.',
        'Integrate Prelims factual rigor with Mains analytical depth.',
      ],
    },
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getRelatedArticles(currentSlug: string): Article[] {
  return articles.filter((a) => a.slug !== currentSlug)
}
