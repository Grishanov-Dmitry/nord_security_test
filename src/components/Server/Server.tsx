import { IServer } from "../../types";

import styles from "./Server.module.css";

export const Server = ({ name, distance }: IServer) => (
  <div className={styles.serverContainer}>
    <p>
      <span className={styles.description}>Name of Server is:</span> {name}
    </p>
    <p>
      <span className={styles.description}>Distance to the server is </span>
      {distance}
    </p>
  </div>
);
