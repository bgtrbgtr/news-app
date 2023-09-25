import { NewsItem } from "@/redux/thunks/getNews/types";
import styles from "./article.module.css";
import parse from "html-react-parser";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

async function getArticle(id: string[]) {
  const res = await fetch(
    `https://content.guardianapis.com/${id.join(
      "/"
    )}?api-key=${API_KEY}&format=json&show-fields=all`,
    {
      cache: "force-cache",
    }
  );
  const article = await res.json();
  return article.response.content;
}

export default async function ArticlePage({
  params,
}: {
  params: { id: string[] };
}) {
  const article: NewsItem = await getArticle(params.id);
  const inputDate = new Date(article.webPublicationDate);
  const outputDate = inputDate.toLocaleString("en-UK", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return (
    <div className={styles.article}>
      <h1 className={styles.headline}>{article.fields.headline}</h1>
      <h4 className={styles.subheading}>{article.fields.trailText}</h4>
      <div className={styles.info_block}>
        <p>{outputDate}</p>
        <a className={styles.link} href={article.webUrl} target="_ blank">
          Read on Guardian
        </a>
      </div>
      <>{parse(article.fields.body)}</>
    </div>
  );
}
