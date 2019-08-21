import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import App from '../App';
import Auth from '../pages/Authentic';

const RouterConfig = () => {
    return(
        <BrowserRouter>
            <Route path='/' component={App}>
                <Route exact path='/' component={Auth}/>
            </Route>
        </BrowserRouter>
    );
};

export default RouterConfig;
