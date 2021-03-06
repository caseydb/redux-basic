import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const toggle = useSelector(state => state.showCounter)
  
  const incrementHandler = () => {
    dispatch({type: 'increment'})
  }
  const decrementHandler = () => {
    dispatch({type: 'decrement'})
  }
  const increaseHandler = () => {
    dispatch({type: 'increase', amount: 20})
  }
  const toggleHandler = () => {
    dispatch({type: 'toggle'})
  }
  
  return (
    <main className={classes.counter}>
      <h1>Roa 2021</h1>
      {toggle && 
      <div>
        <div className={classes.value}>{counter}</div>
        <div>
          <button onClick={incrementHandler}>increment</button>
          <button onClick={increaseHandler}>increase by 10</button>
          <button onClick={decrementHandler}>decrement</button>
        </div>
      </div>}
      <button onClick={toggleHandler}>Toggle Counter</button>
    </main>
    
  );
};

export default Counter;


// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//         <button onClick={this.incrementHandler.bind(this)}>increment</button>
//         <button onClick={this.decrementHandler.bind(this)}>decrement</button>
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