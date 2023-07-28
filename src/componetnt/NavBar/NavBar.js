import React, { useState, useEffect } from 'react';
import "./NavBar.css";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix-logo" />
      <ul className="nav-list">
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        {/* Add more list items as needed */}
      </ul>
      <div className="search-bar">
        {/* Add your search bar implementation here */}
        {/* For example, you can use an input element */}
        <input style={{backgroundColor:'transparent'}} type="text" placeholder="Search..." />
      </div>
      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar" />
    </div>
  );
}

