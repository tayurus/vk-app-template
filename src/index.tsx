import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import { App } from "./App";
import { Router } from "react-router-dom";
import { history } from "./helpers/history";
import { Provider } from "react-redux";
import { store } from "src/redux/store";
import { ConfigProvider, WebviewType } from "@vkontakte/vkui";
import "./variables.scss";
import "./index.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "moment/locale/ru";
import moment from "moment";

moment.locale("ru");

// Init VK  Mini App
bridge.send("VKWebAppInit");

ReactDOM.render(
  <ConfigProvider webviewType={WebviewType.INTERNAL}>
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </ConfigProvider>,
  document.getElementById("root")
);
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
