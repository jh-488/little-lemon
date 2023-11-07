import React, { useState, useEffect } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [Navlist, setNavList] = useState(false);

  useEffect(() => {
    // Function to handle screen size changes
    const handleScreenSize = () => {
      if (window.innerWidth > 900) {
        setNavList(false);
      }
    };

    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  return (
    <header>
      <nav className="container">
        <div className="nav-logo">
          <img src="/assets/logo.png" alt="little lemon logo" />
        </div>
        <ul className={Navlist ? "small" : "grid"}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/menu"}>Menu</Link>
          </li>
          <li>
            <Link to={"/reservations"}>Reservations</Link>
          </li>
        </ul>
        <div className="toggle">
          <button onClick={() => setNavList(!Navlist)}>
            {Navlist ? (
              <i className="fa fa-times" aria-label="close menu"></i>
            ) : (
              <i className="fa fa-bars" aria-label="open menu"></i>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
