import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='header sticky top-0 text-1xl flex justify-between items-center text-white pt-3'>
     <div className='font-sans font-bold text-4xl ml-5'>Mosh</div>
      <ul className='flex justify-between w-1/2 items-center mr-5'>
        <li><a href='/Subscribe'></a>Subscribe</li>
        <li><a href="/courses"></a>Courses</li>
        <li><a href="learning Paths"></a>Learning Paths</li>
        <li><a href="forum"></a>Forum</li>
        <li><a href="contact"></a>Contact</li>
        <button className='p-2 hover:bg-pink-400 '>Member Area</button>
      </ul>
    </nav>
  )
}

export default Navbar
