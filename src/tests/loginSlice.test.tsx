import { expect, describe, it, jest } from "@jest/globals";

import { store } from "../../store";
import { logoutUser, saveToken } from "../features/loginSlice";
import { getToken } from "../features/loginSelectors";

jest.mock("../../config.ts", () => ({ baseUrl: "http://example.com" }));

const token = "qwe123";

describe("login slice", () => {
  it("should save token to the store after saveToken action", () => {
    const initToken = getToken(store.getState());

    expect(initToken).toEqual(null);

    store.dispatch(saveToken({ token }));

    const savedToken = getToken(store.getState());

    expect(savedToken).toEqual(token);
  });
  it("should save token as null to the store", () => {
    const current = getToken(store.getState());

    expect(current).toEqual(token);

    store.dispatch(logoutUser());

    const initToken = getToken(store.getState());

    expect(initToken).toEqual(null);
  });
});
