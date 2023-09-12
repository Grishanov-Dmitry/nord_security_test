import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";

import { RootState } from "../../store";
import { saveServers } from "./serverSlice";
import { getToken } from "./loginSelectors";
import { ITokenResponse } from "../types";
import { fetchServerListApi, fetchTokenApi } from "../api";

export const fetchToken: AsyncThunk<
  ITokenResponse,
  { username: string; password: string },
  Record<string, string>
> = createAsyncThunk("servers/getToken", async (credentials) => {
    const data = await fetchTokenApi(credentials);

    return data;
});

export const fetchServerList = createAsyncThunk("servers/fetchServerList", async (_, { getState, dispatch }) => {
  const token = getToken(getState() as RootState);

  if (!token) {
    console.log('Can not use request without a token');

    return;
  }
  const data = await fetchServerListApi(token);

  dispatch(saveServers(data));
});