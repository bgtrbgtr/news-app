import Image from "next/image";
import Link from "next/link";
import styles from "./newsCard.module.css";

export type NewsCard = {
  picURL: string;
  heading: string;
  date: string;
  id: string;
};

export default function NewsCard(newsItem: NewsCard) {
  const inputDate = new Date(newsItem.date);
  const outputDate = inputDate.toLocaleString("en-UK", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <div className={styles.card}>
      <div className={styles.image_box}>
        <Image
          src={newsItem.picURL}
          alt={newsItem.heading}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100%, (max-width: 1200px) 75%, 33%"
          priority={false}
        />
      </div>
      <div className={styles.info}>
        <h5 className={styles.date}>{outputDate}</h5>
        <h2 className={styles.heading}>{newsItem.heading}</h2>
        <Link href={`/article/${newsItem.id}`} className={styles.button}>
          Details →
        </Link>
      </div>
    </div>
  );
}
