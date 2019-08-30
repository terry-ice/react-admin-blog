import { handleActions } from "redux-actions";
import { FETCH_CATEGORY_SUCCESS } from "./constants";
import { IFetchCategoryPayload } from "./payloads";
import { ArticleState } from "./state";

const initialState: ArticleState = {
  article: [],
  label: [],
  category: [],
  isFetchingPosts: false,
  fetchDataErrorMessage: ""
};

export default handleActions<ArticleState>(
  {
    [FETCH_CATEGORY_SUCCESS]: (
      state,
      action: ReduxActions.Action<IFetchCategoryPayload>
    ) => ({ ...state, isFetchingPosts: false, ...action.payload })
  },
  initialState
);
