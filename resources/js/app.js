import './bootstrap';
import '../sass/app.scss';
import Router from '@/router';
import store from '@/store';
import {createApp} from 'vue/dist/vue.esm-bundler';
import PrimeVue from 'primevue/config';
import {definePreset} from 'primevue/themes';
import PrimeOne from 'primevue/themes/primeone';
import Aura from 'primevue/themes/primeone/aura';
import Sidebar from 'primevue/sidebar';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';


import Preset from './preset'

const app = createApp({});
app.use(Router);
app.use(store);

//app.use(PrimeVue, {unstyled: false});
app.use(PrimeVue, {
    theme: {
        base: PrimeOne,
        preset: Preset,
        options: {
            darkModeSelector: '[data-theme=dark]',
        }
    }
});

app.component('Sidebar', Sidebar);
app.component('InputText', InputText);
app.component('Button', Button);
app.mount('#app');
