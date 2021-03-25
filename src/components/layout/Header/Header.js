import { NavLink } from "react-router-dom";
import CartIndicator from "../../common/CartIndicator/CartIndicator";

import styles from "./Header.module.scss";

const Header = ({ isOpen, setIsOpen, price, cart }) => {
  const mobileMenuToggle = () => setIsOpen(!isOpen);
  const closeMobileMenu = () => setIsOpen(false);

  console.log("cart header", cart);
  console.log("price header", price);

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
            <p>Home</p>
          </NavLink>
          <NavLink
            onClick={closeMobileMenu}
            className={styles.navItem}
            to='/contact'
          >
            <p>Contact</p>
          </NavLink>
          <NavLink
            onClick={closeMobileMenu}
            className={
              cart.length === 0
                ? `${styles.navItem}`
                : `${styles.navItem} ${styles.productInCart}`
            }
            to='/cart'
          >
            <p>
              <i className={`fas fa-cart-arrow-down ${styles.cartIcon}`}></i>
              Cart{" "}
            </p>
            {!cart.length < 1 ? (
              <CartIndicator price={price} cart={cart} />
            ) : null}
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
