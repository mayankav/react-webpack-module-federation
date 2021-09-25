import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';

// Mount function to load the content
function mount(el) {
    ReactDOM.render(<App />, el);
}
// If in development mode & running in isolation(without container), call mount immediately
if(process.env.NODE_ENV === 'development') {
    const node = document.getElementById('marketing-dev');
    if(node) mount(node);
}
//export mount to beused by the container
export { mount }