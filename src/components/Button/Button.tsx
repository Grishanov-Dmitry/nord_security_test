import { ReactElement } from "react";

import classnames from "classnames";

import styles from "./Button.module.css";
import { ButtonSizes } from "../../types";

const sizeClassNameHelper = (size: keyof typeof ButtonSizes) => {
  const className = `button--${size}`;

  return `${styles[className]}`;
};

interface IButton {
  label: string;
  size?: ButtonSizes;
  className?: string;
  onClick: () => void;
}

export const Button = ({
  label,
  size = ButtonSizes.medium,
  className,
  onClick,
}: IButton): ReactElement<HTMLButtonElement> => {
  const combinedClasses = classnames(
    styles.buttonBase,
    className && styles[className],
    sizeClassNameHelper(size)
  );

  return (
    <button className={combinedClasses} onClick={onClick}>
      {label}
    </button>
  );
};
