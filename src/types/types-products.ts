export interface Item {
  src: string;
  id: string;
}



export interface InnerItem extends Item {
  article: string;
  description: string;
  mm: string;
  lmm: string;
  pack: number;
  price: number;
  parent: string;
}

export interface CategoryItemTypes extends Item  {
  srcMini: string;
  article: string;
  title: string;
  name: string;
  link: string;
  items?: Array<InnerItem>;
}

export interface ProductTypes extends Item  {
  items?: Array<CategoryItemTypes>;
  srcMini: string;
  article: string;
  title: string;
  name: string;
  link: string;
}


export interface BasketItem extends InnerItem {
  total: number;
  count: number;
}