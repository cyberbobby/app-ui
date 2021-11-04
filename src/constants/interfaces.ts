export interface Product {
  _id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  countInStock: number;
  brand: string;
  rating: number;
  numReviews: number;
  description: string;
  qty: number;
}

export interface CartState {
  products: Product[];
}

export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string;
}

export interface ProductDetailsState {
  product: Product | undefined;
  loading: boolean;
  error: string;
}

export interface UserState {
  //  users: User[];
  loading: boolean;
  error: string;
}
