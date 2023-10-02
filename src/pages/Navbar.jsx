import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

   const linkStyle = {
    fontFamily: 'Permanent Marker, cursive', 
  };

  return (
      <nav className="bg-blue-500 p-7 flex flex-col items-center">
      <div className="absolute left-12 top-8"> 
      <Link to="/">
      <img src="https://cdn-icons-png.flaticon.com/128/9073/9073032.png" alt="Spinning Image" className="w-14 h-14 hover:scale-110 transform transition-transform duration-500"/>
      </Link>
      </div>
      <div className="text-white text-2xl mb-4 font-bold" >Home Hunt</div>
      <ul className="flex space-x-4 text-white">
        <li className="hover:scale-110 transition-transform duration-900"><a className="hover:text-orange-300 mx-9" href="/" style={linkStyle}>Home</a></li>
        <li className="hover:scale-110 transition-transform duration-900"><a className="hover:text-orange-300 mx-9" href="/buy" style={linkStyle}>Buy</a></li>
        <li className="hover:scale-110 transition-transform duration-900"><a className="hover:text-orange-300 mx-9" href="/rent" style={linkStyle}>Rent</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
