import { Suspense, useState } from "react"
import { myProjects } from "../Data"
import { Canvas } from "@react-three/fiber"
import { Center, OrbitControls } from "@react-three/drei"
import DemoComputer from "../components/DemoComputer"
import CanvasLoader from "../components/CanvasLoader"


const Projects = () => {
  const [selectedProjectIndex,setSelectedProjectIndex] = useState(0)
    const handleNavigation = (direction)=>{
        setSelectedProjectIndex((prevIndex)=>{
            if(direction === 'next' && prevIndex < myProjects.length - 1){
                return prevIndex + 1
            }else if(direction === 'previous' && prevIndex > 0){
                return prevIndex - 1
            }
            return prevIndex
        })
    }
        const currentProject = myProjects[selectedProjectIndex]
    return (

    <section className="c-space my-20">
        <p className="head-text">My Work</p>
    
    <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
            <div className="absolute top-0 right-0">
                <img src={currentProject.spotlight} alt="spotlight" className="h-96 w-full object-cover rounded-xl" />
            </div>

                <div className="p-3 backdrop-blur-3xl backdrop-filter w-fit rounded-lg" style={currentProject.logoStyle}>
                    <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm" />
                </div>

                <div className="flex flex-col gap-5 text-white-600 my-5 ">
                    <p className="text-white text-2xl font-semibold animatedText"> {currentProject.title} </p>
                    <p className=" animatedText"> {currentProject.desc} </p>
                    <p className=" animatedText"> {currentProject.subdesc} </p>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-5">
                    <div className="flex items-center gap-3">
                        {currentProject.tags.map((tag,index) => (
                          <div className="tech-logo" key={index}>
                                <img src={tag.path} alt={tag.name} />
                          </div>
                        ))}
                    </div>
                    <a href={currentProject.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 cursor-pointer text-white-600">
                        <p className="hover:text-white/[0.2]">Check My Site</p>
                        <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                    </a>
                </div>
                <div className="flex justify-between items-center mt-7">
                <button className="arrow-btn" onClick={()=>handleNavigation("previous")}>
                    <img src="/assets/left-arrow.png" alt="arrow" />
                </button>
                <button className="arrow-btn" onClick={()=>handleNavigation("next")}>
                    <img src="/assets/right-arrow.png" alt="arrow" />
                </button>
                </div>

        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                <Canvas>
                    <ambientLight intensity={1}/>
                    <directionalLight position={[10, 10, 5]} />
                    <Center>
                    <Suspense fallback={<CanvasLoader/>}>
                            <group scale={2} position={[0.5,-1,0]} rotation={[0,-0.1,0]}>
                                <DemoComputer  scale={1.3}/>
                            </group>
                        </Suspense>
                    </Center>
                    <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2}/>
                </Canvas>
        </div>
                        
    </div>
    
    </section>
  )
}

export default Projects