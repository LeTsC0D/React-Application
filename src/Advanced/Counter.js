import React,{useState,useContext} from "react"
import ThemeContext from "./ThemeContext"

const Counter=()=>{
const [count,setCount]=useState(0);
const style=useContext(ThemeContext);
//const styleusage={backgroundColor:style}

const tempStyle=style.style?{backgroundColor:style.style}:{backgroundColor:style}



return (
<>
<button onClick={()=>setCount(prevState=>prevState-1)} style={tempStyle}>reduce</button>
<br />
<div>  {count}     </div>
<br />
<button onClick={()=>setCount(prevState=>prevState+1)} style={tempStyle}>increase</button>
</>
)

}

export default Counter;