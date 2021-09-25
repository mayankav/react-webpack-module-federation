import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

import Header from './components/Header';
// import MarketingApp from './components/MarketingApp';
// import AuthApp from './components/AuthApp';

const MarketingAppLazy = lazy(() => import('./components/MarketingApp'));
const AuthAppLazy = lazy(() => import('./components/AuthApp'));
const HomeAppLazy = lazy(() => import('./components/HomeApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'con'
});

const history = createBrowserHistory();

const App = props => {
    const [isUserSignedIn, setIsUserSignedIn] = useState(false);

    useEffect(() => {
        if(isUserSignedIn) history.push('/home');
    }, [isUserSignedIn]);

    return (
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Header isUserSignedIn={isUserSignedIn} onSignOut={() => setIsUserSignedIn(false)} />
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path="/auth">
                            <AuthAppLazy onUserSignIn={() => setIsUserSignedIn(true)} />
                        </Route>
                        <Route path="/home">
                            { !isUserSignedIn && <Redirect to="/" /> }
                            <HomeAppLazy />
                        </Route>
                        <Route path="/" component={MarketingAppLazy} />
                    </Switch>
                </Suspense>
            </Router>
        </StylesProvider>
    )
}

export default App;