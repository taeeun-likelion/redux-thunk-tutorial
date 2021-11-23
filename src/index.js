import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
const customHistory = createBrowserHistory();
//logger을 사용하는 경우 logger가 가장 뒤에 와야한다.
const store = createStore(
  rootReducer,
  applyMiddleware(
    ReduxThunk.withExtraArgument({ history: customHistory }, logger)
  )
);

ReactDOM.render(
  <Router history={customHistory}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
