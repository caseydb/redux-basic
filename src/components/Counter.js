import { Component } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const show = useSelector(state => state.showCounter)
  
  const incrementHanlder = () => {
    dispatch({type: 'increment'})
  }
  const decrementHanlder = () => {
    dispatch({type: 'decrement'})
  }
  const increaseHandler = () => {
    dispatch({type: 'increase', amount: 10})
  }
  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'})
  };
  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter (V2)!</h1>
      { show && <div>
        <div className={classes.value}>{counter}</div>
        <div>
          <button onClick={incrementHanlder}>increment</button>
          <button onClick={increaseHandler}>increase by 10</button>
          <button onClick={decrementHanlder}>decrement</button>
        </div>
      </div> }
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


// class Counter extends Component {
//   incrementHanlder() {
//     this.props.increment();
//   }
//   decrementHanlder() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//         <button onClick={this.incrementHanlder.bind(this)}>increment</button>
//         <button onClick={this.decrementHanlder.bind(this)}>decrement</button>
//       </div>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);