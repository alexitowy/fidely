import { DataSwiper } from "./dataSwiper.interface";

export interface CardShop {
  id: string;
  icon: string;
  cover: string;
  title: string;
  subtitle: string;
  desc: string;
  adressUrl: string;
  adressName: string;
  phone: string;
  favorite: boolean;
  categoryName: string;
  categoryColor: string;
  categoryId: string;
  bonds : CardBons[];
  gallery: DataSwiper[];
  clocks: Clock[];
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
  categoryId: string;
  award: string;
  favorite: boolean;
  isAdd: boolean
  stamps: Stamps;
}

export interface Clock {
  day: string;
  time: string;
}