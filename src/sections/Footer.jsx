import { FaLocationArrow } from "react-icons/fa"
import MagicButton from "../components/ui/MagicButton"
import { socialMedia } from "../Data"



const Footer = () => {
  return (
    <footer className='w-full pt-20 mt-20 pb-10 relative' id='contact'>
        <div className="w-full absolute left-0 -bottom-1 min-h-96">
            <img src="/assets/footer-grid.svg" alt="grid" className='w-full h-full opacity-50' />
        </div>
        <div className="flex flex-col items-center text-white">
<h1 className="heading lg:max-w-[45vw]">
    Ready To take 
    <span className="text-purple">Your</span>
    Digital Presense To Next Level
</h1>
<p className="text-white-200 md:mt-10 my-5 text-center">
    Reach Out To Me Today and lets discuss how I can help you  achieve your goals.
</p>
<a href="#">
    <MagicButton position="left" icon={<FaLocationArrow/>} otherClasses='gap-4' title="Contact Me" />
</a>

        </div>
        <div className="flex mt-16 md:flex-row flex-col  justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-purple-300">
          Copyright © 2025 Shayan Khan
        </p>
        <div className="flex items-center md:gap-3 gap-6 ">
            {socialMedia.map(({id,img,link})=>(
                 <div
                 key={id}
                 className="w-10 h-10  cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
               >
                <a href={link} >
                 <img src={img} alt="icons" width={20} height={20} />
                 </a>
               </div>
            ))}
        </div>
        </div>
        
    </footer>
  )
}

export default Footer