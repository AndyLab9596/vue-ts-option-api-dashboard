import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'

// Custom component
import BaseContainer from '@/components/structure/BaseContainer.vue';
import BaseButtonLink from '@/components/structure/BaseButtonLink.vue';

const app = createApp(App);
app.use(Antd);
app.use(router);

app.component('BaseContainer', BaseContainer);
app.component('BaseButtonLink', BaseButtonLink);

app.mount('#app')

