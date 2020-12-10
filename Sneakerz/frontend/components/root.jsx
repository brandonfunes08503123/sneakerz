import React from 'react';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import App from "./App";

const Root = ({ store }) => (
    // Router goes into provider
    console.log("INSIDE THE ROOT"),
    <Provider store={store}> 
        <HashRouter>
            <App /> 
        </HashRouter>
    </Provider>
)

export default Root;
