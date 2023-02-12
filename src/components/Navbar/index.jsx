import styles from "./Navbar.module.css";
import { Logo, CartIcon, Profile } from "./assets";
export const Navbar = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.nav}>
        <div className={styles.logo}>
          <img src={Logo.img} alt={Logo.alt}></img>
        </div>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className={styles.options}>
        <button>
          <img src={CartIcon.img} alt={CartIcon.alt}></img>
        </button>
        <button>
          <img src={Profile.img} width={"50px"}alt={Profile.alt}></img>
        </button>
      </div>
    </nav>
  );
};
