export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  rating: number;
  brand: string;
};

export type Products = Product[];

export type TPagination = {
  currentPage: number;
  totalPages: number;
  totalProducts: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export type ProductsResponse = {
  products: Products;
  pagination: TPagination;
};

export type TCategory = {
  id: string;
  name: string;
  description: string;
  icon: string;
  productCount: number;
};

export type TCategoriesResponse = {
  categories: TCategory[];
};
