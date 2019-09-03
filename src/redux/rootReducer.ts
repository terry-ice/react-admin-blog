/*
 * @Author: terry
 * @Date: 2019-08-31 13:03:33
 * @Last Modified by:   https://github.com/terry-ice
 * @Last Modified time: 2019-08-31 13:03:33
 */
import { AnyAction, combineReducers, Reducer } from "redux";
import article from "./article/reducer";
import { IStoreState } from "./storeState";
/* new-imported-reducer-goes-here */

const rootReducer: Reducer<IStoreState, AnyAction> = combineReducers<
  IStoreState
>({
  article
  /* new-tranformed-reducer-export-goes-here */
});

export default rootReducer;
