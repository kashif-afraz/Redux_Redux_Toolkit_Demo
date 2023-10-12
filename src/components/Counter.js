import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/index';

const Counter = () => {

  // const counter = useSelector(state=>state.counter);
  // const show = useSelector(state=>state.showCounter);

  // const dispatch = useDispatch();

  // const toggleCounterHandler = () => {
  //   dispatch({type: 'toggle'})

  // };

  // const increment = () =>{
  //     dispatch({type: 'increment'});  //same values as define in Redux such as increment
  // }

  // const incrementHandler = () =>{
  //   dispatch({type: 'increment5', amount: 5});  //property have same name as in reduc such as amount
  // }

  // const decrement = () =>{
  //   dispatch({type: 'decrement'}); //same values as define in Redux
  // }



  const counter = useSelector(state=>state.counter.counter);
  const show = useSelector(state=>state.counter.showCounter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())

  };

  const increment = () =>{
      dispatch(counterActions.increment());  
  }

  const incrementHandler = () =>{
    dispatch(counterActions.increase(5));  // automatically store in an identifier called payload by redux toolkit.
  }

  const decrement = () =>{
    dispatch(counterActions.decrement());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={increment}>increment</button>
      <button onClick={incrementHandler}>increment By 5</button>
      <button onClick={decrement}>decrement</button>
    </main>
  );
};

export default Counter;
