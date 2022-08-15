import React,{useEffect,useState,useRef} from 'react';

const FormD=()=>{

const ref1=useRef(null)

const onFocus=()=>{
document.querySelector("#name").value="shashank"
ref1.current.value="biku"

}
const onBlur=()=>{
document.querySelector("#name").value="srivastava"

}

return(
<>
<form >
    <label>First Name  </label>
    <input  type="text" id="name" onFocus={onFocus} onBlur={onBlur} ref={ref1}/>

</form>

</>
)
}

export default FormD