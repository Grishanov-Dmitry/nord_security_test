import { useAppDispatch } from "../../../hooks";
import { logoutUser } from "../../features/loginSlice";
import { Button } from "../Button";

import styles from "./Header.module.css";

export const Header = () => {
  const dispatch = useAppDispatch();

  const onLogOut = () => {
    dispatch(logoutUser());
  };

  return (
    <header>
      <Button
        label="Log Out"
        onClick={onLogOut}
        className={styles.logOutButton}
      />
    </header>
  );
};
