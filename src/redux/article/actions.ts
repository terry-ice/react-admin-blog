import { Category } from "models";
import { combineActions, createAction } from "redux-actions";
import { FETCH_CATEGORY_SUCCESS } from "./constants";
import { IFetchCategoryPayload } from "./payloads";

export const fetchCategorySuccess = createAction<
  IFetchCategoryPayload,
  Category[]
>(FETCH_CATEGORY_SUCCESS, category => ({ category }));

export const errorActions = combineActions(FETCH_CATEGORY_SUCCESS);
