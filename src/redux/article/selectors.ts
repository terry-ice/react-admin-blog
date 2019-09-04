import { createSelector } from "reselect";

import { IStoreState } from "../storeState";

export const categoryState = () => (state: IStoreState) =>
  state.article.category;
export const categoryInfoState = () => (state: IStoreState) =>
  state.article.categoryInfo;

export const selectCategory = () =>
  createSelector(
    categoryState(),
    state => state
  );
export const selectCategoryInfo = () =>
  createSelector(
    categoryInfoState(),
    state => state
  );
