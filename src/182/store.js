// action : 액션 (들)
export const increase = () => ({ type: "INCREMENT" });
export const decrease = () => ({ type: "DECREMENT" });
export const changeName = (username) => ({type: "CHANGE_NAME", payload: username});

// state : 상태(들)
const initState = {
  number: 1,
  user: {name: "유인아", age: 27},
}

// reducer 함수
//  return 결과를 호출한 쪽에서 받는게 아니라
//  return 되는 순간 UI 변경 발생!
const reducer = (state = initState, action) => {
  // action.type 에 따라 새로운 state 를 리턴
  switch (action.type) {
    case "INCREMENT":
      // return { number: state.number + 1 };
      return {...state, number: state.number + 1};
    case "DECREMENT":
      // return { number: state.number - 1 };
      return {...state, number: state.number - 1};
    case "CHANGE_NAME":
      // state 의 user.name 을 업데이트한 새로운 state 리턴
      return {...state, user: {...(state.user), name: action.payload}};
    default:
      return state;   // 기존 state 리턴 
  }
};

export default reducer;   // reducer 는 기본적으로 export