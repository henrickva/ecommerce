import Imagem1 from '../imagens/BannerBaixo1.png'
import Imagem2 from '../imagens/BannerBaixo2.png'
export default function Banner(){
    return(
        <div className='flex justify-around py-6'>
            <img src={Imagem1} className='w-[600px] rounded'></img>
            <img src={Imagem2} className='w-[600px] rounded'></img>
        </div>
    )
}