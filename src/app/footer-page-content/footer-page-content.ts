export interface FooterPageContent {
  title: string;
  description?: string;
  picture?: {
    url: string;
    alt: string;
  };
  video?: string;
  link?: {
    title: string;
    url: string;
  }
}
