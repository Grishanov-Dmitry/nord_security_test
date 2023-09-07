import { ChangeEvent, ReactElement } from "react";
import classNames from "classnames";

import styles from "./Input.module.css";

interface IInput {
  value: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
  onChange: (value: string) => void;
}

export const Input = ({
  value,
  type,
  placeholder = "",
  className = "",
  onChange,
}: IInput): ReactElement<HTMLInputElement> => {
  const onChangeValue = ({ target }: ChangeEvent<HTMLInputElement>) =>
    onChange(target.value);

  const combinedClasses = classNames(styles.inputBase, className);

  return (
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      className={combinedClasses}
      onChange={onChangeValue}
    />
  );
};
