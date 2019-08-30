import Loading from "@/components/common/Loading";
import { LoginRoute } from "@/routes/router";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { createBrowserHistory } from "history";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./assets/css/themes.less";
import { configureStore } from "./redux/createStore";
import registerServiceWorker from "./registerServiceWorker";
const { store, persistor } = configureStore();
import App from "./routes";
const history = createBrowserHistory();
const link = createHttpLink({
  uri: "http://localhost:4000",
  credentials: "include"
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

const Index = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router history={history}>
            <React.Suspense fallback={<Loading />}>
              <Switch>
                <Route path="/login" component={LoginRoute.component} />
                <App />
              </Switch>
            </React.Suspense>
          </Router>
        </PersistGate>
      </Provider>
    </ApolloProvider>
  </BrowserRouter>
);
ReactDOM.render(<Index />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
