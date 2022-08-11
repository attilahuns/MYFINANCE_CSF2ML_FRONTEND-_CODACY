export interface CommunicationMetadata {
  title: string;
  description?: string;
  cta?: {
    title: string,
    url: string
  },
  pdf?: {
    label: string,
    url: string
  },
  image?: {
    alt: string,
    url: string
  },
  video?: string
}
