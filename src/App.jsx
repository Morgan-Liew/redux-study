import React, { Component } from "react";

import Count from "./containers/Count";  // 引入Count的容器组件
import Person from "./containers/Person"; // 引入Person的容器组件

// import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 给容器组件传递store */}
        {/* <Count store={store} /> */}
        <Count/>
        <br />
        <hr/>
        <Person/>
      </div>
    );
  }
}
