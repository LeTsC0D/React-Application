import React,{useEffect,useState} from 'react';
const Todo=()=>{

const [itemList,setItemList]=useState([]);
const [str,setStr]=useState("");
const handleStrChange=(event)=>setStr(event.target.value);
const addItemToList=()=>setItemList([str,...itemList]);
const removeItem=(index)=>{
setItemList(itemList.filter((item,index1)=>index!==index1));
}

//console.log("Simple Todo")
return(
<div className="App">
<div>TODO Application</div>
<input type="text" onChange={handleStrChange} value={str}/>
<button  onClick={()=>addItemToList()}>Add</button>
{itemList.map((ele,index)=>{
return <div>
<h2 key={index}>{ele}</h2>
<button onClick={()=>removeItem(index)}>Delete</button></div>}
)}
</div>
)
}

export default Todo;