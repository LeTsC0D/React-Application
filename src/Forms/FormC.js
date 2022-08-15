import React,{useEffect,useState,useRef} from 'react';
import { Button } from 'reactstrap';

const FormC=()=>{
const [fname,setFname]=useState("")
const ref1=useRef(null)

const handlefirstName=(e)=>{
setFname(e.target.value)
}
const handleCourse=(e)=>{
}
const handleFormSubmit=(e)=>{
e.preventDefault();
console.log(ref1.current.value)
ref1.current.value="shashank"

}
return(
<>
<form onSubmit={handleFormSubmit}>
    <label>First Name  </label>
    <input  type="text" value={fname}   onChange={(e)=>handlefirstName(e)}  ref={ref1}/>
    <select value="course" onChange={()=>handleCourse}>
    <option>English</option>
    <option>Maths </option>
    <option>Science</option>
    </select>
    <Button type="submit" color="danger">Click Me </Button>


  <Button  color="primary" >  BootStrap Button </Button>

</form>




</>


)
}

export default FormC