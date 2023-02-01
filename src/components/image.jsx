import Pic from '../imagens/imagem1.jpg'

export default function Image() {

  return (
        <div className=' h-screen flex object-contain'>
            <img src={Pic} alt='...' className="container-lg w-screen h-screen object-cover fixed -z-10"></img>
            <div className='text-white flex flex-col justify-center items-center w-screen'>
              <h1 className='text-2xl pb-3'>A JORNADA COMEÇOU</h1>
              <p> Venha para a maior loja de skate da GALAXIA</p>
            </div> 
        </div>  
  )
}

