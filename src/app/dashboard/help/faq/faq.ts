export interface FaqMetadata {
  title: string,
  voteMetadata: VoteMetadata,
  faqs?: Faq[]
}

export interface VoteMetadata {
  question: string,
  yesLabel: string,
  noLabel: string,
  submitCtaLabel: string
}

export interface Faq {
  id: number;
  title: string,
  answer?: string,
  video?: string,
  cta?: {
    title: string,
    url: string
  },
  pdf?: {
    label: string,
    url: string
  },
  image?: {
    url: string,
    alt: string
  }
}

export interface FaqVote {
  Up: 'up',
  Down: 'down,'
}
