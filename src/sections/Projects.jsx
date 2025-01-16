import { myProjects } from "../Data"


const Projects = () => {
  return (
    <section className="c-space my-20">
        <p className="head-text">My Work</p>
    
    <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
            <div className="absolute top-0 right-0">
                <img src={myProjects[0].spotlight} alt="spotlight" className="h-96 w-full object-cover rounded-xl" />
            </div>

                <div className="p-3 backdrop-blur-3xl backdrop-filter w-fit rounded-lg" style={myProjects[0].logoStyle}>
                    <img src={myProjects[0].logo} alt="logo" className="w-10 h-10 shadow-sm" />
                </div>

                <div className="flex flex-col gap-5 text-white-600 my-5 ">
                    <p className="text-white text-2xl font-semibold animatedText"> {myProjects[0].title} </p>
                    <p className=" animatedText"> {myProjects[0].desc} </p>
                    <p className=" animatedText"> {myProjects[0].subdesc} </p>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-5">
                    <div className="flex items-center gap-3">
                        {myProjects[0].tags.map((tag,index) => (
                            
                        ))}
                    </div>
                </div>

        </div>
    </div>
    
    </section>
  )
}

export default Projects