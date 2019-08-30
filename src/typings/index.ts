declare interface Routers {
  readonly path: string;
  readonly title: string;
  readonly icon: string;
  readonly component: any;
}

declare interface Extends {
  id: string;
  name: string;
  value: string;
}

declare interface Category {
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

declare interface Extends {
  id: string;
  name: string;
  value: string;
}

declare interface Meta {
  id: string;
  views: number;
  likes: number;
  comments: number;
}

declare interface Label {
  id: string;
  name: string;
  slug: string;
  description: string;
  extends?: Extends[];
  createdAt?: string;
  updatedAt?: string;
}

declare interface User {
  id?: string;
  name: string;
  email: string;
  password?: string;
  token: string;
  createdAt?: string;
  updatedAt?: string;
}

declare interface Article {
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

declare interface ColumnsType {
  readonly id?: number;
  readonly key?: number;
  readonly name: string;
  readonly slug: string;
  readonly description: string;
}
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.bmp";
declare module "*.tiff";
declare module "*.js";
