import { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  const mobileMenuToggle = () => setIsOpen(!isOpen);
  const closeMobileMenu = () => setIsOpen(false);
  return (
    <header className={styles.header}>
      <nav className={`${styles.navBar} mainLayContainer`}>
        <NavLink to='/' className={styles.logo}>
          <span>B</span>
          etty
          <span>C</span>
          raft
          <span>D</span>
          esigns
        </NavLink>
        <div
          className={
            isOpen
              ? `${styles.navItemWrapper} ${styles.active}`
              : `${styles.navItemWrapper}`
          }
        >
          <NavLink onClick={closeMobileMenu} className={styles.navItem} to='/'>
            Home
          </NavLink>
          <NavLink
            onClick={closeMobileMenu}
            className={styles.navItem}
            to='/contact'
          >
            Contact
          </NavLink>
          <NavLink
            onClick={closeMobileMenu}
            className={styles.navItem}
            to='/cart'
          >
            Cart
          </NavLink>
        </div>
        <div className={styles.toggleMenuWrapper}>
          <i
            onClick={mobileMenuToggle}
            className={isOpen ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
