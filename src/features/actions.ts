import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";

import { ITokenResponse } from "../api";
import { baseUrl } from "../../config";
import { RootState } from "../../store";
import { saveServers } from "./serverSlice";
import { getToken } from "./loginSelectors";

// TODO Need to move the logic of request to an api file
export const fetchToken: AsyncThunk<
  ITokenResponse,
  { username: string; password: string },
  Record<string, string>
> = createAsyncThunk("servers/getToken", async (credentials) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    const body = JSON.stringify(credentials);

    try {
      const response = await fetch(`${baseUrl}tokens`, {
        method: "POST",
        headers,
        body,
      });

      if (response.status === 200) {
        const data = await response.json();

        return data;
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  } catch (error) {
    console.error("Error fetching token:", error);
    throw error;
  }
});

export const fetchServerList = createAsyncThunk("servers/fetchServerList", async (_, { getState, dispatch }) => {
  const token = getToken(getState() as RootState);

  if (!token) {
    console.log('Can not use request without a token');

    return;
  }
  
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: token
    };

    try {
      const response = await fetch(`${baseUrl}servers`, {
        headers
      });

      if (response.status === 200) {
        const data = await response.json();

        dispatch(saveServers(data));
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  } catch (error) {
    console.error("Error fetching token:", error);
    throw error;
  }
});