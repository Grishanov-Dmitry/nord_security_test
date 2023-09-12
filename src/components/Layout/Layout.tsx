import { ReactNode } from "react";

import { Header } from "../Header";
import { Footer } from "../Footer";

import styles from "./Layout.module.css";

interface ILayout {
  children: ReactNode;
}

export const Layout = ({ children }: ILayout) => (
  <div className={styles.layoutContainer}>
    <Header />
    {children}
    <Footer />
  </div>
);
