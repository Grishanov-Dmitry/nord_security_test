import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "../store";
import { HomePage } from "./views/HomePage";
import { ServerList } from "./components/ServerList";

import { SignInPage } from "./views/SignInPage";
import { Layout } from "./components/Layout";

export const App = () => (
  <Provider store={store}>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route
            path="/*"
            element={
              <Layout>
                <Routes>
                  <Route path="main" element={<HomePage />} />
                  <Route path="servers" element={<ServerList />} />
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  </Provider>
);
