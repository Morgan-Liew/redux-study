/* import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createIncrementAction,
  createDecrementAction,
  createIncAsyncAction,
} from "../../redux/count_action";

class Count extends Component {
  add = () => {
    this.props.add(1)
  };

  render() {
    return (
      <div>
        <h2>当前求和：{this.props.he}</h2>
        <button onClick={this.add}> +1 </button>
      </div>
    );
  }
}

export default connect(
  // 映射状态
  (state) => ({ he: state }),
  // 映射状态的方法
  {
    add:createIncrementAction,

  }
)(Count); */
// // 引入Count的UI组件
// import CountUI from "../../components/Count";
import React, { Component } from "react";
import './index.css'
// 引入action
import {
  createIncrementAction,
  createDecrementAction,
  createIncAsyncAction,
} from "../../redux/actions/count";

// 引入connect 用于连接UI组件和redux
import { connect } from "react-redux";
/* 
// 映射状态
const mapStateToProps = state => ({ count: state });

// 映射操作状态的方法
const mapDispatchToProps = dispatch => ({
  jia: (number) => {
    // 通知redux执行加法
    dispatch(createIncrementAction(number));
  },
  jian: (number) => {
    // 通知redux执行加法
    dispatch(createDecrementAction(number));
  },
  jiaAsync: (number, time) => {
    dispatch(createIncAsyncAction(number, time));
  },
});
 */

// 定义UI组件
class Count extends Component {
  state = {};

  increment = () => {
    const { value } = this.selectNumber;
    this.props.jia(value * 1);
  };

  decrement = () => {
    const { value } = this.selectNumber;
    this.props.jian(value * 1);
  };

  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    if (this.props.count % 2 !== 0) {
      this.props.jia(value * 1);
    }
  };

  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.jiaAsync(value * 1, 500);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>
          the component of Count,
          <br />
          <small className="total">the total of Component Person :{this.props.persons}</small>
        </h2>
        <h3>the current sum :{this.props.count}</h3>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
        <button onClick={this.incrementIfOdd}>add if the sum odd</button>
        &nbsp;&nbsp;
        <button onClick={this.incrementAsync}>add async</button>
      </div>
    );
  }
}

// 创建并暴露一个Count的容器组件
export default connect(
  (state) => ({ count: state.count, persons: state.persons.length }),
  // mapDispatchToProps 简写
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync: createIncAsyncAction,
  }
  // mapDispatchToProps 一般写法
  /* (dispatch) => ({
    jia: (number) => {
      // 通知redux执行加法
      dispatch(createIncrementAction(number));
    },
    jian: (number) => {
      dispatch(createDecrementAction(number));
    },
    jiaAsync: (number, time) => {
      dispatch(createIncAsyncAction(number, time));
    },
  }) */
)(Count);
