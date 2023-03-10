import { useState } from "react";
import styles from "./Navbar.module.css";
import { Logo, CartIcon, Profile, Bars, Close } from "./assets";
import { useSelector } from "react-redux";
import { data, images } from "../../app/data.js";

import dlt from "../../assets/icon-delete.svg";


export const Navbar = () => {
  const [isActive, setIsActive] = useState(true);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  const count = useSelector((state) => state.itemsInCart.value);

  const [navstate, setNavState] = useState(false);


  return (
    
    <div className={styles.body}>
      <nav className={styles.container}>
        <ul className={styles.nav}>
          <button className={styles.menu1}>
            <img
              src={Bars.img}
              alt={Bars.alt}
              onClick={() => setNavState(true)}
            ></img>
          </button>
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
            {count > 0 ? <div>{count}</div> : ""}
          </button>
          <button onClick={handleClick}>
            <img src={Profile.img} width={"50px"} alt={Profile.alt}></img>
          </button>
        </div>

        <div className={isActive ? styles.toggle : styles.cartdropdown}>
          <div className={styles.cartLabel}>Cart</div>
          <div className={styles.line}></div>
          <div className={styles.cartInfo}>
            {count > 0 ? (
              <div>
                <div className={styles.cartProductInfo}>
                  <img width={50} src={images[0].image} alt="cart"></img>

                  <div className={styles.product}>
                    <p>{data.title}</p>
                    <p>
                      ${data.price} x{count}{" "}
                      <strong>${data.price * count}</strong>
                    </p>
                  </div>
                  <img src={dlt}></img>
                </div>
                <button className={styles.checkoutBtn}>Checkout</button>
              </div>
            ) : (
              <div className={styles.empty}>Your cart is empty.</div>
            )}
          </div>
        </div>
      </nav>
      {navstate ? (
        <div className={styles.side}>
          <div className={styles.mobileMenu}></div>
          <ul className={styles.menu}>
            <button onClick={() => setNavState(false)}>
              <img src={Close.img} alt={Close.alt} width={20}></img>
            </button>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
