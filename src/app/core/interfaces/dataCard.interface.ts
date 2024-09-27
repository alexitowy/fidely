export interface CardShop {
  id: string;
  icon: string;
  cover: string;
  title: string;
  subtitle: string;
  desc: string;
  url: string;
  favorite: boolean;
  categoryName: string;
  categoryColor: string;
  bonds : CardBons[];
}

export interface Stamps {
  limit: string;
  complete: string;
  imgComplete: string;
  imgDefault: string;
}

export interface CardBons {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  desc: string;
  currentCountService: string;
  maxCountService: string;
  award: string;
  favorite: boolean;
  isAdd: boolean
  stamps: Stamps;
}
