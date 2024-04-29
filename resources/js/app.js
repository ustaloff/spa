import './bootstrap';
import '../sass/app.scss';
import Router from '@/router';
import store from '@/store';
import {createApp} from 'vue/dist/vue.esm-bundler';
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const app = createApp({});
app.use(Router);
app.use(store);
app.use(PrimeVue, {unstyled: false});
app.component('InputText', InputText);
app.component('Button', Button);
app.mount('#app');
