import { ReactElement } from "react";
import styles from "./ICheckbox.module.css";

interface ICheckbox {
  value: string;
  onClick: (value: string) => void;
}

export const Checkbox = ({
  value,
  onClick,
}: ICheckbox): ReactElement<HTMLInputElement> => {
  const onClickHandler = () => onClick(value);

  return (
    <input
      type="checkbox"
      className={styles.checkbox}
      onClick={onClickHandler}
    />
  );
};
