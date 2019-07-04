import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3 py-0">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i class="fas fa-tasks">Todo-list React</i>
        </Link>
        <div>
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/todos">
              Todo
            </NavLink>
            <NavLink className="nav-item nav-link" to="/about">
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
