import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Billing from './pages/Billing';
import Listing from './pages/Listing';
import Header from './components/Header';

const Routing = () => {
    return (
        <BrowserRouter>
            <main className="main">
                <Header />
                <div className="page">
                    <Switch>
                        <Route exact path="/" component={Billing} />
                        <Route exact path="/order-list" component={Listing} />
                    </Switch>
                </div>    
            </main>
        </BrowserRouter>
    )
}

export default Routing;