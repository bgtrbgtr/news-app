import Image from "next/image";
import styles from "./newsCard.module.css";

export default function NewsCard(newsItem: NewsItem) {
  return (
    <div className={styles.card}>
      <div className={styles.image_box}>
        <Image
          src={newsItem.picURL}
          alt={newsItem.heading}
          fill={true}
          objectFit="cover"
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <h5 className={styles.date}>{newsItem.date}</h5>
        <h2 className={styles.heading}>{newsItem.heading}</h2>
        <button className={styles.button}>Details →</button>
      </div>
    </div>
  );
}
