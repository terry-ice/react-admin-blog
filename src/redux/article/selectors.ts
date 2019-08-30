import { createSelector } from "reselect";
import { IStoreState } from "../storeState";

export const postState = () => (state: IStoreState) => state.article;

export const selectAllPosts = () =>
  createSelector(
    postState(),
    state => state.article
  );

export const selectSelecteArticle = () =>
  createSelector(
    postState(),
    state => {
      return null;
    }
  );
