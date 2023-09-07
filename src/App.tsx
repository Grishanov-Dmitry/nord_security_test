import { SignInPage } from "./views/SignInPage";

import styles from "./App.module.css";
import { Provider } from "react-redux";
import { store } from "../store";

export const App = () => (
  <Provider store={store}>
    <main className={styles.mainContainer}>
      <SignInPage />
    </main>
  </Provider>
);
