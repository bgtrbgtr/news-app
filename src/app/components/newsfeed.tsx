"use client";

import { NewsCard } from ".";
import styles from "./newsfeed.module.css";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getNews } from "@/redux/thunks/getNews";
import { selectNews } from "@/redux/reducers/newsfeedSlice";
import { useEffect, useState } from "react";
import { NewsItem } from "@/redux/thunks/getNews/types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Newsfeed() {
  const dispatch = useAppDispatch();
  const searchFormState = useAppSelector((state) => state.searchFrom);
  const [page, setPage] = useState(1);
  const [news, setNews] = useState(useAppSelector(selectNews));

  const loadNews = async () => {
    const newRecords = await dispatch(
      getNews({
        query: searchFormState.query,
        sortBy: searchFormState.sortBy,
        itemsOnPage: searchFormState.itemsOnPage,
        page: page,
      })
    );
    setPage((prevPage) => prevPage + 1);
    const list = newRecords.payload;
    const newFeed = [...news, ...list];
    setNews(newFeed);
  };

  useEffect(() => {
    loadNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, searchFormState]);

  const renderNews = news?.map((item: NewsItem) => {
    return (
      <NewsCard
        key={item.id}
        heading={item.fields.headline}
        date={item.webPublicationDate}
        picURL={
          item.fields.thumbnail ? item.fields.thumbnail : "/placeholder.png"
        }
        id={item.id}
      />
    );
  });

  return (
    <InfiniteScroll
      next={loadNews}
      hasMore={true}
      loader={<div></div>}
      dataLength={news.length}
      scrollThreshold={1}
    >
      <main className={styles.main}>{renderNews}</main>
    </InfiniteScroll>
  );
}
