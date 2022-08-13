const redux = require("redux");

const InitalState = { counter: 0, showCounter: true };

const counterReducer = (state = InitalState, action) => {
  if (action.type === "INCREAMENT") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  } else if (action.type === "INCREASE") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  } else if (action.type === "DECREAMENT") {
    return { 
        counter: state.counter - 1, 
        showCounter: state.showCounter 
    };
  } else if (action.type === "TOGGLE") {
    return {
        showCounter: !state.showCounter,
        counter: state.counter , 
    };
  }
  return state;
};
const store = redux.createStore(counterReducer);

export default store;
