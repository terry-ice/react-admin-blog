import { all } from "redux-saga/effects";
// import { all, call, put, select, takeLatest } from "redux-saga/effects";
// import { FETCH_CATEGORY_SUCCESS } from "./constants";
// import { IFetchCategoryPayload } from "./payloads";
// import { selectSelectedPostId } from "./selectors";

// function* fetchPostsSaga() {
//   const response = yield call(fetchAllPostsApi);
//   try {
//     const { status, data } = response;

//     if (status === 200) {
//       yield put(fetchPostsSuccess(data));
//     } else {
//       yield put(fetchPostsError("Sorry! An error occured!"));
//     }
//   } catch (error) {
//     yield put(fetchPostsError("Sorry! An error occured!"));
//   }
// }

export default function* rootSaga() {
  yield all([
    // takeLatest(FETCH_POSTS, fetchPostsSaga)
    // takeLatest(FETCH_POST_COMMENTS, fetchPostCommentsSaga)
  ]);
}
