import { ReactElement } from "react";

import classnames from "classnames";

import styles from "./Button.module.css";
import { ButtonSizes } from "../../types";

const sizeClassNameHelper = (size: keyof typeof ButtonSizes) => {
  const className = `button--${size}`;

  return `${styles[className]}`;
};

type ButtonType = "button" | "submit" | "reset" | undefined;

interface IButton {
  type?: ButtonType;
  label: string;
  size?: ButtonSizes;
  className?: string;
  onClick: () => void;
}

export const Button = ({
  type = "button",
  label,
  size = ButtonSizes.medium,
  className = "",
  onClick,
}: IButton): ReactElement<HTMLButtonElement> => {
  const combinedClasses = classnames(
    styles.buttonBase,
    className,
    sizeClassNameHelper(size)
  );

  return (
    <button type={type} className={combinedClasses} onClick={onClick}>
      {label}
    </button>
  );
};
