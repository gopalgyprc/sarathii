export interface BookChapter {
  number: string
  hindiTitle: string
  englishTitle: string
  description: string
}

export interface BookDetail {
  id: string
  hindiTitle: string
  englishTitle: string
  hindiSubtitle: string
  englishSubtitle: string
  authorHindi: string
  authorEnglish: string
  coverImage: string
  summary: string
  extendedSummary: string[]
  prastavanaHindi: string[]
  prastavanaEnglishReflection: string[]
  themes: {
    title: string
    description: string
    relevanceToAspirants: string
  }[]
  chapters: BookChapter[]
  quotes: string[]
}

export const featuredBook: BookDetail = {
  id: 'jin-rahon-par-siyaram-chale',
  hindiTitle: 'जिन राहों पर सियाराम चले',
  englishTitle: 'Jin Rahon Par Siyaram Chale',
  hindiSubtitle: 'वन में और जीवन में',
  englishSubtitle: 'In the Forest and in Life',
  authorHindi: 'जे. पी. सिंह',
  authorEnglish: 'J. P. Singh (Former IAS, Defence & Judicial Member)',
  coverImage: '/images/book-siyaram-cover.jpg',
  summary:
    'A profound civilizational treatise that explores the exile of Shri Ram and Sita not merely as a mythological narrative, but as an eternal blueprint for ethical leadership, steadfast composure during crises, and purposeful living.',
  extendedSummary: [
    'Written by Jay Prakash Singh after decades of frontline administrative, military, and judicial service, this monumental work decodes the lessons embedded in the 14-year journey of Maryada Purushottam Ram.',
    'Moving beyond ritualistic veneration, the book examines the forest (Van) as an active crucible of character. It explores how exile, deprivation, and unpredictable terrain forge the inner fortitude, diplomatic wisdom, and moral clarity required of true leaders.',
    'For civil servants, competitive exam aspirants, and reflective individuals, the book serves as a timeless guide to navigating the trials of modern life and public duty with unyielding dignity and balance.',
  ],
  prastavanaHindi: [
    'भारतीय वाङ्मय में श्रीराम का चरित्र केवल एक युग का इतिहास नहीं, अपितु मानवीय चेतना के उत्कर्ष की अमर गाथा है। वनगमन कोई दण्ड नहीं था, वह तो एक सार्वभौमिक प्रशिक्षण था—जिसमें राजवैभव के स्थान पर धूल, कंटक और संघर्ष को अंगीकार कर मर्यादा का सर्वोच्च प्रतिमान स्थापित किया गया।',
    'जब जीवन में अचानक अनपेक्षित संकट आ पड़ें, जब राजमुकुट के स्थान पर वल्कल वस्त्र धारण करने की विवशता आ जाए, तब व्यक्ति का अंतःकरण ही उसका एकमात्र सच्चा पथप्रदर्शक बनता है। इस पुस्तक का उद्देश्य उस अंतःकरण के आलोक को पुनः जागृत करना है।',
    'यह ग्रंथ केवल अतीत का स्मरण नहीं है; यह वर्तमान के प्रत्येक उस पथिक के लिए एक सम्बल है जो अपने जीवन के बीहड़ों में धर्म, धैर्य और कर्तव्य के संधान में जुटा है।',
  ],
  prastavanaEnglishReflection: [
    'In the grand tapestry of Indian civilization, the path traversed by Shri Ram is not merely a chronicle of an era—it is an eternal treatise on the highest elevation of human consciousness. The journey into the forest was not an imposition of exile; it was a sublime preparation where luxury was surrendered to embrace hardship, discipline, and uncompromising virtue.',
    'When unanticipated crises disrupt the course of life, when sovereign comfort is replaced by demanding adversity, one’s inner moral compass becomes the sole authentic charioteer. This book is dedicated to rekindling that profound inner light.',
    'It is a companion for every modern seeker striving to uphold ethics, patience, and resolute purpose amidst the turbulent wilderness of contemporary challenges.',
  ],
  themes: [
    {
      title: 'Maryada & Unyielding Duty',
      description: 'The conscious choice to uphold ethical principles especially when compromise offers an easier alternative.',
      relevanceToAspirants: 'Essential for GS-4 Ethics, administrative integrity, and steadfast decision-making.',
    },
    {
      title: 'The Crucible of Adversity (Vanvaas as Training)',
      description: 'Viewing personal struggle and prolonged uncertainty not as suffering, but as essential conditioning for future leadership.',
      relevanceToAspirants: 'A transformative mindset shift for enduring the demanding UPSC preparation cycle.',
    },
    {
      title: 'Diplomatic & Ecological Stewardship',
      description: 'Building authentic, egalitarian alliances across diverse communities, forests, and landscapes.',
      relevanceToAspirants: 'Insights into inclusive public policy, social cohesion, and administrative empathy.',
    },
    {
      title: 'Equanimity (Samatvam)',
      description: 'Maintaining serene emotional balance both when ascending the throne and when walking into the wilderness.',
      relevanceToAspirants: 'The definitive antidote to exam anxiety, burnout, and psychological turbulence.',
    },
  ],
  chapters: [
    {
      number: '01',
      hindiTitle: 'अयोध्या का त्याग और संकल्प',
      englishTitle: 'The Renunciation of Ayodhya & The Sacred Resolve',
      description: 'Transitioning from royal comfort to the uncompromising path of duty without rancour or hesitation.',
    },
    {
      number: '02',
      hindiTitle: 'गंगा पार और ऋषि-आश्रमों का पाथेय',
      englishTitle: 'Crossing the Ganga & The Counsel of Hermitages',
      description: 'Seeking wisdom from master scholars and aligning oneself with nature and spiritual equilibrium.',
    },
    {
      number: '03',
      hindiTitle: 'चित्रकूट की पावन छांव',
      englishTitle: 'The Serene Solace of Chitrakoot',
      description: 'The art of peaceful contemplation, familial duty, and intellectual anchoring before great trials.',
    },
    {
      number: '04',
      hindiTitle: 'दंडकारण्य का बीहड़ और संकल्प की परीक्षा',
      englishTitle: 'The Wilderness of Dandakaranya & The Test of Fortitude',
      description: 'Navigating perilous territories, protecting the vulnerable, and establishing order in chaos.',
    },
    {
      number: '05',
      hindiTitle: 'किष्किंधा में सेतु-निर्माण और जन-संवाद',
      englishTitle: 'Alliances in Kishkindha & Bridging Diverse Worlds',
      description: 'Collaborative leadership, empathetic alliances, and uniting fragmented strengths toward a singular mission.',
    },
    {
      number: '06',
      hindiTitle: 'धर्म-विजय और जीवन का अमर संदेश',
      englishTitle: 'The Triumph of Righteousness & The Eternal Message',
      description: 'The return to governance imbued with the wisdom of the forest—ruling with detachment and service.',
    },
  ],
  quotes: [
    '“संकट के समय मन का संतुलन ही मनुष्य का सबसे बड़ा अस्त्र होता है।”',
    '“The forest does not weaken the determined; it burns away all that is superficial to leave behind pure gold.”',
    '“मर्यादा शब्दों में नहीं, आचरण की शुचिता में प्रकट होती है।”',
  ],
}
