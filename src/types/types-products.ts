export interface InnerItem {
  article: string;
  description: string;
  src: string;
  mm: string;
  lmm: string;
  pack: number;
  price: number;
  id: number;
}
export interface CategoryItemTypes {
  id: string;
  src: string;
  article: string;
  title: string;
  link: string;
  items?: Array<InnerItem>;
}
