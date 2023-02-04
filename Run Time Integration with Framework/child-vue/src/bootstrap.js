import { createApp } from "vue";
import Info from './component/info';

const fetch_el = document.getElementById("dev-vue");

const mount = (el) => {
    const app = createApp(Info)
    app.mount(el);
}

if(fetch_el){
    mount(fetch_el);
}

export { mount }