import { useEffect, useState } from "react"
import { NavLink } from 'react-router-dom'


export default function Carrousel() {
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        fetch(`${window.location.origin}/static/product.json` )
        .then((response) =>response.json())
        .then(setProduct);
    },[])

    if(!product || !product.length) return null; 

    return(
        <div className="container">
            <h1 className="flex justify-center pb-2 text-dark-blue text-2xl border-b border-blue-900"> 
                AQUI VOCÊ ENCONTRA
            </h1>

            <div className="py-3 flex overflow-x-auto scroll-smooth scrollbar scrollbar-thumb-dark-blue scrollbar-thumb-rounded-xl">
                {product.map((item)=>{

                    const  {id, name, imagem} = item;


                    return(
                        <div className=" bg-slate-50 rounded m-3 p-3 w-72 flex-none" key ={id}> 
                            <div className="image object-cover">
                                <img src={imagem} alt={name} className="rounded"></img>
                            </div>

                            <div className=" flex flex-col items-center py-6">
                                <span className="text-xl">
                                    {name}
                                </span>
                            
                                <NavLink to={`/${item.name}`}
                                    className="bg-dark-blue text-white p-1 px-2 mt-1 rounded hover:bg-blue-900" 
                                >
                                    Descubra Mais
                                </NavLink>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}