import Loading from "@/components/common/Loading";
import { LoginRoute } from "@/routes/router";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { createBrowserHistory } from "history";
import * as React from "react";
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
	</BrowserRouter>
);
ReactDOM.render(
	<ApolloProvider client={client}>
		<Index />
	</ApolloProvider>,
	document.getElementById("root") as HTMLElement
);
registerServiceWorker();
