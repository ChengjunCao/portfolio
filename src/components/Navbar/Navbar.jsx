import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="inner-header">
          <div className="logo">
            <Link to="/">MIKE CAO</Link>
          </div>
          <div className="navigation">
            <nav>
              <Link to="/about">ABOUT</Link>
              <Link to="/work">WORK</Link>
              <Link to="/projects">PROJECTS</Link>
              <Link to="/contact">CONTACT</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
