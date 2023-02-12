import styles from "../styles/Home.module.scss";
import { Content } from "./content/Content";

import { Header } from "./content/post/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.center}>
          <div className={styles.thirteen}>
            {/*  <Image src="/assets/t2.jpeg" alt="13" width={350} height={181} priority /> */}
            <div className={styles.reklamaBlock}>
              <img src="/assets/gif3.gif" alt="gif" width={305} height={100} />
            </div>
          </div>
          <div className={styles.titleBlock}>
            <h1 className={styles.title}>
              中国需求的色情影片
              <i>
                <img
                  className={styles.iconFlag}
                  src="/assets/flag.png"
                  alt="flag"
                  width={17}
                  height={17}
                />
              </i>
            </h1>

            <div className={styles.btnBlock}>
              <button className={styles.btnActul}>最新</button>
              <button className={styles.btnActul}>最爆</button>
            </div>
          </div>

          {/*  <Catigories /> */}
        </div>

        <Content />
      </main>
    </>
  );
}
