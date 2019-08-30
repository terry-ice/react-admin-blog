export interface Extends {
  id: string;
  name: string;
  value: string;
}

export interface Meta {
  id: string;
  views: number;
  likes: number;
  comments: number;
}

export interface Category {
  id?: string;
  key?: string;
  name: string;
  slug: string;
  description: string;
  extends?: Extends[];
  article?: Article[];
  createdAt?: string;
  updatedAt?: string;
  __typename?: string;
}

export interface Label {
  id: string;
  name: string;
  slug: string;
  description: string;
  extends?: Extends[];
  createdAt?: string;
  updatedAt?: string;
}

export interface User {
  id?: string;
  name: string;
  email: string;
  password?: string;
  token: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Article {
  id?: string;
  title: string;
  description?: string;
  keywords?: string;
  content?: string;
  thumbnail?: string;
  state: string;
  public: string;
  extends?: Extends[];
  meta?: Meta[];
  label?: Label[];
  category: Category;
  createdAt?: string;
  updatedAt?: string;
}
