export default function Card({dish}){
console.log(dish)

return(
<>
<div style={{display:'flex',flexDirection:'column',width:'500px'}}>
<div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
<span> {dish.title} </span>
<span> {dish.prices} </span>
</div>
<div>
<p>
{dish.desc}
</p>
</div>
</div>
</>
)
}