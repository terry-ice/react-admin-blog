import { createSelector } from "reselect";

import { IStoreState } from "../storeState";

export const articleState = () => (state: IStoreState) => state.article;

export const selectCategory = () =>
  createSelector(
    articleState(),
    state => state.category
  );
export const selectCategoryInfo = () =>
  createSelector(
    articleState(),
    state => state.categoryInfo
  );
