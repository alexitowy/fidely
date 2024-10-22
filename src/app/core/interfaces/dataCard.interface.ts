import { DataSwiper } from "./dataSwiper.interface";
import { CardBonds } from "./cardBond.interface";
import { Clock } from "./clock.interface";

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
  bonds : CardBonds[];
  gallery: DataSwiper[];
  clocks: Clock[];
}
