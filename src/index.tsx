import Loading from "@/components/common/Loading";
import { LoginRoute } from "@/routes/router";
import { useCategory } from "@/state/state";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { createBrowserHistory } from "history";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import "./assets/css/themes.less";
import registerServiceWorker from "./registerServiceWorker";
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
      <useCategory.Provider>
        <Router history={history}>
          <React.Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/login" component={LoginRoute.component} />
              <App />
            </Switch>
          </React.Suspense>
        </Router>
      </useCategory.Provider>
    </ApolloProvider>
  </BrowserRouter>
);
ReactDOM.render(<Index />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
