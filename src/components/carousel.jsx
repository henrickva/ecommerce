//Colocar as imagens hospedando no site https://pt-br.imgbb.com/
import { useEffect, useState } from "react"

export default function Carrousel() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5173//static/product.json' )
        .then((response) =>response.json())
        .then(setData);
    },[])

    if(!data || !data.length) return null; 

    return(
        <div className="container">
            <h1 className="flex justify-center pb-2 text-xl"> 
                Aqui você encontra 
            </h1>

            <div className="py-3 flex overflow-x-auto scroll-smooth scrollbar scrollbar-thumb-dark-blue scrollbar-thumb-rounded-xl">
                {data.map((item)=>{

                    const  {id, name, price, oldPrice, imagem} = item;


                    return(<div className=" bg-slate-50 rounded m-3 p-3 w-72 flex-none" key ={id}> 
                            <div className="image object-cover">
                                <img src={imagem} alt={name} className="rounded"></img>
                            </div>

                            <div className=" flex flex-col items-center ">
                                <span className="text-xl">{name}</span>
                                <span className="text-xs py-2 line-through "> {oldPrice}</span>
                                <span className="bg-dark-blue p-1 px-2 rounded text-white"> {price} </span>
                            </div>
                        </div>)
                })}
            </div>
        </div>
    )
}