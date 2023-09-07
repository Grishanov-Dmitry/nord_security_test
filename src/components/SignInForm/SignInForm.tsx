import { useState } from "react";

import classNames from "classnames";

import { Button } from "../Button";
import { Form } from "../Form";
import { Input } from "../Input";

import styles from "./SignInForm.module.css";

const loginCombinedClasses = classNames(styles.signInInput, styles.loginInput);

export const SignInForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const changeLogin = (loginValue: string) => {
    setLogin(loginValue);
  };
  const changePassword = (passwordValue: string) => {
    setPassword(passwordValue);
  };

  return (
    <Form className={styles.signInForm}>
      <Input
        value={login}
        placeholder="Enter a login"
        className={loginCombinedClasses}
        onChange={changeLogin}
      />
      <Input
        value={password}
        type="password"
        placeholder="Enter a password"
        className={styles.signInInput}
        onChange={changePassword}
      />

      <Button
        type="submit"
        label="LogIn"
        className={styles.submitButton}
        onClick={() => {}}
      />
    </Form>
  );
};
