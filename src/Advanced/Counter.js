import React,{useState,useContext} from "react"
import ThemeContext from "./ThemeContext"
import  AppTheme from "./AppTheme"

const Counter=()=>{
const [count,setCount]=useState(0);
//const style=useContext(ThemeContext);
//const styleusage={backgroundColor:style}
//const tempStyle=style.style?{backgroundColor:style.style}:{backgroundColor:style}
const {style}=useContext(ThemeContext);
console.log("o",style)
console.log("p",AppTheme[style])
console.log("y",AppTheme[style].backgroundColor)
const tempStyle={backgroundColor:AppTheme[style].backgroundColor}
console.log("t",tempStyle)

return (
<>

{/*
 <button onClick={()=>setCount(prevState=>prevState-1)} style={tempStyle.backgroundColor}>reduce</button>
 <br />
 <div>  {count}     </div>
 <br />
 <button onClick={()=>setCount(prevState=>prevState+1)} style={tempStyle.backgroundColor}>increase</button>
 */}
<button onClick={()=>setCount(prevState=>prevState-1)} style={tempStyle}>reduce</button>
<br />
<div>  {count}     </div>
<br />
<button onClick={()=>setCount(prevState=>prevState+1)} style={tempStyle}>increase</button>

</>
)
}

export default Counter;

