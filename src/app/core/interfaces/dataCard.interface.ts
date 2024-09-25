export interface DataCard {
  id: string;
  icon: string;
  cover: string;
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
  cards: DataCardInfo[];
  gallery: DataSwiper[];
}

export interface DataCardInfo {
  id: string;
  limit: string;
  complete: string;
  imgComplete: string;
  imgDefault: string;
  addCard?: boolean;
}
export interface DataSwiper{
  id: string;
  img: string;
  url: string;
}

export interface EventCardComponent{
  card: DataCard;
  stamp: DataCardInfo;
}
