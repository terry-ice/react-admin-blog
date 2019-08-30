import { Article, Category } from "models";

export interface IFetchPayload {
  readonly isFetching: boolean;
}
export interface IFetchArticlePayload {
  readonly article: Article[];
}
export interface IFetchCategoryPayload {
  readonly category: Category[];
}
export interface IFetchDataErrorPayload {
  readonly fetchDataErrorMessage: string;
}
