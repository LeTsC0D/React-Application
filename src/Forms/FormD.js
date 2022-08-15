import React,{useEffect,useState,useRef,createRef} from 'react';

const FormD=()=>{
const[count,setCount]=useState(0)
const ref1=useRef(null)

const ref2=useRef()
const createref=createRef()
console.log(createref)
if(!createref.current){
//createref loose in every render as there is change in value so the execution enter into
// this if loop
createref.current=count;
}
if(!ref2.current){
ref2.current=count;
}

const onFocus=()=>{
document.querySelector("#name").value="shashank"
ref1.current.value="biku"
}

const onBlur=()=>{
document.querySelector("#name").value="srivastava"
}

return(
<>
{createref.current}
<br/>
{ref2.current}
<br/>
<form >
    <label>First Name  </label>
    <input  type="text" id="name" onFocus={onFocus} onBlur={onBlur} ref={ref1}/>
</form>
    <div>{count} </div>
    <button onClick={()=>setCount(prevState=>prevState+1)}>
    Increase
    </button>
</>
)
}

export default FormD