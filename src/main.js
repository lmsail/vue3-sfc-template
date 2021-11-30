import { createApp } from 'vue';
import router from "@/router";
import store from "@/store";
import App from './App.vue';
import '@/assets/css/base.css';

createApp(App).use(store).use(router).mount('#app')