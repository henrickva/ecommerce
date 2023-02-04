import React from "react";
import { useParams } from "react-router-dom";
import DATA from "../assets/data";


export default function ProductDetail(){

    const proid= useParams();
    const proDetail = DATA.filter(x=>x.id == proid.id)
    const product = proDetail[0];

    return(
        <>
        <div className="container">
            <div className="flex flex-col"> 
                <div>
                    <img src={product.imagem}
                        className="w-[200px] h-[100]"
                    />
                    <h1>{product.price}</h1>
                    <p>{product.name}</p>
                </div>
            </div>   
        </div>
        </>
    )
}