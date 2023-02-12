import { FC, useEffect, useState } from "react";
import styles from "./PostContent.module.scss";
import { BiCheck } from "react-icons/bi";
import { SlEyeglass } from "react-icons/sl";
import { FiSmile } from "react-icons/fi";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlinePauseCircle } from "react-icons/ai";

type TProps = {
  img: string;
  id: string;
};

type TDataPost = {
  id: string;
  photo: string;
};

export const PostContentFull: FC<TProps> = ({ id, img }) => {
  const [activeBtn, setActiveBtn] = useState(false);
  const [activePlay, setActivePlay] = useState(false);
  const [dataPost, setDataPost] = useState<TDataPost>({ id: "", photo: "" });

  useEffect(() => {
    fetch(`http://localhost:8888/posts/${id}`)
      .then((res) => res.json())
      .then((json) => setDataPost(json));
  }, []);

  return (
    <div className={styles.post}>
      <img
        className={styles.postImgVideo}
        src={dataPost.photo ? dataPost.photo : "/t5.jpeg"}
        alt="gori"
        width={414}
        height={232}
      />

      <div
        onClick={() => setActivePlay(!activePlay)}
        className={styles.playIcon}
      >
        {activePlay ? <AiOutlinePauseCircle /> : <AiFillPlayCircle />}
      </div>

      <div className={styles.textBlock}>
        <h5 className={styles.textVideo}>
          年轻漂亮妈妈，爸爸经常出差~滋润妈妈这件事情儿子来上位，~各种姿势爆操滋润妈妈的淫穴，连续打庄~精彩对白激情诱惑💦💦
        </h5>
      </div>
      <div className={styles.textBlock}>
        <div className={styles.avaBlock}>
          <img
            className={styles.avaFoto}
            src="/assets/ava.jpeg"
            alt="ava"
            width={40}
            height={40}
          />

          <div className={styles.postNameFull}>
            <div className={styles.userNameBlock}>
              <p>@小白</p>
              <div className={styles.postIconName}>
                <BiCheck />
              </div>
            </div>

            <div className={styles.ratingBlock}>
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
        </div>
        <button
          onClick={() => setActiveBtn(!activeBtn)}
          className={activeBtn ? styles.btnFollowActive : styles.btnFollow}
        >
          {activeBtn ? "取消订阅" : "关注"}
        </button>
      </div>
    </div>
  );
};
