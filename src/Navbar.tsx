import { NavLink } from 'react-router-dom'

const Navbar = () => {

 return (
  <div className='navbar gap-2'>
      <NavLink className={({ isActive }) => isActive ? 'btn btn-active' : 'btn btn-primary'}  to='/'>Home</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'btn btn-active' : 'btn btn-primary'} to='/profile'>Profile</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'btn btn-active' : 'btn btn-primary'} to='/contact'>Contact</NavLink>
  </div>
 )
}

export default Navbar