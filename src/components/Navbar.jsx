import { Link, NavLink} from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from '../assets/images/logonegro.png'
//import {Logo} from '../assets/images/logo-png'

const Navbar = () => {
  const [togglerNav, setTogglerNav] = useState(false);

  const clickHandler = () => {
    setTogglerNav(!togglerNav);
  };

  return (
    <div>
    <nav className='font-bold fixed w-screen h-auto md:h-20 p-2 bg-fifth max-w-8xl mx-auto mb-16 flex justify-between md:items-center z-10'> 
    
      <Link to='/'>
        <img src={Logo} className='flex w-40 md:w-60 cursor-pointer hover:scale-110 ease-in duration-200 items-center' />
      </Link>
      <div
        className={
          togglerNav ? 'flex flex-col gap-4 md:inline' : 'hidden md:inline'
        }
      >
        <NavLink className='nav-link' onClick={clickHandler} to='/'>
          Home
        </NavLink>
        <NavLink className='nav-link' onClick={clickHandler} to='/lastjobs'>
          Trabajos
        </NavLink>
        <NavLink className='nav-link' onClick={clickHandler} to='/aboutus'>
          Nosotros
        </NavLink>
        <NavLink className='nav-link' onClick={clickHandler} to='/services'>
          Servicios
        </NavLink>
        <NavLink className='nav-link' onClick={clickHandler} to='/wrapper'>
          Galería
        </NavLink>
        <NavLink className='nav-link' onClick={clickHandler} to='/contact'>
          Contacto
        </NavLink>
      </div>
      <button
        className=' inline md:hidden self-start nav-link cursor-pointer'
        onClick={clickHandler}
      >
        {togglerNav ? <AiOutlineClose /> : <FaBars />}
      </button>
    </nav>
    </div>
  );
}

export default Navbar;

