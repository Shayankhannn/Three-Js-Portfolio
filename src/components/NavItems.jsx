import { navLinks } from "../Data"


const NavItems = () => {
  return (
    <ul className="nav-ul  ">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li ">
        <a href={item.href} className="nav-li_a" >
          {item.name}
        </a>
      </li>
    ))}
  </ul>
  )
}

export default NavItems