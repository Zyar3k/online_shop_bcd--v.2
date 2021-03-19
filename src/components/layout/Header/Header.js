import { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("toggle");
  };
  return (
    <header className={styles.header}>
      <nav className={`${styles.navBar} mainLayContainer`}>
        <NavLink to='/' className={`${styles.navItem} ${styles.logo}`}>
          <span>B</span>
          etty
          <span>C</span>
          raft
          <span>D</span>
          esigns
        </NavLink>

        <NavLink className={styles.navItem} to='/'>
          Home
        </NavLink>
        <NavLink className={styles.navItem} to='/contact'>
          Contact
        </NavLink>
        <NavLink className={styles.navItem} to='/cart'>
          Cart
        </NavLink>
        <div className={styles.toggleMenuWrapper}>
          <i
            onClick={toggleMenu}
            className={isOpen ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
