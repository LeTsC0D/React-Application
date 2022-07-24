import React,{useRef,useEffect,useState} from 'react';
const Timer=()=>{
const timerIdRef=useRef(0);
const [count,setCount] = useState(0);
const startHandler =()=>{
if(timerIdRef.current){
setCount(0);
return;
}
timerIdRef.current=setInterval(()=>setCount(count=>count+1),1000);
}
const stopHandler=()=>{
clearInterval(timerIdRef.current);
timerIdRef.current=0;
}
useEffect(()=>{
return()=>clearInterval(timerIdRef.current);
},[])
return (
<div>
<div>Timer Application: {count}s</div>
<div>
<button onClick={startHandler}>start</button>
<button onClick={stopHandler}>stop</button>
</div>
</div>

);
}

export default Timer;