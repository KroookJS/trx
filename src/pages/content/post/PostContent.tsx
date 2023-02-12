import { FC, useEffect } from "react";
import styles from "./PostContent.module.scss";
import { BiCheck } from "react-icons/bi";
import { SlEyeglass } from "react-icons/sl";
import { FiSmile } from "react-icons/fi";

type TProps = {
  photo: string;
  setIsLoading?: any;
};

export const PostContent: FC<TProps> = ({ photo, setIsLoading }) => {
  useEffect(() => {
    if (setIsLoading) {
      setIsLoading(false);
    }
  }, []);
  return (
    <div className={styles.post}>
      <img src={photo} alt="gori" width={414} height={232} />
      <div className={styles.textBlock}>
        <div className={styles.postName}>
          <p>@小白</p>
          <div className={styles.postIconName}>
            <BiCheck />
          </div>
        </div>

        <div className={styles.postRating}>
          <div className={styles.iconFlex}>
            <SlEyeglass />
            <p>1.5M</p>
          </div>
          <div className={styles.iconFlex}>
            <FiSmile />
            <p>83%</p>
          </div>
        </div>
      </div>
      <div className={styles.textBlock}>
        <h5 className={styles.textVideo}>
          年轻漂亮妈妈，爸爸经常出差~滋润妈妈这件事情儿子来上位，~各种姿势爆操滋润妈妈的淫穴，连续打庄~精彩对白激情诱惑💦
        </h5>
      </div>
    </div>
  );
};
