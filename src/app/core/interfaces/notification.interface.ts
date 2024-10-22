export interface Notifications {
    id: string;
    shopId: string;
    icon: string;
    shopName: string;
    desc: string;
    date: string;
    isNew: boolean;
    isRead: boolean;
    extraData?: Record<string, string>;
  }