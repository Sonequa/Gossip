import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import App from '../App';
import Auth from '../pages/Authentic/index';
import SignUp from '../pages/SignUp/index';

const RouterConfig = () => {
    return(
        <BrowserRouter>
            <Route path='/' component={App}>
                <Route exact path='/' component={Auth}/>
                <Route path='/signUp' component={SignUp}/>
            </Route>
        </BrowserRouter>
    );
};

export default RouterConfig;
