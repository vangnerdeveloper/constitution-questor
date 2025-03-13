
import { BookOpen, Shield, GraduationCap, Landmark, Scale, Vote, Users, History } from 'lucide-react';

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  difficulty: 'easy' | 'medium' | 'hard';
  locked: boolean;
  progress: number;
}

export interface Quiz {
  id: string;
  categoryId: string;
  questions: Array<{
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }>;
}

export const categories: Category[] = [
  {
    id: 'fundamental-rights',
    title: 'Fundamental Rights',
    description: 'Learn about the rights that are guaranteed to all citizens of India.',
    icon: Shield,
    color: 'constitution-blue',
    difficulty: 'easy',
    locked: false,
    progress: 0,
  },
  {
    id: 'directive-principles',
    title: 'Directive Principles',
    description: 'Understand the guidelines for governance of the country.',
    icon: Landmark,
    color: 'constitution-amber',
    difficulty: 'medium',
    locked: false,
    progress: 0,
  },
  {
    id: 'constitutional-bodies',
    title: 'Constitutional Bodies',
    description: 'Explore the various bodies established by the Constitution.',
    icon: Users,
    color: 'constitution-green',
    difficulty: 'medium',
    locked: false,
    progress: 0,
  },
  {
    id: 'history',
    title: 'Constitutional History',
    description: 'Discover the origins and evolution of the Indian Constitution.',
    icon: History,
    color: 'constitution-navy',
    difficulty: 'easy',
    locked: false,
    progress: 0,
  },
  {
    id: 'judiciary',
    title: 'Judiciary System',
    description: 'Learn about the judicial system established by the Constitution.',
    icon: Scale,
    color: 'constitution-orange',
    difficulty: 'hard',
    locked: true,
    progress: 0,
  },
  {
    id: 'amendments',
    title: 'Constitutional Amendments',
    description: 'Study the important amendments made to the Constitution.',
    icon: BookOpen,
    color: 'constitution-red',
    difficulty: 'hard',
    locked: true,
    progress: 0,
  },
];

