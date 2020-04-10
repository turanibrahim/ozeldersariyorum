import Vue from 'vue';
import router from './router/index.js';
import vuetify from './plugins/vuetify'
import store from './store';
import App from './App.vue'

require('./bootstrap');

const app = new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount('#app');
