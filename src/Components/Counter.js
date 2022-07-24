import React,{useEffect,useState} from 'react';
const Counter=()=>{
//in class based component
//constructor(props){
//    super(props);
//    tis.state={
//    count=1;
//    }
//}
const [count,setCount]=useState(0);
console.log("Simple Counter")
return(
<div>
<h2>Counter Example :{count}</h2>
<br />
<button onClick={()=>setCount(count+1)}>Increment</button>
<button onClick={()=>setCount(count-1)}>Decrement</button>
</div>
)
}

export default Counter;