import { getStore } from "@/utils";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Routes from "./router";
const renderRouter = (item: Routers) => (
	<Switch key={item.title}>
		<Route
			exact
			path={item.path}
			render={props =>
				getStore("token") ? (
					<item.component {...props} />
				) : (
					<Redirect
						to={{
							pathname: "/login"
						}}
					/>
				)
			}
		/>
	</Switch>
);
const renderMenuItem = (item: Routers) => renderRouter(item);
const renderChildren = (item: Routers) => (
	<React.Fragment key={item.path}>
		{item.children && item.children.map(routeItem => renderRouter(routeItem))}
	</React.Fragment>
);
export default () => (
	<>
		{Routes.map((item: Routers) =>
			item.children ? renderChildren(item) : renderMenuItem(item)
		)}
	</>
);
