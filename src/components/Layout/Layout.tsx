import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../Header";
import { Footer } from "../Footer";

import styles from "./Layout.module.css";
import { useSelector } from "react-redux";
import { getToken } from "../../features/serverSelectors";

interface ILayout {
  children: ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  const token = useSelector(getToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div className={styles.layoutContainer}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
