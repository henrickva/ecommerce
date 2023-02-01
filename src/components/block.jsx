import Banner from '../imagens/Banner 2.png'
import Banner1 from '../imagens/Banner 1.png'
import Banner2 from '../imagens/Banner 3.png'

export default function Block(){
    return(
        <div className="py-3 pb-20">
            <div className="container flex justify-between">
                <a href='/'><img src={Banner} className="w-[26em] rounded"alt="..."></img></a>
                <a href='/'><img src={Banner1} className="w-[26em] rounded"alt="..."></img></a>
                <a href='/'><img src={Banner2} className="w-[26em] rounded"alt="..."></img></a> 
            </div>
        </div>
        
    )
}