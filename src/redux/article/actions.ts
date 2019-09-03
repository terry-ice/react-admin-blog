import { Category } from "models";

import { combineActions, createAction } from "redux-actions";

import {
  FETCH_CATEGORY_SUCCESS,
  SET_ARTICLE_INFO,
  SET_CATEGORY_INFO
} from "./constants";
import {
  IFetchArticleInfoPayload,
  IFetchCategoryInfoPayload,
  IFetchCategoryPayload
} from "./payloads";

export const fetchCategorySuccess = createAction<
  IFetchCategoryPayload,
  Category[]
>(FETCH_CATEGORY_SUCCESS, category => ({ category }));

export const setCategoryInfo = createAction<
  IFetchCategoryInfoPayload,
  Category
>(SET_CATEGORY_INFO, categoryInfo => ({ categoryInfo }));

export const setArticleInfo = createAction<IFetchArticleInfoPayload, Article>(
  SET_ARTICLE_INFO,
  articleInfo => ({ articleInfo })
);

export const errorActions = combineActions(FETCH_CATEGORY_SUCCESS);
