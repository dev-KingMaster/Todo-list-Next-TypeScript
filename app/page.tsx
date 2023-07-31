"use client";

import { TodoType } from "./interfaces";
import Todos from "./todos";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function Home() {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
}
