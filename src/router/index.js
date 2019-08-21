import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import App from '../App';
import Auth from '../component/Authentic';
import Chat from '../component/Chatting';

const RouterConfig = () => {
    return(
        <BrowserRouter>
            <Route path='/' component={App}>
                <Route exact component={Chat}/>
                <Route path='auth' component={Auth}/>
            </Route>
        </BrowserRouter>
    );
};

export default RouterConfig;
