import { Article, Category, Label } from 'models';

export interface IFetchPayload {
  readonly isFetching: boolean;
}
export interface IFetchArticlePayload {
  readonly article: Article[];
}
export interface IFetchArticleInfoPayload {
  readonly articleInfo?: Article | null;
}
export interface IFetchCategoryPayload {
  readonly category: Category[];
}
export interface IFetchLabelPayload {
  readonly label: Label[];
}
export interface IFetchCategoryInfoPayload {
  readonly categoryInfo?: Category | null;
}
export interface IFetchDataErrorPayload {
  readonly fetchDataErrorMessage: string;
}
