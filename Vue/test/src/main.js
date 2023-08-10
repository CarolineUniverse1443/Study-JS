import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import globalComponents from '@/components/global';

const app = createApp(App);
app.use(globalComponents);
app.use(store).use(router).mount('#app');
