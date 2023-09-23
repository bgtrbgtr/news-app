import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © Масаев Александр, telegram:{" "}
        <a
          className={styles.link}
          target="_blank"
          href="https://t.me/lackluster_party"
        >
          t.me/lackluster_party
        </a>
      </p>
    </footer>
  );
}
