import { NewsCard } from ".";
import styles from "./newsfeed.module.css";

export default function Newsfeed() {
  const news: NewsItem[] = [
    {
      heading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus urna ac ipsum convallis, vitae tincidunt nisi lacinia. Aenean dignissim felis quis vestibulum pellentesque. Ut id leo euismod, suscipit augue id, pulvinar est. Praesent quis enim eu lorem fermentum vulputate. Vestibulum in lectus a nulla ultricies rhoncus vitae et turpis. Ut iaculis scelerisque quam, in dignissim erat blandit ut. Nunc nisi nunc, consequat in blandit et, blandit sit amet lorem. Etiam vulputate eros arcu, nec elementum est pulvinar a. Aliquam quis enim tellus. Maecenas id rhoncus purus. Sed quis aliquet tortor, at blandit nulla.",
      date: "24 July 2022, 10:06:03 AM",
      picURL:
        "https://kartinkof.club/uploads/posts/2022-04/1649590989_2-kartinkof-club-p-ugarnie-kartinki-kartinka-ti-super-2.jpg",
      id: "1",
    },
    {
      heading: "Новост22ь новость",
      date: "24 July 2022, 10:06:03 AM",
      picURL:
        "https://kartinkof.club/uploads/posts/2022-04/1649590989_2-kartinkof-club-p-ugarnie-kartinki-kartinka-ti-super-2.jpg",
      id: "2",
    },
    {
      heading: "Новост22ь новость",
      date: "24 July 2022, 10:06:03 AM",
      picURL:
        "https://kartinkof.club/uploads/posts/2022-04/1649590989_2-kartinkof-club-p-ugarnie-kartinki-kartinka-ti-super-2.jpg",
      id: "3",
    },
    {
      heading: "Новост22ь новость",
      date: "24 July 2022, 10:06:03 AM",
      picURL:
        "https://kartinkof.club/uploads/posts/2022-04/1649590989_2-kartinkof-club-p-ugarnie-kartinki-kartinka-ti-super-2.jpg",
      id: "4",
    },
    {
      heading: "Новост22ь новость",
      date: "24 July 2022, 10:06:03 AM",
      picURL:
        "https://kartinkof.club/uploads/posts/2022-04/1649590989_2-kartinkof-club-p-ugarnie-kartinki-kartinka-ti-super-2.jpg",
      id: "5",
    },
  ];

  const renderNews = news?.map((item) => {
    return (
      <NewsCard
        key={item.id}
        heading={item.heading}
        date={item.date}
        picURL={item.picURL}
        id={item.id}
      />
    );
  });

  return <main className={styles.main}>{renderNews}</main>;
}
