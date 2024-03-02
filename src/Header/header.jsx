import image from '../assets/Logo.png'
import './header.css'
import { NavLink } from 'react-router-dom'
const Header=()=>{
    return(
        <div className='lg:flex lg:items-center lg:justify-between  lg:mx-36 lg:mt-5 md:flex md:items-center md:justify-between md:mx-20'>
      <div className='text-center flex items-center justify-center pt-5 lg:text-left lg:pt-0 md:text-left md:pt-0  '><img  src={image} alt="donation campaign logo" />
      </div>
     
      <div className="dropdown lg:hidden md:hidden mt-5">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 z-[2] p-2 shadow bg-base-100 rounded-box w-36">
      <NavLink  to='/'>Home</NavLink>
        <NavLink to='/donation'>Donation</NavLink>
        <NavLink to='/statistics'> Statistics</NavLink>
      </ul>
    </div>
  
        <div className='lg:flex gap-11 items-center hidden  md:flex md:gap-7  md:items-center '>
        <NavLink  to='/'>Home</NavLink>
        <NavLink to='/donation'>Donation</NavLink>
        <NavLink to='/statistics'> Statistics</NavLink>
        </div>
        </div>
    )
}
export default Header