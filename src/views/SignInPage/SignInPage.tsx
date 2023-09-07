import { SignInForm } from "../../components/SignInForm";

import styles from "./SignInPage.module.css";

export const SignInPage = () => (
  <div className={styles.signInPageContainer}>
    <h1 className={styles.signInPageHeader}>Sign In</h1>
    <p>Sign In and do your life better with us!</p>

    <SignInForm />
  </div>
);
