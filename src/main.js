import {
  createSSRApp
} from "vue";
import App from "./App.vue";
import "weapp-cookie";
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
