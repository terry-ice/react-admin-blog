import * as React from "react";
import * as ReactDOM from "react-dom";
import "./assets/css/index.scss";
import registerServiceWorker from "./registerServiceWorker";
import App from "./routes/app";

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
