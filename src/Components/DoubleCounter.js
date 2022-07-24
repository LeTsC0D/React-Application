import React,{useEffect,useState} from 'react';
const DoubleCounter=()=>{
//in class based component
//constructor(props){
//    super(props);
//    tis.state={
//    count=1;
//    }
//}
const [count,setCount]=useState(0);
console.log("DoubleCounter")
return(
<div>
<h2>Double Counter Example :{count}</h2>
<br />
<button onClick={()=>setCount(count+2)}>Increment</button>
<button onClick={()=>setCount(count-2)}>Decrement</button>
</div>
)
}

export default DoubleCounter;