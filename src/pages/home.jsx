import Image from '../components/image'
import Block from "../components/block";
import Carrousel from '../components/carousel';
import Banner from '../components/banners';

export default function Home() {
    return(
        <div> 
            <div>
                <Image />
            </div>

            <div className="h-full bg-gray-300 flex justify-center">
                <div className='container'>
                    <Block />
                    <Carrousel />
                    <Banner />
                </div>               
            </div>
        </div>
    )
}