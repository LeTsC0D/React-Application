import React,{useEffect,useState} from 'react';
import MyContext from "./context"
import {useCustomHook} from "./context"
//import {context1} from "./context"

//import useCustomHook from "./context"
const Child3=()=>{
const consumer1=useCustomHook();
//const consumer1=context1;
console.log(consumer1.data1.bool)
return(

<>
<br />
Child3
<br />
{consumer1.data1.name}

<MyContext.Consumer>
{
(context)=>(
<div>
{console.log(context.data)}
<h3>some information</h3>
<p>{`${context.data}`}</p>
<p>{context.data1.name}</p>
{context.data}
<br />
</div>
)

}
</MyContext.Consumer>
</>
)
}

export default Child3

