import React from 'react'
import { useCart } from 'react-use-cart'

import {  Link } from 'react-router-dom';


const Nav = () => {
  const  {
    totalItems
} = useCart();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" href="#">🌍Home</Link>
        </li>
      
        
      </ul>
      <form className="d-flex">
        <Link to="/card" className="btn btn-outline-success" type="submit">Cart🧰({totalItems})</Link>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Nav
