import { useEffect, useState } from "react";

import { Header } from "./content/post/header/Header";
import styles from "../styles/Home.module.scss";
import { PostContentFull } from "./content/post/PostContentFull";
import { BottomFullVideo } from "../components/bottomFullVideo/BottomFullVideo";
import { Content } from "./content/Content";

export default function FullPage() {
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);
  }, []);
  return (
    <>
      {isLoader ? (
        <>
          <Header />
          <main className={styles.main}>
            <div className={styles.center}>
              <div className={styles.thirteen}>
                <div className={styles.reklamaBlock}>
                  <img
                    src="/assets/gif.gif"
                    alt="gif"
                    width={305}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </main>
          <PostContentFull id="13" img="/t9.jpeg" />
          <div className={styles.thirteen}>
            <div className={styles.reklamaBlockBotom}>
              <img src="/assets/gif2.gif" alt="gif" width={305} height={100} />
            </div>
          </div>

          <BottomFullVideo />
          <Content />
        </>
      ) : (
        <h2> Идет Загрузка компонента!</h2>
      )}
    </>
  );
}
