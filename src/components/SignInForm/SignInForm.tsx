import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Button } from "../Button";
import { Form } from "../Form";
import { Input } from "../Input";
import { useAppDispatch } from "../../../hooks";
import { fetchToken } from "../../features/actions";
import { getToken } from "../../features/loginSelectors";

import styles from "./SignInForm.module.css";
import classNames from "classnames";

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

  const dispatch = useAppDispatch();

  const token = useSelector(getToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null) {
      navigate("/main");
    }
  }, [token, navigate]);

  const loginUser = () => {
    dispatch(fetchToken({ username: login, password }));
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
        onClick={loginUser}
      />
    </Form>
  );
};
