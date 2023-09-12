import { useSelector } from "react-redux";
import styles from "./Loader.module.css";
import { getIsShowLoader } from "../../features/loginSelectors";
import { ReactNode } from "react";

interface ILoader {
  children: ReactNode;
}

export const Loader = ({ children }: ILoader) => {
  const isShowLoader = useSelector(getIsShowLoader);
  return (
    <>
      {isShowLoader && (
        <div className={styles.loaderBg}>
          <div className={styles["loader"]}></div>
          <p>Data is loading</p>
        </div>
      )}
      {children}
    </>
  );
};
