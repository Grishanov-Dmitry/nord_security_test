import classNames from "classnames";

import { Button } from "../Button";
import { Form } from "../Form";
import { Input } from "../Input";

import styles from "./SignInForm.module.css";

const loginCombinedClasses = classNames(styles.signInInput, styles.loginInput);

export const SignInForm = () => (
  <Form className={styles.signInForm}>
    <Input
      value=""
      placeholder="Enter a login"
      className={loginCombinedClasses}
      onChange={() => {}}
    />
    <Input
      className={styles.signInInput}
      value=""
      placeholder="Enter a password"
      onChange={() => {}}
    />

    <Button
      type="submit"
      label="LogIn"
      className={styles.submitButton}
      onClick={() => {}}
    />
  </Form>
);
