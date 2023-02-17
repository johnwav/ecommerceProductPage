import { useState } from "react";
import styles from "./Navbar.module.css";
import { Logo, CartIcon, Profile } from "./assets";
import { useSelector } from "react-redux";
import { data } from "../../app/data.js";
export const Navbar = () => {
  const [isActive, setIsActive] = useState(true);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  const count = useSelector((state) => state.itemsInCart.value);

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
          <div>{count}</div>
        </button>
        <button onClick={handleClick}>
          <img src={Profile.img} width={"50px"} alt={Profile.alt}></img>
        </button>
      </div>

      <div className={isActive ? styles.toggle : styles.cartdropdown}>
        <div className={styles.cartLabel}>Cart</div>
        <div className={styles.line}></div>
        {count > 0 ? (
          <div className={styles.cartInfo}>
            <div>image</div>
            <div>
              <p>{data.title}</p>
              <p>
                ${data.price} x{count} <strong>${data.price * count}</strong>
              </p>
              <div>dlt</div>
            </div>
          </div>
        ) : (
          <div>Your cart is empty.</div>
        )}

        <button className={styles.checkoutBtn}>Checkout</button>
      </div>
    </nav>
  );
};
