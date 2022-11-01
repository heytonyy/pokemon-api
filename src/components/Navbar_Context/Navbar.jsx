import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <button class="btn nav-link">Link 1</button>
        </li>
        <li className="nav-item">
          <button class="btn nav-link">Link 2</button>
        </li>
      </ul>
      <div className="d-flex ml-auto">
        Greetings, <span className="ml-5 mr-10">User</span>
      </div>
    </nav>
  )
}

export default Navbar