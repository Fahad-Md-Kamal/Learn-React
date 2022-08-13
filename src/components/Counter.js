import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counterState = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);

  
  const increamentHandler = () => {
    dispatch(counterActions.increament());
  };

  const decreamentHandler = () => {
    dispatch(counterActions.decreament());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counterState}</div>}
      <div >
        <button onClick={increamentHandler}>+</button>
        <button onClick={increaseHandler}>Increase by 5+</button>
        <button onClick={decreamentHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
