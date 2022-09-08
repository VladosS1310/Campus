import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Provider } from 'react-redux'
import ResponsiveLayout from "./ResponsiveLayout/ResponsiveLayout";
import {store} from "../store";

const App = () => {
    return (
        <Provider store={store}>
            <div className="app">
                <ResponsiveLayout />
            </div>
        </Provider>
    );
};

export default App;
