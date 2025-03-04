import React from "react";
import { Link, useLocation } from "react-router-dom";
export const Header = () => {
  const location = useLocation();
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Taskify
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/login" ? "active" : ""}`}  to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/register" ? "active" : ""}`} to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
