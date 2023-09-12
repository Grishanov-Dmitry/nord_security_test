import { RootState } from "../../store";

const getLogin = (state: RootState) => state.login;
export const getToken = (state: RootState) => getLogin(state).token;
