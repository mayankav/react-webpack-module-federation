import React from 'react';
// To use memory history instead of browser history, replace BrowserRouter by Router ( a router that does not handle history on its own )
// check boot.js for createMemoryHistory
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import SignUp from './components/Signup';
import SignIn from './components/Signin';

const generateClassName = createGenerateClassName({
    productionPrefix: 'auth'
});

const App = (props) => {
    const { history, onUserSignIn } = props;
    return (
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/auth/signup"> <SignUp onUserSignIn={onUserSignIn} /> </Route>
                    <Route path="/auth/signin"> <SignIn onUserSignIn={onUserSignIn} /> </Route>
                </Switch>
            </Router>
        </StylesProvider>
    )
}

export default App;