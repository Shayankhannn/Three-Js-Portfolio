import { Canvas } from "@react-three/fiber"

import HackerRoom from "../components/HackerRoom"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
import { PerspectiveCamera } from "@react-three/drei"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../Data"
import Target from "../components/Target"
// import { Leva, useControls } from "leva"


const Hero = () => {
  // const x = useControls('HackerRoom',{
  //   rotationX:{
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
      
  //   },
  //   rotationY:{
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
      
  //   },
  //   rotationZ:{
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
      
  //   },
  //   positionX:{
  //     value: 0,
  //     min: -10,
  //     max: 10,
      
  //   },
  //   positionY:{
  //     value: 0,
  //     min: -10,
  //     max: 10,
      
  //   },
  //   positionZ:{
  //     value: 0,
  //     min: -10,
  //     max: 10,
      
  //   },
  //   scale:{
  //     value: 1,
  //     min: 0.1, 
  //     max: 10,
  //   }
  // })
  const isSmall = useMediaQuery({maxWidth:440})
  const isMobile = useMediaQuery({maxWidth:768});
  const isTablet = useMediaQuery({minWidth:769,maxWidth:1024});

  const sizes = calculateSizes(isSmall, isMobile, isTablet)

  return (
    
    <section className="min-h-screen w-full flex flex-col relative">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 ">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi, I am Shayan <span className="waving-hand">👋</span></p>
        <p className="hero_tag text-gray_gradient ">Building Products and Brands </p>
        </div>
        <div className="w-full h-full absolute inset-0">
          {/* <Leva/> */}
        <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader/>}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            {/* <HackerRoom
            //  scale={0.05} 
            //  position={[0, 0, 0]} 
            //  rotation={[0,-Math.PI/2,0]}
            scale={[x.scale]}
             position={[x.positionX,x.positionY,x.positionZ,]}
            rotationX={[x.rotationX,x.rotationY,x.rotationZ]}
             
             /> */}
             <HackerRoom
  scale={sizes.deskScale}
  position={sizes.deskPosition}
  rotation={[0, -Math.PI, 0]} 
/>
<group>
  <Target position={sizes.targetPosition}/>
</group>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} />
            </Suspense>
        </Canvas>
        </div>
    </section>  
  
  )
}

export default Hero