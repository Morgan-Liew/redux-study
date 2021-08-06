import { DECREMENT, INCREMENT } from "../constant"

/* 
    该文件专门为Count组件生成action对象
*/
// 同步action action的返回值为object类型
export const increment = (data) => ({type:INCREMENT,data})
export const decrement = (data) => ({type:DECREMENT,data})

// 异步action  是指action的返回值为函数，一般都会调用同步action，非必需品
export const incrementAsync = (data,time) => {
    return (dispatch) =>{
        setTimeout(() => {
            dispatch(increment(data))
        }, time);
    }
} 