import React, { useState } from "react";
import {Link} from 'react-router-dom';

import './nav.scss';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  
  return (
   <>



   <nav>
     <div className="logo title">Logo</div>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>

        <li>
        <Link to="/" >  Home </Link>
        </li>
        <li>
        <Link to="/about"> About </Link>
        </li>
        <li>
        <Link to="/contact"> Contact </Link>
        </li>
        
      </ul>
    </nav>
      
   </>
  )
}

export default Nav