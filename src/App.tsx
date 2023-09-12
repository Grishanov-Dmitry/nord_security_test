import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import styles from "./App.module.css";
import { store } from "../store";
import { HomePage } from "./views/HomePage";
import { ServerList } from "./components/ServerList";

import { SignInPage } from "./views/SignInPage";

export const App = () => (
  <Provider store={store}>
    <div className={styles.mainContainer}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/main" element={<HomePage />} />
          <Route path="/servers" element={<ServerList />} />
        </Routes>
      </BrowserRouter>
    </div>
  </Provider>
);
