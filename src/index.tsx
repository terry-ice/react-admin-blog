// import ApolloClient, { InMemoryCache } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/index.scss";
import registerServiceWorker from "./registerServiceWorker";
import App from "./routes";

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
      <App />
    </ApolloProvider>
  </BrowserRouter>
);
ReactDOM.render(<Index />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
