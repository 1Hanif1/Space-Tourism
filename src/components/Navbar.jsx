/* eslint-disable react/prop-types */
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const nav = document.querySelectorAll("nav > ul > li");
    const url = window.location.href.split("/")[3];
    nav.forEach((li) =>
      li.id == url ? li.classList.add(classes.active) : null
    );
  });

  const addActiveClass = function (e) {
    // First remove active class from all Li
    const nav = document.querySelectorAll("nav > ul > li");
    nav.forEach((li) => li.classList.remove(classes.active));
    const li = e.target.closest("li");

    // Add Active to the clicked element
    li.classList.add(classes.active);
  };

  const openMenu = function () {
    const navbar = document.querySelector("#navbar");
    navbar.classList.add(classes.open);
  };

  const closeMenu = function () {
    const navbar = document.querySelector("#navbar");
    navbar.classList.remove(classes.open);
  };
  return (
    <nav className={classes.nav}>
      <div>
        <img src={logo} className={classes.logo} />
      </div>
      <span></span>
      <div className={classes.hamburger} onClick={openMenu}>
        <img src={hamburger} alt="" />
      </div>
      <ul id="navbar" className={classes.ul}>
        <div className={classes.close}>
          <img src={close} onClick={closeMenu} />
        </div>
        <li id="home" onClick={addActiveClass}>
          <Link to="/home" className={classes.anchor}>
            <strong>00</strong> Home
          </Link>
        </li>
        <li id="destination" onClick={addActiveClass}>
          <Link to="/destination" className={classes.anchor}>
            <strong>01</strong> Destination
          </Link>
        </li>
        <li id="crew" onClick={addActiveClass}>
          <Link to="/crew" className={classes.anchor}>
            <strong>02</strong> Crew
          </Link>
        </li>
        <li id="technology" onClick={addActiveClass}>
          <Link to="technology" className={classes.anchor}>
            <strong>03</strong> Technology
          </Link>
        </li>
      </ul>
    </nav>
  );
}
