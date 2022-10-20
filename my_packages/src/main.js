import { createApp } from "vue";
import App from "./App.vue";

import packages from "./packages"; //导入
createApp(App).use(packages).mount("#app");
