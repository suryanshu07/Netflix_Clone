import React, {useEffect, useState} from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100){
        handleShow(true);
      }else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
    //we listen to the event and once it executes we remove it
    // it doesn't listen over and over again.
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img
            className='nav_logo'
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix logo"
        />
        <img
            className='nav_avatar'
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Avatar logo"
        />
    </div>
  );
}

export default Nav;