import './assets/scss/index.scss';

import { createApp } from 'vue';

import VueLazyLoad from 'vue3-lazyload';

import VueMask from '@devindex/vue-mask'; // <-- ADD THIS LINE
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
// import 'onsenui/css/onsenui.css';
// import 'onsenui/css/onsen-css-components.css';
import VueTheMask from 'vue-the-mask'

import App from './App.vue';
import JR_NumberInput from './components/JR_NumberInput.vue';
import JR_Passwor from './components/JR_Password.vue';
import JR_TextField from './components/JR_TextField.vue';
import LoadingV from './components/Loading.vue';
import PageHeader from './components/PageHeader.vue';
import router from './router/index';
import store from './store/index.js';
import VueOnsen from 'vue-onsenui';

import {
    Button,
    Cell,
    Toast,
    ActionSheet,
    Overlay,
    Loading,
    Notify,
    TextEllipsis,
} from 'vant';
import 'vant/lib/index.css';


const app = createApp(App)
app.use(VueMask);
app.use(router)
app.use(store)
app.use(VueLazyLoad)
// app.use(VueOnsen)

app.use(Button)
app.use(Cell)
app.use(Toast)
app.use(ActionSheet)
app.use(Overlay)
app.use(Loading)
app.use(Notify)
app.use(TextEllipsis)






app.component('LoadingV', LoadingV);
app.component('JR_Passwor', JR_Passwor);
app.component('JR_TextField', JR_TextField);
app.component('JR_NumberInput', JR_NumberInput);
app.component('PageHeader', PageHeader);

window.$Toast = useToast()

import * as components from 'vue-onsenui/esm/components';

// Register all vue-onsenui components
// Object.values(components).forEach(component =>
//     app.component(component.name, component));


app.mount('#app')
