import { NavPanel } from "../../NavPanel";

import styles from "./HomePage.module.css";

export const HomePage = () => (
  <main className={styles.mainContainer}>
    <h1 className={styles.mainHeader}>
      Hello friend! <br /> Nice to see you here.
    </h1>
    <p>You can visit the next pages:</p>

    <NavPanel />
  </main>
);