export const quizzes: Quiz[] = [
  {
    id: 'fundamental-rights-quiz',
    categoryId: 'fundamental-rights',
    questions: [
      {
        id: 'fr-q1',
        question: 'Which article of the Indian Constitution abolishes untouchability?',
        options: ['Article 14', 'Article 15', 'Article 17', 'Article 21'],
        correctAnswer: 2,
        explanation: 'Article 17 of the Indian Constitution abolishes untouchability and forbids its practice in any form.'
      },
      {
        id: 'fr-q2',
        question: 'Right to Education is a Fundamental Right under which Article?',
        options: ['Article 21', 'Article 21A', 'Article 29', 'Article 30'],
        correctAnswer: 1,
        explanation: 'Right to Education for children between 6-14 years is a Fundamental Right under Article 21A, added by the 86th Constitutional Amendment Act, 2002.'
      },
      {
        id: 'fr-q3',
        question: 'Which Fundamental Right is available only to citizens and not to foreigners?',
        options: [
          'Right to Equality',
          'Right to Freedom of Religion',
          'Right to Freedom of Speech',
          'Right against Exploitation'
        ],
        correctAnswer: 2,
        explanation: 'Right to Freedom of Speech and Expression under Article 19 is available only to citizens of India and not to foreigners.'
      },
      {
        id: 'fr-q4',
        question: 'Which of the following is NOT a Fundamental Right?',
        options: [
          'Right to Property',
          'Right to Education',
          'Right to Constitutional Remedies',
          'Right against Exploitation'
        ],
        correctAnswer: 0,
        explanation: 'Right to Property was originally a Fundamental Right but was removed by the 44th Amendment Act, 1978. It is now a legal right under Article 300A.'
      },
      {
        id: 'fr-q5',
        question: 'Under which Article, the Right to Constitutional Remedies is guaranteed?',
        options: ['Article 30', 'Article 31', 'Article 32', 'Article 33'],
        correctAnswer: 2,
        explanation: 'Article 32 guarantees the Right to Constitutional Remedies, which allows citizens to move the Supreme Court for enforcement of Fundamental Rights.'
      }
    ]
  },
  {
    id: 'directive-principles-quiz',
    categoryId: 'directive-principles',
    questions: [
      {
        id: 'dp-q1',
        question: 'Which part of the Indian Constitution contains the Directive Principles of State Policy?',
        options: ['Part III', 'Part IV', 'Part IVA', 'Part V'],
        correctAnswer: 1,
        explanation: 'The Directive Principles of State Policy are contained in Part IV (Articles 36-51) of the Indian Constitution.'
      },
      {
        id: 'dp-q2',
        question: 'Directive Principles of State Policy are:',
        options: [
          'Legally enforceable',
          'Not enforceable by any court',
          'Enforceable only by the Supreme Court',
          'Enforceable only in certain conditions'
        ],
        correctAnswer: 1,
        explanation: 'As per Article 37, Directive Principles are not enforceable by any court, but they are fundamental in the governance of the country.'
      },
      {
        id: 'dp-q3',
        question: 'Which of the following is NOT a Directive Principle of State Policy?',
        options: [
          'Promotion of cottage industries',
          'Uniform civil code for citizens',
          'Protection of monuments',
          'Freedom of speech and expression'
        ],
        correctAnswer: 3,
        explanation: 'Freedom of speech and expression is a Fundamental Right under Article 19, not a Directive Principle.'
      },
      {
        id: 'dp-q4',
        question: 'The concept of Welfare State in the Indian Constitution is provided in:',
        options: [
          'Fundamental Rights',
          'Directive Principles of State Policy',
          'Fundamental Duties',
          'Preamble'
        ],
        correctAnswer: 1,
        explanation: 'The concept of Welfare State is embodied in the Directive Principles of State Policy which aim at social and economic justice.'
      },
      {
        id: 'dp-q5',
        question: 'Which Article directs the state to provide free and compulsory education to all children up to the age of 14 years?',
        options: ['Article 39', 'Article 42', 'Article 45', 'Article 48'],
        correctAnswer: 2,
        explanation: 'Article 45 originally directed the state to provide free and compulsory education. After the 86th Amendment, it now applies to early childhood care and education for children below 6 years.'
      }
    ]
  },
  {
    id: 'history-quiz',
    categoryId: 'history',
    questions: [
      {
        id: 'hist-q1',
        question: 'When was the Constitution of India adopted by the Constituent Assembly?',
        options: [
          '26 November 1949',
          '26 January 1950',
          '15 August 1947',
          '30 January 1948'
        ],
        correctAnswer: 0,
        explanation: 'The Constitution of India was adopted by the Constituent Assembly on 26 November 1949, which is celebrated as Constitution Day.'
      },
      {
        id: 'hist-q2',
        question: 'Who was the Chairman of the Drafting Committee of the Indian Constitution?',
        options: [
          'Jawaharlal Nehru',
          'Rajendra Prasad',
          'B.R. Ambedkar',
          'Sardar Vallabhbhai Patel'
        ],
        correctAnswer: 2,
        explanation: 'Dr. B.R. Ambedkar was the Chairman of the Drafting Committee of the Indian Constitution and is often referred to as the chief architect of the Indian Constitution.'
      },
      {
        id: 'hist-q3',
        question: 'How long did it take to complete the Indian Constitution?',
        options: [
          '1 year and 11 months',
          '2 years and 11 months',
          '3 years and 11 months',
          '4 years and 11 months'
        ],
        correctAnswer: 1,
        explanation: 'It took 2 years, 11 months and 17 days to complete the Indian Constitution. The first session of the Constituent Assembly was held on 9 December 1946, and the Constitution was adopted on 26 November 1949.'
      },
      {
        id: 'hist-q4',
        question: 'Which country\'s constitution has influenced the Indian Constitution the most?',
        options: [
          'United Kingdom',
          'United States',
          'Canada',
          'Ireland'
        ],
        correctAnswer: 0,
        explanation: 'The United Kingdom\'s constitution has influenced the Indian Constitution the most, especially the parliamentary form of government, rule of law, legislative procedure, and cabinet system.'
      },
      {
        id: 'hist-q5',
        question: 'When did the Indian Constitution come into effect?',
        options: [
          '15 August 1947',
          '26 November 1949',
          '26 January 1950',
          '30 January 1950'
        ],
        correctAnswer: 2,
        explanation: 'The Indian Constitution came into effect on 26 January 1950, which is celebrated as Republic Day in India.'
      }
    ]
  }
];

