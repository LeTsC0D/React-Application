import React from "react"

const Buttons=({dishcategories,setSearchParams})=>{

return (
<>
<div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
{
dishcategories.map((dishcategory,index)=>{
return(
<button key={index} onClick={()=>{setSearchParams({category:dishcategory})}}>{dishcategory}</button>
)
})
}
<button onClick={()=>{setSearchParams({category:""})}}>
All
</button>
</div>
</>
)
}

export default Buttons