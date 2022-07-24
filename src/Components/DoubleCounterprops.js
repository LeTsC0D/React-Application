import React from 'react';
const DoubleCounter=(props)=>{
console.log("DoubleCounterprops")
return(
<div>
<button onClick={()=>props.increment()}>Increment x2</button>
<button onClick={()=>props.decrement()}>Decrement x2</button>
</div>
)
}

export default DoubleCounter;