export const articles = [
  {
    id: 'article-14',
    title: 'Article 14 - Equality Before Law',
    content: `The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.

This article embodies the general principle of equality before law and equal protection of laws. It means that every person, whether citizen or foreigner, has the same status before law.

Key aspects:
- Prohibits class legislation but permits reasonable classification
- Applies to both natural persons and artificial persons like corporations
- Binding on all three organs of the state - legislature, executive, and judiciary

The Supreme Court has held that Article 14 strikes at arbitrariness in state action and ensures fairness and equality of treatment. The principle of "equality before law" is borrowed from British Common Law, while "equal protection of laws" is taken from the American Constitution.

In E.P. Royappa v. State of Tamil Nadu (1974), the Supreme Court held that Article 14 is a guarantee against arbitrariness. Any arbitrary action by the state violates Article 14.`,
    category: 'fundamental-rights',
    readTime: 4,
    importantCase: 'E.P. Royappa v. State of Tamil Nadu (1974)'
  },
  {
    id: 'article-21',
    title: 'Article 21 - Protection of Life and Personal Liberty',
    content: `No person shall be deprived of his life or personal liberty except according to procedure established by law.

This article guarantees the right to life and personal liberty to all persons, not just citizens. The Supreme Court has expanded the scope of this article through various judgments.

Key aspects:
- Right to life includes right to live with human dignity
- Includes right to privacy, right to health, right to clean environment
- Due process must be followed before deprivation of life or liberty
- One of the most dynamic and evolving provisions of the Constitution

In Maneka Gandhi v. Union of India (1978), the Supreme Court held that the procedure established by law under Article 21 must be fair, just and reasonable, not arbitrary, fanciful or oppressive.

In K.S. Puttaswamy v. Union of India (2017), the Supreme Court recognized privacy as a fundamental right under Article 21. This judgment has had far-reaching implications for digital privacy rights, data protection, and state surveillance.

The right to health and access to medical treatment has also been recognized as a part of Article 21 in Paschim Banga Khet Mazdoor Samity v. State of West Bengal (1996).`,
    category: 'fundamental-rights',
    readTime: 6,
    importantCase: 'Maneka Gandhi v. Union of India (1978)'
  },
  {
    id: 'article-32',
    title: 'Article 32 - Right to Constitutional Remedies',
    content: `The right to move the Supreme Court by appropriate proceedings for the enforcement of the rights conferred by this Part is guaranteed.

This article provides for the enforcement of Fundamental Rights. Dr. B.R. Ambedkar called it "the heart and soul of the Constitution."

Key aspects:
- Provides for five writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo Warranto
- Cannot be suspended except during emergency
- Supreme Court has original jurisdiction in matters related to Fundamental Rights
- This right itself is a Fundamental Right

Habeas Corpus is a writ to produce a person who has been detained, whether in prison or in private custody, before a court and to release him if such detention is found illegal.

Mandamus is a command issued by court to a public official asking him to perform his official duties that he has failed or refused to perform.

The Supreme Court in L. Chandra Kumar v. Union of India (1997) held that the power of judicial review under Article 32 is a part of the basic structure of the Constitution and cannot be abrogated even by a constitutional amendment.`,
    category: 'fundamental-rights',
    readTime: 5,
    importantCase: 'L. Chandra Kumar v. Union of India (1997)'
  },
  {
    id: 'article-15',
    title: 'Article 15 - Prohibition of Discrimination',
    content: `The State shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them.

This article prohibits discrimination on specific grounds and permits the state to make special provisions for women, children, socially and educationally backward classes, Scheduled Castes, and Scheduled Tribes.

Key aspects:
- Applies only to citizens, not foreigners
- Prohibits discrimination by the state on specified grounds
- Allows reservation and special provisions for disadvantaged groups
- Prohibits discrimination in access to public places and use of public resources

The Constitution (103rd Amendment) Act, 2019 added clause (6) to Article 15, which enables the state to make special provisions for economically weaker sections (EWS) of citizens other than those mentioned in clauses (4) and (5).

In Naz Foundation v. Govt. of NCT of Delhi (2009), the Delhi High Court interpreted Article 15 to include discrimination on the basis of sexual orientation. This interpretation was furthered in the landmark Navtej Singh Johar v. Union of India (2018) judgment where the Supreme Court decriminalized consensual homosexual acts.`,
    category: 'fundamental-rights',
    readTime: 5,
    importantCase: 'Navtej Singh Johar v. Union of India (2018)'
  },
  {
    id: 'article-19',
    title: 'Article 19 - Protection of Certain Rights Regarding Freedom of Speech',
    content: `All citizens shall have the right—
(a) to freedom of speech and expression;
(b) to assemble peaceably and without arms;
(c) to form associations or unions;
(d) to move freely throughout the territory of India;
(e) to reside and settle in any part of the territory of India;
(g) to practise any profession, or to carry on any occupation, trade or business.

This article guarantees six fundamental freedoms to all citizens of India. These freedoms are considered essential for the personal liberty of citizens.

Key aspects:
- Freedom of speech and expression includes freedom of press
- These rights are not absolute and are subject to reasonable restrictions
- The State can impose restrictions in the interests of sovereignty, integrity, security, foreign relations, public order, decency, morality, contempt of court, defamation, and incitement to an offense
- Article 19(1)(f) which guaranteed the right to property was deleted by the 44th Amendment Act, 1978

In Shreya Singhal v. Union of India (2015), the Supreme Court struck down Section 66A of the Information Technology Act, holding that it violated the freedom of speech guaranteed under Article 19(1)(a) of the Constitution.

The freedom of press is not explicitly mentioned in Article 19 but has been included in the freedom of speech and expression as established in Romesh Thappar v. State of Madras (1950).`,
    category: 'fundamental-rights',
    readTime: 6,
    importantCase: 'Shreya Singhal v. Union of India (2015)'
  },
  {
    id: 'article-39',
    title: 'Article 39 - Certain Principles of Policy to be Followed by the State',
    content: `The State shall, in particular, direct its policy towards securing—
(a) that the citizens, men and women equally, have the right to an adequate means of livelihood;
(b) that the ownership and control of the material resources of the community are so distributed as best to subserve the common good;
(c) that the operation of the economic system does not result in the concentration of wealth and means of production to the common detriment;
(d) that there is equal pay for equal work for both men and women;
(e) that the health and strength of workers, men and women, and the tender age of children are not abused and that citizens are not forced by economic necessity to enter avocations unsuited to their age or strength;
(f) that children are given opportunities and facilities to develop in a healthy manner and in conditions of freedom and dignity and that childhood and youth are protected against exploitation and against moral and material abandonment.

This article contains some of the most important Directive Principles that guide the state to secure social and economic justice.

Key aspects:
- Aims to establish an egalitarian society and welfare state
- Principle of equal pay for equal work has been elevated to the status of a fundamental right in some cases
- Protection of children from exploitation is a key focus
- These principles form the basis of many labor laws and social welfare schemes

The Supreme Court in Randhir Singh v. Union of India (1982) elevated the principle of 'equal pay for equal work' to the status of a fundamental right by reading it with Article 14 and 16.

In Bandhua Mukti Morcha v. Union of India (1984), the Supreme Court used Article 39(e) and (f) to issue guidelines for the abolition of bonded labor and child labor.`,
    category: 'directive-principles',
    readTime: 5,
    importantCase: 'Randhir Singh v. Union of India (1982)'
  },
  {
    id: 'article-51',
    title: 'Article 51 - Promotion of International Peace and Security',
    content: `The State shall endeavour to—
(a) promote international peace and security;
(b) maintain just and honourable relations between nations;
(c) foster respect for international law and treaty obligations in the dealings of organised peoples with one another; and
(d) encourage settlement of international disputes by arbitration.

This article guides India's foreign policy and international relations. It reflects India's commitment to peaceful coexistence and international cooperation.

Key aspects:
- Embodies the principles of Panchsheel and non-alignment
- Emphasizes peaceful dispute resolution through arbitration
- Promotes respect for international law and treaty obligations
- Forms the basis of India's participation in international organizations like the UN

India's policy of non-alignment during the Cold War was guided by this article. Jawaharlal Nehru, India's first Prime Minister, was instrumental in formulating this policy.

In Vishaka v. State of Rajasthan (1997), the Supreme Court relied on international conventions and Article 51 to formulate guidelines on sexual harassment in the workplace, which were later codified into the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.`,
    category: 'directive-principles',
    readTime: 4,
    importantCase: 'Vishaka v. State of Rajasthan (1997)'
  },
  {
    id: 'article-370',
    title: 'Article 370 - Temporary Provisions with respect to Jammu and Kashmir',
    content: `Article 370 was a "temporary provision" that granted special autonomous status to Jammu and Kashmir. It was introduced to facilitate the accession of Jammu and Kashmir to the Indian Union in 1947.

Key aspects:
- Limited the Parliament's power to make laws for Jammu and Kashmir to matters in the Union and Concurrent Lists
- Required the concurrence of the state government for applying other constitutional provisions
- Allowed Jammu and Kashmir to have its own constitution
- Provided for a separate flag and head of state called Sadar-i-Riyasat

On August 5, 2019, the President of India issued a constitutional order superseding the 1954 order, making all provisions of the Indian Constitution applicable to Jammu and Kashmir.

Subsequently, the Parliament passed the Jammu and Kashmir Reorganisation Act, 2019, which dissolved the state and reorganized it into two union territories – Jammu and Kashmir and Ladakh, effective from October 31, 2019.

In 2023, the Supreme Court of India upheld the abrogation of Article 370 and affirmed that J&K does not retain an element of sovereignty after joining the Indian Union.`,
    category: 'history',
    readTime: 7,
    importantCase: 'State Bank of India v. Santosh Gupta (2016)'
  },
  {
    id: 'preamble',
    title: 'The Preamble - Soul of the Indian Constitution',
    content: `WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC and to secure to all its citizens:
JUSTICE, social, economic and political;
LIBERTY of thought, expression, belief, faith and worship;
EQUALITY of status and of opportunity;
and to promote among them all
FRATERNITY assuring the dignity of the individual and the unity and integrity of the Nation;
IN OUR CONSTITUENT ASSEMBLY this twenty-sixth day of November, 1949, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION.

The Preamble is considered to be the key to understanding the Constitution. It embodies the basic philosophy and fundamental values on which the Constitution is based.

Key aspects:
- The terms 'Socialist', 'Secular', and 'integrity' were added by the 42nd Amendment Act, 1976
- It declares India to be a sovereign, socialist, secular, democratic republic
- It secures justice, liberty, equality, and fraternity for all citizens
- The date mentioned in the Preamble is November 26, 1949, when the Constitution was adopted

In Kesavananda Bharati v. State of Kerala (1973), the Supreme Court held that the Preamble is a part of the Constitution and it can be amended, but the basic structure of the Constitution cannot be altered.

The Preamble begins with the words "We, the People of India" which indicates that the Constitution derives its authority from the people of India, not from any king or parliament.`,
    category: 'history',
    readTime: 6,
    importantCase: 'Kesavananda Bharati v. State of Kerala (1973)'
  }
];

