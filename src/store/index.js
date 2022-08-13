const redux = require('redux');


const counterReducer = (state = {counter: 0}, action) => {
    if (action.type === 'INCREAMENT'){
        return{ counter: state.counter + 1};
    }
    else if (action.type === 'INCREASE'){
        return { counter: state.counter + action.amount};
    }
    else if (action.type === 'DECREAMENT'){
        return { counter: state.counter - 1};
    }
    return state;
}
const store = redux.createStore(counterReducer);

export default store;
