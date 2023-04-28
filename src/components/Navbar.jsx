import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import classes from "./Navbar.module.css";
export default function Navbar() {
  const navbar = document.querySelector("#navbar");
  const openMenu = function () {
    navbar.classList.add(classes.open);
  };

  const closeMenu = function () {
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
        <li>00 Home</li>
        <li>01 Destination</li>
        <li>02 Crew</li>
        <li>03 Technology</li>
      </ul>
    </nav>
  );
}
