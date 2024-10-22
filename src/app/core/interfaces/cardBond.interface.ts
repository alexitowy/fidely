import { Stamps } from "./stamp.interface";

export interface CardBonds {
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