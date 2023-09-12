import { NavLink } from "react-router-dom";

import styles from "./NavPanel.module.css";

export const NavPanel = () => (
  <nav className={styles.navContainer}>
    <NavLink to="/servers">Server List</NavLink>
    <NavLink to="/about">About Us</NavLink>
  </nav>
);
