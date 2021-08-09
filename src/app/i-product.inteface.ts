export interface IProduct {
  title: string;
  items: IProductItem[];
}

export interface IProductItem {
  vendor: string;
  name: string;
  price: number;
  is_hybrid?: boolean;
  system?: string;
}
