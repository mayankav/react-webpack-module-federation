import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue'; 

// Mount function to load the content
function mount(el) {
    const app = createApp(Dashboard);
    // mount app from vuejs
    app.mount(el);
}
// If in development mode & running in isolation(without container), call mount immediately
if(process.env.NODE_ENV === 'development') {
    const node = document.getElementById('home-dev');
    if(node) mount(node);
}
//export mount to beused by the container
export { mount }