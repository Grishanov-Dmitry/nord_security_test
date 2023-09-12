import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "../store";
import { HomePage } from "./views/HomePage";
import { ServerList } from "./components/ServerList";

import { SignInPage } from "./views/SignInPage";
import { Layout } from "./components/Layout";
import { AboutUsPage } from "./views/AboutUsPage";
import { Loader } from "./components/Loader";

export const App = () => {
  return (
    <Provider store={store}>
      <Loader>
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
                    <Route path="about" element={<AboutUsPage />} />
                  </Routes>
                </Layout>
              }
            />
          </Routes>
        </BrowserRouter>
      </Loader>
    </Provider>
  );
};
