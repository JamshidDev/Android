import './assets/scss/index.scss';

import { createApp } from 'vue';

import VueLazyLoad from 'vue3-lazyload';

import VueMask from '@devindex/vue-mask'; // <-- ADD THIS LINE
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

import App from './App.vue';
import JR_NumberInput from './components/JR_NumberInput.vue';
import JR_Passwor from './components/JR_Password.vue';
import JR_TextField from './components/JR_TextField.vue';
import Loading from './components/Loading.vue';
import PageHeader from './components/PageHeader.vue';
import router from './router/index';
import store from './store/index.js';


const app = createApp(App)
app.use(VueMask);
app.use(router)
app.use(store)
app.use(VueLazyLoad)







app.component('Loading', Loading);
app.component('JR_Passwor', JR_Passwor);
app.component('JR_TextField', JR_TextField);
app.component('JR_NumberInput', JR_NumberInput);
app.component('PageHeader', PageHeader);

window.$Toast = useToast()




app.mount('#app')
