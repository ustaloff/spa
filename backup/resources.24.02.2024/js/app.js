import './bootstrap';
import '../sass/app.scss';

import Router from '@/router';
import store from '@/store';

import {createApp} from 'vue/dist/vue.esm-bundler';

import PrimeVue from 'primevue/config';
//import Lara from '@/presets/lara';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

//import 'primevue/resources/themes/aura-light-green/theme.css'

const app = createApp({});
app.use(Router);
app.use(store);

app.use(PrimeVue, {
    unstyled: true,
    //pt: Lara
});

app.component('InputText', InputText);
app.component('Button', Button);

app.mount('#app');
