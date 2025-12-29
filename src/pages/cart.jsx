import { useLocation } from "react-router-dom"
import { currencyFormatter } from "../utils/helper"

const CartPage=()=>{
    const {state} =useLocation()
    if(!state)return <div className="text-gray-400 font-bold text-xl py-40 text-center">No picked item yet</div>
return <div className="container py-40 flex flex-col items-center gap-4">
    <div className="capitalize font-bold text-2xl lg:text-4xl flex items-start  w-full">your items</div>
<section className="flex justify-between">
    <div className="bg-white flex flex-col items-center">
    <img src={state.productImg} alt="" className="h-[200px]"/>
<div className="font-bold">{state.shirtName}</div>
<div>price:{ currencyFormatter(state.newPrice)}</div>
<div>Quantity:{state.qty}</div>

</div>

 <div className="bg-white flex flex-col items-center">
    <img src={state.productImg} alt="" className="h-[200px]"/>
<div className="font-bold">{state.shirtName}</div>
<div>price:{ currencyFormatter(state.newPrice)}</div>
</div>

 <div className="bg-white flex flex-col items-center">
    <img src={state.productImg} alt="" className="h-[200px]"/>
<div className="font-bold">{state.shirtName}</div>
<div>price:{ currencyFormatter(state.newPrice)}</div>
</div>
</section>
</div>
}
export default CartPage