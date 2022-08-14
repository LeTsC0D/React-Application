import React,{useEffect,useState} from 'react';
import cN from 'classnames'

const CSS=(props)=>{
console.log("css",props.props)
return (
<div>
{/*<div   className={`${props.props? "active always":""}`} >Styling CSS in REACT </div>*/}
<div   className={cN({
always:props.props,
active:props.props
})} >Styling CSS in REACT </div>
<br />
<div style={{padding:'0px 10px', position: 'absolute',fontSize:"40px", color:"green", backgroundColor:"yellow"}}>style in React</div>

<br />
<br />
<br /><br />


</div>
)

}

export default CSS;