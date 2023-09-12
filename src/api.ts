import axios, { AxiosResponse } from 'axios';
import { baseUrl } from '../config';
import { IServer } from './types';

const tokenApi = axios.create({
  baseURL: baseUrl
});

export const fetchTokenApi = async (body: { username: string; password: string }): Promise<ITokenResponse> => {
  try {
    console.log('The token request is sent');
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const headers = {
        "Content-Type": "application/json",
      };
    
    const response: AxiosResponse<ITokenResponse> =
         await tokenApi.post('/tokens', body, { headers });
    
    return response.data;
} catch (error) {
      console.log('An error in getting a token');

    throw error;
  }
};

export interface ITokenResponse {
    token: string;
}

export const fetchServerListApi = async (token: string): Promise<IServer[]> => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: token
    };
    
    console.log('The server list request is sent');
    await new Promise(resolve => setTimeout(resolve, 1000));

    const response: AxiosResponse<IServer[]> = await tokenApi.get('/servers', { headers });

    return response.data;
  } catch (error) {
    console.log('An error in getting the server list');

    throw error;
  }
};
