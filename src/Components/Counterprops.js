import React from 'react';
const Counter=(props)=>{
console.log("Simple Counterprops")
return(
<div>
<button onClick={()=>props.increment()}>Increment</button>
<button onClick={()=>props.decrement()}>Decrement</button>
</div>
)
}

export default Counter;