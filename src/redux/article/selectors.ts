import { createSelector } from 'reselect';

import { IStoreState } from '../storeState';

export const categoryState = () => (state: IStoreState) =>
  state.article.category;
export const categoryInfoState = () => (state: IStoreState) =>
  state.article.categoryInfo;

export const labelState = () => (state: IStoreState) => state.article.label;
export const labelInfoState = () => (state: IStoreState) =>
  state.article.labelInfo;

export const articleState = () => (state: IStoreState) => state.article;

export const selectCategory = () =>
  createSelector(
    categoryState(),
    state => state
  );
export const selectArticle = () =>
  createSelector(
    articleState(),
    state => state.article
  );
export const selectCategoryInfo = () =>
  createSelector(
    categoryInfoState(),
    state => state
  );

export const selectLabel = () =>
  createSelector(
    labelState(),
    state => state
  );
