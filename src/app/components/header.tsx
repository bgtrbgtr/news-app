import SearchIcon from "../icons/search";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <form className={styles.form}>
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
            ></input>
          </div>
          <button className={`${styles.input} ${styles.button}`} type="button">
            Find
          </button>
        </div>
        <div className={styles.input_block}>
          <select className={`${styles.input} ${styles.select}`}>
            <option>Sort by relevance</option>
            <option>Sort by newest</option>
            <option>Sort by oldest</option>
          </select>
          <label className={styles.label} htmlFor="itemsPerPage">
            Items on page:
            <select
              className={`${styles.input} ${styles.select}`}
              name="itemsPerPage"
            >
              <option>5</option>
              <option>10</option>
              <option>20</option>
            </select>
          </label>
        </div>
      </form>
    </header>
  );
}
