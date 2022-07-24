import React,{useEffect,useState} from 'react';
import Counterprops from './Components/Counterprops'
import DoubleCounterprops from './Components/DoubleCounterprops'

const App=()=>{
const [count,setCount]=useState(0);
    return (
    <div className="App">
    <h2>Counter props Example :{count}</h2>
    <Counterprops  increment={()=>setCount(count+1)} decrement={()=>setCount(count-1)}/>
    <DoubleCounterprops  increment={()=>setCount(count+2)} decrement={()=>setCount(count-2)}/>
    </div>
    )
}

export default App;
