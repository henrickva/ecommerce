export default function Header(){
    return (
        <div className="bg-dark-blue font-fredoka text-white flex justify-center sticky top-0">
            <div className="container flex px-6 py-2 justify-between items-center">
                <a href="/" className="text-2xl"> ASTRO BOY </a>
                <ul className="flex">
                    <li><a href="/" className="px-6 hover:text-gray-300">Home</a></li>
                    <li><a href="/main" className="px-6hover:text-gray-300">Contato</a></li>
                    <li><a href="/teste" className="pl-6 hover:text-gray-300">Quem somos ?</a></li>
                </ul> 
            </div>
        </div>     
    )
}