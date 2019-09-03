/*
 * @Author: terry
 * @Date: 2019-08-31 13:03:26
 * @Last Modified by:   https://github.com/terry-ice
 * @Last Modified time: 2019-08-31 13:03:26
 */
import { handleActions } from "redux-actions";

import {
  FETCH_CATEGORY_SUCCESS,
  SET_ARTICLE_INFO,
  SET_CATEGORY_INFO
} from "./constants";
import { IFetchCategoryPayload } from "./payloads";
import { ArticleState } from "./state";

const initialState: ArticleState = {
  article: [],
  label: [],
  articleInfo: null,
  categoryInfo: null,
  category: [],
  isFetchingPosts: false,
  fetchDataErrorMessage: ""
};

export default handleActions<ArticleState>(
  {
    [FETCH_CATEGORY_SUCCESS]: (
      state,
      action: ReduxActions.Action<IFetchCategoryPayload>
    ) => ({ ...state, isFetchingPosts: false, ...action.payload }),
    [SET_ARTICLE_INFO]: (state, action: any) => ({
      ...state,
      isFetchingPosts: false,
      ...action.payload
    }),
    [SET_CATEGORY_INFO]: (state, action: any) => {
      return {
        ...state,
        isFetchingPosts: false,
        ...action.payload
      };
    }
  },
  initialState
);
