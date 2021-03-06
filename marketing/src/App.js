import React from 'react';
// To use memory history instead of browser history, replace BrowserRouter by Router ( a router that does not handle history on its own )
// check boot.js for createMemoryHistory
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
    productionPrefix: 'mar'
});

const App = (props) => {
    const history = props.history;
    return (
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/pricing" component={Pricing} />
                    <Route path="/" component={Landing} />
                </Switch>
            </Router>
        </StylesProvider>
    )
}

export default App;