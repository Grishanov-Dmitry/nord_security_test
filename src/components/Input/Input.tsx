import { ChangeEvent, ReactElement } from "react";
import styles from "./Input.module.css";

interface IInput {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export const Input = ({
  value,
  placeholder = "",
  onChange,
}: IInput): ReactElement<HTMLInputElement> => {
  const onChangeValue = ({ target }: ChangeEvent<HTMLInputElement>) =>
    onChange(target.value);

  return (
    <input
      className={styles.input}
      value={value}
      placeholder={placeholder}
      onChange={onChangeValue}
    />
  );
};
