import { DECREMENT, INCREMENT } from "../constant";

/* 
    1.该文件用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
    2.reducer 函数接到 之前的状态 preState 和 动作对象 action 两个参数
*/
const initState = 0;  // 初始化状态
export default function countReducer(preState = initState, action) {
  // console.log(preState,action);
  // if(preState === undefined) preState = 0;
  // 从action对象中获取 type、data
  const { type, data } = action;
  // 根据type决定如何加工数据
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;

    default:
      return preState;
  }
}
