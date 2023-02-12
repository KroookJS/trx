import styles from "./Header.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";



import { useState } from "react";
import { BurgerMenu } from "../burgerMenu/BurgerMenu";
import { Link } from "react-router-dom";

export const Header = () => {
  const [activeBurger, setActiveBurger] = useState(false);
  return (
    <header className={styles.header}>
      {activeBurger ? (
        <BurgerMenu setActiveBurger={setActiveBurger} />
      ) : (
        <div className={styles.headerBlock}>
          <div onClick={() => setActiveBurger(true)} className={styles.burger}>
            <RxHamburgerMenu />
          </div>

          <div className={styles.logo}>
            <Link to="/">
              {/*  <Image src="/logo1.svg" alt="logo" width={150} height={40} /> */}
              <h1>
                <i className={styles.iText}>爱</i>Porn
              </h1>
            </Link>
          </div>

          <div className={styles.iconBlock}>
            <BiSearch />
          </div>
        </div>
      )}
    </header>
  );
};
