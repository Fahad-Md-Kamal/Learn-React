import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counterState = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);

  
  const increamentHandler = () => {
    dispatch({type: 'INCREAMENT'});
  };

  const decreamentHandler = () => {
    dispatch({type: 'DECREAMENT'});
  };

  const increaseHandler = () => {
    dispatch({type: 'INCREASE', amount: 5});
  };

  const toggleCounterHandler = () => {
    dispatch({type: 'TOGGLE'});
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
