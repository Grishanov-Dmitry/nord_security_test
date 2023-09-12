import { RootState } from "../../store";

const getServers = (state: RootState) => state.servers;
export const getServerList = (state: RootState) => getServers(state).serverList;
