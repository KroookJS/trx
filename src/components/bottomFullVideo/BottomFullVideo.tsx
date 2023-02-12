import styles from "./BottomFullVideo.module.scss";

export const BottomFullVideo = () => {
  return (
    <>
      <ul className={styles.recomendaitionBlock}>
        <li className={styles.Itemblcok}>相关视频</li>
        <li className={styles.ItemblcokActive}>推荐</li>
      </ul>
    </>
  );
};
