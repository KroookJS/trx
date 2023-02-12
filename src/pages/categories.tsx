import React from "react";
import { Header } from "./content/post/header/Header";
import styles from "../styles/Home.module.scss";
import { CategotiesContent } from "../components/categotiesContent/CategotiesContent";

export default function Categories() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div className={styles.center}>
          <div className={styles.thirteen}>
            <div className={styles.reklamaBlock}>
              <img src="/assets/gif2.gif" alt="gif" width={305} height={100} />
            </div>
          </div>
        </div>
      </main>

      <CategotiesContent />
    </div>
  );
}
