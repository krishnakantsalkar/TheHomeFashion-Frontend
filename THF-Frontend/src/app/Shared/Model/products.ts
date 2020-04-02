export interface Iproducts {
  _id?: string;
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
  offerPrice: number;
  isAvailable: boolean;
  isTodayOffer: boolean;
  category: string;
}
