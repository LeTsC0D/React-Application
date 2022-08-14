import React,{useEffect,useState} from 'react';
import Counterprops from './Components/Counterprops'
import DoubleCounterprops from './Components/DoubleCounterprops'
import CSS from "./Components/CSS"

import MyContext from "./Advanced/context"
import Provider from "./Advanced/Provider"
import Child1 from "./Advanced/Child1"

const App=()=>{
const [count,setCount]=useState(0)
const [bool,setBool]=useState(false)

const changeBool=()=>{
if(bool==true){
setBool(false)
}else{
setBool(true)
}
console.log(bool)

}

    return (
    <div className="App">
    <h2>Counter props Example :{count}</h2>
    <Counterprops  increment={()=>setCount(count+1)} decrement={()=>setCount(count-1)}/>
    <DoubleCounterprops  increment={()=>setCount(count+2)} decrement={()=>setCount(count-2)}/>
    <br />
    <br/>
    <CSS props={bool}/>
    <button onClick={()=>changeBool()}>Change STYLE of CSS </button>
        <br />
        <br/>
    <Provider >
    <Child1 />
    </Provider>
        <br />
        <br/>
    </div>
    )
}

export default App;

