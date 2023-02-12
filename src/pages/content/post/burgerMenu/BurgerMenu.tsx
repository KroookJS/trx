import styles from "./BurgerMenu.module.scss";
import { FC } from "react";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineVideoCamera } from "react-icons/ai";

import { DiCodeigniter } from "react-icons/di";
import { ImCoinDollar } from "react-icons/im";
import { BsBook } from "react-icons/bs";
import { HiOutlinePhotograph } from "react-icons/hi";
import { GiGameConsole } from "react-icons/gi";
import { Link } from "react-router-dom";

type TProps = {
  setActiveBurger?: any;
};

export const BurgerMenu: FC<TProps> = ({ setActiveBurger }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.blur}></div>
      <div className={styles.menuContent}>
        <div className={styles.logoBlock}>
          {/* <img src="/logo1.svg" alt="logo" width={120} height={40} /> */}
          <h1>
            <i className={styles.iText}>爱</i>Porn
          </h1>
          <div onClick={() => setActiveBurger(false)} className={styles.close}>
            <AiOutlineCloseCircle />
          </div>
        </div>
        <ul>
          <Link to="/categories">
            <div className={styles.navListItem}>
              <AiOutlineVideoCamera />
              <li className={styles.liItem}>站长推荐</li>
            </div>
          </Link>
          <Link to="/categories">
            <div className={styles.navListItem}>
              <GiGameConsole />
              <li className={styles.liItem}>本站APP</li>
            </div>
          </Link>

          <Link to="/categories">
            <div className={styles.navListItem}>
              <DiCodeigniter />
              <li className={styles.liItem}>播放帮助</li>
            </div>
          </Link>

          <Link to="/categories">
            <div className={styles.navListItem}>
              <ImCoinDollar />
              <li className={styles.liItem}>高清视频</li>
            </div>
          </Link>

          <Link to="/categories">
            <div className={styles.navListItem}>
              <AiOutlineVideoCamera />
              <li className={styles.liItem}>我的女优</li>
            </div>
          </Link>

          <Link to="/categories">
            <div className={styles.navListItem}>
              <BsBook />
              <li className={styles.liItem}>成人小说</li>
            </div>
          </Link>

          <Link to="/categories">
            <div className={styles.navListItem}>
              <HiOutlinePhotograph />
              <li className={styles.liItem}>激情图片.</li>
            </div>
          </Link>
        </ul>
      </div>
    </div>
  );
};
