"use client";

import { ChangeEvent, SyntheticEvent } from "react";
import SearchIcon from "../icons/search";
import styles from "./header.module.css";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  setItemsOnPage,
  setQuery,
  setSortBy,
} from "@/redux/reducers/searchFormSlice";
import { FormEvent } from "react";

export default function Header() {
  const dispatch = useAppDispatch();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { target } = e;
    if (target) {
      const newInput = (target as HTMLFormElement).elements[0];
      const newQuery = (newInput as HTMLInputElement).value;
      dispatch(setQuery(newQuery));
    }
  };

  const handleSortBySelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const sortBy = e.target.value;
    dispatch(setSortBy(sortBy));
  };

  const handleItemsOnPageSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const itemsOnPage = +e.target.value;
    dispatch(setItemsOnPage(itemsOnPage));
  };

  return (
    <header className={styles.header}>
      <div className={styles.form}>
        <form onSubmit={(e) => handleFormSubmit(e)}>
          <div className={styles.input_block}>
            <div className={styles.search_box}>
              <SearchIcon
                width={10}
                height={10}
                fill="#000"
                className={styles.icon}
              />
              <input
                className={`${styles.input} ${styles.search}`}
                type="search"
                placeholder="Search"
                name="query"
              ></input>
            </div>
            <button
              className={`${styles.input} ${styles.button}`}
              type="submit"
            >
              Find
            </button>
          </div>
        </form>
        <div className={styles.input_block}>
          <select
            className={`${styles.input} ${styles.select}`}
            name="sortBy"
            onChange={(e) => handleSortBySelect(e)}
            defaultValue={"Sort by newest"}
          >
            <option>Sort by relevance</option>
            <option>Sort by newest</option>
            <option>Sort by oldest</option>
          </select>
          <label className={styles.label} htmlFor="itemsPerPage">
            Items on page:
            <select
              className={`${styles.input} ${styles.select}`}
              name="itemsOnPage"
              onChange={(e) => handleItemsOnPageSelect(e)}
            >
              <option>6</option>
              <option>12</option>
              <option>18</option>
            </select>
          </label>
        </div>
      </div>
    </header>
  );
}
