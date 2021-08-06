/* 该文件用于汇总所有的Reducers */
// 引入combineReducers用于汇总多个Reducers
import { combineReducers } from "redux";

// 引入为Count组件服务的reducer
import countReducer from "./count";

// 引入为Person组件服务的reducer
import personReducer from "./person";

// 汇总reducer
export default combineReducers({ 
    count: countReducer,
    persons:personReducer
   });
  // 传入的对象为总状态对象