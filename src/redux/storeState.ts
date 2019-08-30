import { ArticleState } from "./article/state";
// import { IPostsState } from "./posts/state";
/* new-imported-state-goes-here */

export interface IStoreState {
  // readonly posts: IPostsState;
  readonly article: ArticleState;
  /* new-imported-state-key-goes-here */
}
