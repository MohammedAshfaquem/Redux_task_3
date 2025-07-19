import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./Redux/store";
import Counter from "./Redux/Counter";

function App() {

  return (
    <Provider store={store}>
      <Counter></Counter>
    </Provider>
  );
}

export default App;
