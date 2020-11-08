export interface InnerItem {
  article: string;
  description: string;
  src: string;
  mm: string;
  lmm: string;
  pack: number;
  price: number;
  id: string;
  parent: string;
}

export interface CategoryItemTypes {
  parent: string;
  id: string;
  src: string;
  srcMini: string;
  article: string;
  title: string;
  name: string;
  link: string;
  items?: Array<InnerItem>;
}

export interface ProductTypes {
  parent?: Array<CategoryItemTypes>;
  id: string;
  src: string;
  srcMini: string;
  article: string;
  title: string;
  name: string;
  link: string;
}
