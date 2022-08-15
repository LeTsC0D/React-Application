import React,{useState,useContext} from "react"


const Wrapper=({children})=>{
return (
<>
<div>{children('here')} </div>
</>
)
}

export default Wrapper