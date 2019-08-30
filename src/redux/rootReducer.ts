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
