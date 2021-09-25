import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Header from './components/Header';
// import MarketingApp from './components/MarketingApp';
// import AuthApp from './components/AuthApp';

const MarketingAppLazy = lazy(() => import('./components/MarketingApp'));
const AuthAppLazy = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'con'
});

const App = props => {
    const [isUserSignedIn, setIsUserSignedIn] = useState(false);
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Header isUserSignedIn={isUserSignedIn} onSignOut={() => setIsUserSignedIn(false)} />
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path="/auth">
                            <AuthAppLazy onUserSignIn={() => setIsUserSignedIn(true)} />
                        </Route>
                        <Route path="/" component={MarketingAppLazy} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </StylesProvider>
    )
}

export default App;