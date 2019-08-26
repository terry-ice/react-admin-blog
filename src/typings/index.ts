declare interface Routers {
  readonly path: string;
  readonly title: string;
  readonly icon: string;
  readonly component: any;
}
declare interface Category {
  readonly id?: number;
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
