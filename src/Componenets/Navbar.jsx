import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'


const Navbar = () => {
  const navigate=useNavigate();
  const navigateToLogin=()=>{
    navigate("/login")
  }
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-2xl" href="/">FarmXpress</a>
  </div>
  <div className="flex-none gap-2">
    {/* <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div> */}
    <div className='flex gap-10 text-lg mr-5 font-bold'>
    <Link to="/"><div><a href='#about'> About </a></div></Link>
    <div><a href='#features'>Features</a></div>
    <div><a href='#contact'>Contact Us</a></div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between" onClick={navigateToLogin}>
            Login
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Navbar