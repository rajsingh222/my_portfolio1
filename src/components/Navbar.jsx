import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
// import { FaSquareXTwitter } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
// import { FaInstagram } from 'react-icons/fa'
import { SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';
import { IoCall } from "react-icons/io5";


import logo from "../assets/kevinRushLogo.png"
const Navbar = () => {
  return (

<nav className='mb-20 flex items-center justify-between py-6' >
    <div className='flex flex-shrink-0 items-center'>
       {/* <img  className="mx-2 w-10" src={logo} alt='logo'/>  */}
              

    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
      <Link to="https://www.linkedin.com/in/rajsingh77" target="_blank">
      <FaLinkedin/>
      </Link>

      <Link to="https://github.com/rajsingh222" target='_blank'>

      <FaGithub/>
      
      </Link>
      
      
    <a href='mailto:singhraj.gop@gmail.com'>
      <SiGmail/>


    </a>
     
     

    <Link to="https://twitter.com/RajSingh_22" target='_blank'>
    <FaXTwitter />
    </Link>

    <a href='tel:9504578077'>
    <IoCall/> 

    </a>


    </div>
</nav>
    
  )
}

export default Navbar
