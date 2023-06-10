/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import classes from "./Navbar.module.css";
export default function Navbar(props) {
  const { changeTabFunction } = props;
  const url = window.location.href.split("/")[3];
  const nav = document.querySelectorAll("nav > ul > li");
  let [activeTab, setActiveTab] = useState("");
  useEffect(() => {
    nav.forEach((li) => li.classList.remove("active"));
    switch (url) {
      case "home":
        setActiveTab("home");
        break;
      case "destination":
        setActiveTab("destination");
        break;
      case "crew":
        setActiveTab("crew");
        break;
      case "technology":
        setActiveTab("technology");
        break;
      default:
        break;
    }
  }, [url, nav]);

  useEffect(() => {
    changeTabFunction(activeTab);
  }, [activeTab, changeTabFunction]);

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
        <li id="home" className={activeTab == "home" ? classes.active : null}>
          00 Home
        </li>
        <li
          id="destination"
          className={activeTab == "destination" ? classes.active : null}
        >
          01 Destination
        </li>
        <li id="crew" className={activeTab == "crew" ? classes.active : null}>
          02 Crew
        </li>
        <li
          id="technology"
          className={activeTab == "technology" ? classes.active : null}
        >
          03 Technology
        </li>
      </ul>
    </nav>
  );
}
