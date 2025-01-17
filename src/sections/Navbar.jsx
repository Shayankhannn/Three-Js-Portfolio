import React from 'react'
import NavItems from '../components/NavItems'

const Navbar = () => {
    const [isOpen,setIsOpen] = React.useState(false)
    const toggleMenu =  ()=>{
        setIsOpen((prevOpen)=>!prevOpen)
    }
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
            <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center py-5 mx-auto c-space">
            <a href="/" className="text-neutral-400 text-xl font-bold hover:text-white transition-colors">
            Shayan Khan
            </a>
            <button onClick={toggleMenu} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex ' aria-label='toggle menu'>
                <img src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"} alt="toggle" className='w-6 h-6' />
            </button>
            <nav className='sm:flex hidden'>
              <NavItems/>
            </nav>
            </div>
            </div>
            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
              <nav className='p-5'>
                 <NavItems/>
              </nav>
            </div>
    </header>
  )
}

export default Navbar