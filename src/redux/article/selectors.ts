import { createSelector } from "reselect";

import { IStoreState } from "../storeState";

export const categoryState = () => (state: IStoreState) =>
	state.article.category;
export const categoryInfoState = () => (state: IStoreState) =>
	state.article.categoryInfo;

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
