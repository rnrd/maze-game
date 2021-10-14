import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import configureStore from "./redux/reducers/ConfigureStore";
import {Provider} from "react-redux";

export const Store=configureStore();

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
