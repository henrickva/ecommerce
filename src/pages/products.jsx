import React from "react"
import DATA from "../assets/data"
import { NavLink } from "react-router-dom"

export default function ProductPage(){

    const cardItem = (item) => {
        return(
            <div className=" bg-slate-50 rounded m-3 p-3 w-72 flex-none" key ={item.id}> 
                <div className="image object-cover">
                    <img src={item.imagem} alt={item.name} className="rounded"></img>
                </div>

                <div className=" flex flex-col items-center ">
                    <span className="text-xl">
                        {item.name}
                    </span>

                    <span className="text-xs line-through text-red-300"> 
                        {item.oldPrice}
                    </span>

                    <span> 
                        {item.price} 
                    </span>

                    <NavLink to={`/Skates/${item.id}`}
                        className="bg-dark-blue text-white p-1 px-2 mt-1 rounded hover:bg-blue-900"
                    >
                        Compre Agora
                    </NavLink> 
                </div>
            </div>)
    }

    return(
        <div className="h-full flex justify-center">
            <div className='container'>
                <div className="grid grid-flow-row-dense grid-cols-4  ">
                   {DATA.map(cardItem)}
                </div>
            </div>               
        </div>
    )
}

