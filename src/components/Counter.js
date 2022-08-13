import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counterState = useSelector(state => state.counter);
  
  const increamentHandler = () => {
    dispatch({type: 'INCREAMENT'});
  };

  const decreamentHandler = () => {
    dispatch({type: 'DECREAMENT'});
  };

  const increaseHandler = () => {
    dispatch({type: 'INCREASE', amount: 5});
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counterState}</div>
      <div>
        <button onClick={increamentHandler}>+</button>
        <button onClick={increaseHandler}>Increase by 5+</button>
        <button onClick={decreamentHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
