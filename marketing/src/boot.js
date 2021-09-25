import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App.js';


// Mount function to load the content
function mount(el, { onNavigate, defaultHistory, initialPath }) {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });
    // onNavigate is callback function coming from the container
    // location object gets passed from here to onNavigate autmatically (due to listen eventListener)
    if(onNavigate) history.listen(onNavigate);

    ReactDOM.render(<App history={history} />, el);

    const onParentNavigate = (location) => {
        const nextPathname = location.pathname;
        if(history.pathname !== nextPathname) history.push(nextPathname);
    }

    return { onParentNavigate };
}
// If in development mode & running in isolation(without container), call mount immediately
if(process.env.NODE_ENV === 'development') {
    const node = document.getElementById('marketing-dev');
    if(node) mount(node, { defaultHistory: createBrowserHistory() });
}
//export mount to beused by the container
export { mount }