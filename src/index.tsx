import ApolloClient from "apollo-boost";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import * as ReactDOM from "react-dom";
import "./assets/css/index.scss";
import registerServiceWorker from "./registerServiceWorker";
import App from "./routes/app";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  request: operation => {
    const token = localStorage.getItem("token");
    operation.setContext({
      fetchOptions: {
        credentials: "include"
      },
      headers: {
        authorization: token ? `${token}` : ""
      }
    });
  }
});

const Index = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
ReactDOM.render(<Index />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
