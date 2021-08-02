import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/Home/Home.page';

const Routes = () => {
    return (
        <Router>
        {/* craete route for home page */}
            <Route path="/" exact component={Home} />
        </Router>
    );
};

export default Routes;