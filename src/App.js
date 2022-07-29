import './App.css';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
// import IncrementDecrementTask from './reducers/MainTask'
import {Increment,Decrement} from './actions/index'
function App() {
  const mainState=useSelector((state)=>state.IncrementDecrementTask);
  const dispatch= useDispatch();
  return (
    <div className="App">
      <h1>Redux Functionality with Counter Application</h1>
      <button onClick={()=>dispatch(Increment())}>increment</button>
        {mainState}
      <button onClick={()=>dispatch(Decrement())}>decrement</button>
    </div>
  );
}

export default App;
