import { Article, Category, Label } from "models";

export interface ArticleState {
  readonly article: Article[];
  readonly category: Category[];
  readonly label: Label[];
  readonly isFetchingPosts: boolean;
  readonly fetchDataErrorMessage: string;
}
