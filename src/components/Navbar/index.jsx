import { useState } from "react";
import styles from "./Navbar.module.css";
import { Logo, CartIcon, Profile } from "./assets";
export const Navbar = () => {

  const [isActive, setIsActive] = useState(true)
  const handleClick = event => {
    setIsActive(current => !current)
  }

  return (
    <nav className={styles.container}>
      <ul className={styles.nav}>
        <button className={styles.logo}>
          <img src={Logo.img} alt={Logo.alt}></img>
        </button>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className={styles.options}>
        <button onClick={handleClick}>
          <img src={CartIcon.img} alt={CartIcon.alt}></img>
        </button>
        <button onClick={handleClick}>
          <img src={Profile.img} width={"50px"}alt={Profile.alt}></img>
        </button>
      </div>
    
      <div className={isActive? styles.toggle : styles.cartdropdown} >
        <div className={styles.cartLabel}>Cart</div>
        <div className={styles.line}></div>
        <div className={styles.cartProductInfo}></div>
        <button className={styles.checkoutBtn}>Checkout</button>
      </div>
  
    </nav>
  );
};
