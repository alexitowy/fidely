export interface DataCard {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  desc: string;
  url: string;
  currentCountService: string;
  maxCountService: string;
  award: string;
  favorite: boolean;
  categoryName: string;
  categoryColor: string;
  stamps: Stamps;
  addCard?: boolean;
}

export interface Stamps {
  limit: string;
  complete: string;
  imgComplete: string;
  imgDefault: string;
}

export interface DataCardInfo {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  desc: string;
  categoryName: string;
  categoryColor: string;
}
