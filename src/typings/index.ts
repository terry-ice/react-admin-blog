declare interface Routers {
  readonly path: string;
  readonly title: string;
  readonly icon: string;
  readonly component: any;
}

declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
