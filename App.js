import React, { Component } from "react";
import { Text } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./src/screens/home-screen";

import store from "./src/config/reducers";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    );
  }
}
