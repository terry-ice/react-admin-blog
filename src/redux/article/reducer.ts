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
	SET_ARTICLE_LIST,
	SET_CATEGORY_INFO
} from "./constants";
import { IFetchArticlePayload, IFetchCategoryPayload } from "./payloads";
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
		[SET_ARTICLE_LIST]: (
			state,
			action: ReduxActions.Action<IFetchArticlePayload>
		) => ({
			...state,
			...action.payload
		}),
		[SET_ARTICLE_INFO]: (state, action: any) => ({
			...state,
			isFetchingPosts: false,
			...action.payload
		}),
		[FETCH_CATEGORY_SUCCESS]: (
			state,
			action: ReduxActions.Action<IFetchCategoryPayload>
		) => ({
			...state,
			isFetchingPosts: false,
			category: action.payload.category
		}),
		[SET_CATEGORY_INFO]: (state, action: any) => {
			return {
				...state,
				isFetchingPosts: false,
				categoryInfo: action.payload.categoryInfo
			};
		}
	},
	initialState
);
