import React from "react"
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from './redux/createStore'
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>,
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
