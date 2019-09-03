import { Article, Category, Label } from "models";

export interface ArticleState {
  readonly article: Article[];
  readonly category: Category[];
  readonly categoryInfo?: Category | null;
  readonly articleInfo?: Article | null;
  readonly label: Label[];
  readonly isFetchingPosts: boolean;
  readonly fetchDataErrorMessage: string;
}
