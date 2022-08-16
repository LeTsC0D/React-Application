import React,{useEffect} from 'react'
import {useSearchParams,useLocation} from 'react-router-dom'

export default function SearchParam(){
const [searchParams,setSearchParams] =useSearchParams()
const location=useLocation()
console.log(searchParams)
console.log(location)
return(
<>
<button onClick={()=>setSearchParams({blogCategory:'scifi',blogId:1})}>Set Search Param </button>
<div> SearchParam  </div>
</>
)
}