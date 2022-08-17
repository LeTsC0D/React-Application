import React,{useEffect,useState,useReducer} from 'react';
import {INCREAMENT_COUNT,DECREAMENT_COUNT,RESET_COUNT} from "./action.type"
import Reducer from "./Reducer"

/*
function reduce(count,action){
switch(action.type){
case "incrementCount":
    return count+1;
case "decrementCount":
    return count-1;
default:
    return count;
}
}
*/

export default function CounterRed(){
//const[count,dispatch]=useReducer(Reducer,0);
const[state,dispatch]=useReducer(Reducer,{count:0});
/*
function incrementCunt(){
setCount(count+1);
}
function decrementCount(){
setCount(count-1);
}
*/
return (
<>
{/*
<button onClick={()=>dispatch({type:"incrementCount"})}> Increment</button>
<br />
<span> {count}</span>
<br />
<button onClick={()=>dispatch({type:"decrementCount"})}>Decrement </button>
*/}

{/*
<button onClick={()=>dispatch({type:INCREAMENT_COUNT,payload:1})}>Increment</button>
<br />
<span> {count}</span>
<br />
<button onClick={()=>dispatch({type:DECREAMENT_COUNT,payload:1})}>Decrement</button>
<button onClick={()=>dispatch({type:DECREAMENT_COUNT,payload:5})}>Decrement by 5</button>
<br />
<button onClick={()=>dispatch({type:RESET_COUNT})}>RESET</button>
*/}
<button onClick={()=>dispatch({type:INCREAMENT_COUNT,payload:{value:1}})}>Increment</button>
<br />
<span>{state.count}</span>
<br />
<button onClick={()=>dispatch({type:DECREAMENT_COUNT})}>Decrement</button>
<button onClick={()=>dispatch({type:DECREAMENT_COUNT,payload:{value:5}})}>Decrement by 5</button>
<br />
<button onClick={()=>dispatch({type:RESET_COUNT})}>RESET</button>
</>
)
}