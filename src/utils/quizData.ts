
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
- Binding on all three organs of the state - legislature, executive, and judiciary`,
    category: 'fundamental-rights'
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
- One of the most dynamic and evolving provisions of the Constitution`,
    category: 'fundamental-rights'
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
- This right itself is a Fundamental Right`,
    category: 'fundamental-rights'
  }
];
