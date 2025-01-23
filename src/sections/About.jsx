import Globe from "react-globe.gl"
import Button from "../components/Button"
import { Suspense, useState } from "react";
import TechStack from "../components/TechStack";
import { Canvas } from "@react-three/fiber";
import {  OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";


 
const About = () => {
  const [textCopy,setTextCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("shayankhanyousufzai@gmail.com");
    setTextCopy(true);
    setTimeout(() => {
      setTextCopy(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
      <div className="col-span-1 xl:row-span-3">
    <div className="grid-container">
      <img src="/assets/grid1.png" alt="grid1" className="w-full sm:h-[276px] h-fit object-contain" />
      <div className="">
        <p className="grid-headtext">Hi, I am Shayan</p>
        <p className="grid-subtext">with 50000 years of Experience, I have hold my skill in Frontend development</p>
      </div>
    </div>
      </div>

    <div className="col-span-1 xl:row-span-3">
    <div className="grid-container">
      {/* <img src="/assets/grid2.png" alt="grid2" className="w-full sm:w-[276px] h-fit object-contain"  /> */}
      <Canvas>
                    <ambientLight intensity={1}/>
                    <directionalLight position={[10, 10, 5]} />
                    
                    <Suspense fallback={<CanvasLoader/>}>
                            <group  position={[0.1,-2,0]} rotation={[0,-0.1,0]}>
                                <TechStack  />
                            </group>
                        </Suspense>
                   
                    <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2}/>
                </Canvas>
      <div className="">
<p className="grid-headtext">Tech Stack</p>
<p className="grid-subtext">I specialized in Js/Ts with the focus on react and next js</p>
      </div>
    </div>
    </div>


    <div className="col-span-1 xl:row-span-4">
    <div className="grid-container">
    
      <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
          <Globe
          height={386}
          width={386}
          backgroundColor="rgba(0,0,0,0)"
          backgroundImageOpacity={0.5}
          showAtmosphere
          showGraticules
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
labelsData={[
  {lat:40,lng:-100,text:"I'm here",color:"white",size:20},
]}
          />
      </div>
      <div className="">
        <p className="grid-headtext">I work remotely across all time zone</p>
        <p className="grid-subtext">I am based in Pakistan</p>
        <Button name="Contact Me" isBeam containerClasses="w-full mt-10"/>
      </div>
    </div>
    </div>
 
 
 
    <div className="xl:col-span-2 xl:row-span-3">
    <div className="grid-container">
      <img src="/assets/grid3.png" alt="grid3" className="w-full sm:h-[266px] h-fit object-contain" />
      <div className="">
      <p className="grid-headtext">My Passion For Coding</p>
      <p className="grid-subtext">I love solving problem and building things through code</p>
      </div>
     
    </div>
    </div>
  
  
    <div className="xl:col-span-1 xl:row-span-2">
    <div className="grid-container">
      <img src="/assets/grid4.png" alt="grid4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
      <div className="space-y-2">
      <p className="grid-headtext text-center">Contact Me</p>
     <div className="copy-container" onClick={handleCopy}>
        <img src={textCopy ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy"  className="w-7 h-7 "/>
        <p className= 'lg:text-md md:text-xl font-medium text-gray_gradient hover:text-white'>shayankhanyousufzai@gmail.com</p>
     </div>
      </div>
     
    </div>
    </div>



      </div>
    </section>
  )
}

export default About