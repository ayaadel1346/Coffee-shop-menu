export interface Category {
  id: number;
  name: string;
  image: string;
  description: string;
}

export interface Coffee {
  id: number;
  name: string;
  description: string;
  origin: string;
  categoryId: number;
  price: number;
  image: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  totalPages: number;
  page: number;
  size: number;
}
