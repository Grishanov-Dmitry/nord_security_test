import { Button } from "../Button";

import styles from "./Header.module.css";

export const Header = () => (
  <header>
    <Button
      label="Log Out"
      onClick={() => {}}
      className={styles.logOutButton}
    />
  </header>
);
