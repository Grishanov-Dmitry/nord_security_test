import axios, { AxiosResponse } from 'axios';
import { logger } from './logger';
import { IServer } from './types';

const BASE_URL = process.env.SERVER_BASE_URL;

const tokenApi = axios.create({
  baseURL: BASE_URL,
});

export const fetchToken = async (): Promise<IServer[]> => {
  try {
    logger.info('The token request is sent');

    const response: AxiosResponse<IServer[]> = await tokenApi.get('/tokens');

    return response.data;
  } catch (error) {
    logger.error('An error in getting a token');

    throw error;
  }
};

interface ITokenResponse {
    token: string;
}

export const fetchServerList = async (): Promise<ITokenResponse> => {
  try {
    logger.info('The server list request is sent');

    const response: AxiosResponse<ITokenResponse> = await tokenApi.get('/servers');

    return response.data;
  } catch (error) {
    logger.error('An error in getting the server list');

    throw error;
  }
};
