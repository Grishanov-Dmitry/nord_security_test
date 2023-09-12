import { IServer } from "../../types";

export const Server = ({ name, distance }: IServer) => (
  <div>
    <h4>Name of Server is: {name}</h4>
    <p>Distance to the server is {distance}</p>
  </div>
);
