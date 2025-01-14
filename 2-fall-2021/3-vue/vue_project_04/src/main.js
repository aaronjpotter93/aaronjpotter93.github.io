const { createApp } = require('vue');
import App from "./App.vue";


createApp(App).mount("#app");

const app = Vue.createApp({
    data() {
      return {
        counter: 0
      }
    }
  })
  
  app.mount('#app')