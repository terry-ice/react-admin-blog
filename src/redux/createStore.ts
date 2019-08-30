import { applyMiddleware, createStore, Middleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import allSagas from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleWares: Middleware[]) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleWares));
  }
  return applyMiddleware(...middleWares);
};

export function configureStore() {
  const middleWares: Middleware[] = [sagaMiddleware];

  const persistConfig = {
    key: "root",
    storage,
    blacklist: []
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer, bindMiddleware(middleWares));

  const persistor = persistStore(store);

  allSagas.forEach(saga => {
    sagaMiddleware.run(saga);
  });

  return { store, persistor };
}
