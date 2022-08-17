import React ,{useEffect,useState}  from 'react'
import Data from './Data'
import Buttons from "./Buttons"
import Card from "./Card"
import {useSearchParams} from 'react-router-dom'

const Menu=()=>{
const [dish,setDishes]=useState(Data)
const [searchParams,setSearchParams] =useSearchParams();
//console.log(Data)

const dishcategories=[...new Set(Data.map((dish)=>dish.category))]
console.log(dishcategories)

const filteredishes=(category)=>{
const filtereddishesnew=Data.filter((dishes)=>{
return dishes.category===category
})
setDishes(filtereddishesnew)
console.log(filtereddishesnew)
}

useEffect(()=>{
console.log(searchParams)
if(searchParams.get('category')){
filteredishes(searchParams.get('category'));
return;
//filter the data
//console.log(searchParams.get('category'))
//var filteredish=dish.filter((data)=>data.category===searchParams.get('category'))
//console.log(filteredish)
}
setDishes(Data)
},[searchParams])

//const setSearchParams1=(args)=>{
//console.log("yes",args)
//setSearchParams({"category":"ksdkf"})
//}

return (
<>
    <h1>Menu Card</h1>
    <div >
    <Buttons dishcategories={dishcategories} setSearchParams={setSearchParams}></Buttons>
    </div>
    <div>
    {
    dish.map((data,index)=>{
    return (
    <>
    <Card dish={data} key={data.id}/>
    </>
    )
    })
    }
    </div>
</>
)
}

export default Menu;