import { Canvas } from "@react-three/fiber"
import { workExperiences } from "../Data"

const Experience = () => {
  return (
    <section className="c-space my-20">
        <div className="w-full text-white-600">
        <h3 className="head-text">My Work <span className="text-purple-400">Experience</span></h3>
        <div className="work-container">
            <div className="work-canvas">
            <Canvas>
            </Canvas>
            </div>
            <div className="work-content">
                <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                    {workExperiences.map(({id,name,pos,duration,title,icon,animation})=>(
                        <div className="work-content_container group" key={id}>
                            <div className="flex flex-col h-full justify-start items-center py-2">
                                <div className=" work-content_logo">
                                    <img src={icon} alt="logo" className="w-full h-full" />
                                </div>
                                <div className="work-content_bar"/>

                            </div>
                            <div className=""></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Experience