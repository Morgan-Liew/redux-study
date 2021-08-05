import { ADD_PERSON } from "../constant";

// 初始化人列表
const initState = [{ id: "001", name: "Morgan", age: 25 }];
export default function personReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState];

    default:
      return preState;
  }
}
