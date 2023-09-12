import { useSelector } from "react-redux";
import { useEffect } from "react";

import { Server } from "../Server";
import { getServerList } from "../../features/serverSelectors";
import { useAppDispatch } from "../../../hooks";
import { fetchServerList } from "../../features/actions";

import styles from "./ServerList.module.css";

export const ServerList = () => {
  const dispatch = useAppDispatch();
  const servers = useSelector(getServerList);

  useEffect(() => {
    dispatch(fetchServerList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!servers) {
    return <div className={styles.popup}>Servers are loading</div>;
  }

  return (
    <div className={styles.container}>
      <h2>The list of available servers</h2>

      <div className={styles.serverListContainer}>
        {servers.map(({ name, distance }) => (
          <Server key={name} name={name} distance={distance} />
        ))}
      </div>
    </div>
  );
};
