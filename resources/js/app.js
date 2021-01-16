require('./bootstrap');

window.Vue = require('vue');

// componentes
Vue.component('v-drawer', require('./components/Drawer.vue').default);
Vue.component('v-title', require('./components/Title.vue').default);
Vue.component('v-content', require('./components/Content.vue').default);
Vue.component('v-modal', require('./components/Modal.vue').default);
Vue.component('v-loader', require('./components/Loader.vue').default);

// vistas
Vue.component('v-index', require('./views/Index.vue').default);
Vue.component('v-home', require('./views/home/Index.vue').default);
Vue.component('v-briefcase', require('./views/briefcase/Index.vue').default);
Vue.component('v-profile', require('./views/profile/Index.vue').default);
Vue.component('v-reviews', require('./views/reviews/Index.vue').default);
Vue.component('v-services', require('./views/services/Index.vue').default);

// componenetes y vistas del welcome pagina principal de clamonsf
Vue.component('v-welcome-nav', require('./welcome/Nav.vue').default);
Vue.component('v-welcome-about', require('./welcome/About.vue').default);
Vue.component('v-welcome-services', require('./welcome/Services.vue').default);
Vue.component('v-welcome-briefcase', require('./welcome/Briefcase.vue').default);
Vue.component('v-welcome-experiences', require('./welcome/Experiences.vue').default);
Vue.component('v-welcome-skills', require('./welcome/Skills.vue').default);
Vue.component('v-welcome-employees', require('./welcome/Employees.vue').default);
Vue.component('v-welcome-testimonials', require('./welcome/Testimonials.vue').default);
Vue.component('v-welcome-contact', require('./welcome/Contact.vue').default);
Vue.component('v-welcome-footer', require('./welcome/Footer.vue').default);

// store
import store from './store/index'

const app = new Vue({
    el: '#app',
    store
});
