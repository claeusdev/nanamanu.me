import styles from "../styles/Nav.module.css";

export default function Navbar() {
  return (
    <header role="banner">
      <nav className={styles.navbar}>
        <div className={styles.logo}>nam.</div>
        <ul className={styles.navbar__nav}>
          <li className={styles.navbar__nav__item}>
            <a href="https://github.com/claeusdev">Github</a>
          </li>
          <li className={styles.navbar__nav__item}>
            <a href="https://twitter.com/claeusdev">@twitter</a>
          </li>
          <li className={styles.navbar__nav__item}>
            <a href="https://linkedin.com/in/nana-adjei-manu">LinkedIn</a>
          </li>
          <li className={styles.navbar__nav__item}>
            <a href="mailto:claeusdev@outlook.com"> Email</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
