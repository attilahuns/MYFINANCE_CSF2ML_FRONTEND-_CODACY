export interface FaqMetadata {
  title: string,
  faqs?: Faq[];
}

export interface Faq {
  id: number;
  title: string;
}
