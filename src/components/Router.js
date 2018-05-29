import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './home/Home';
import NewDonation from './donation/NewDonation';

class Router extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/donate" component={NewDonation} />
            </div>
        );
    }
}

export default Router;
