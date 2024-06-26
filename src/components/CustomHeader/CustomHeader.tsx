import { Divider } from "antd";

import styles from "./CustomHeader.module.css";
import { Indicator } from "../Indicator/Indicator";
import { Outlet } from "react-router-dom";

export const CustomHeader = () => {
  return (
    <div className={styles.custom_header}>
      <div className={styles.container}>
        <h1 className={styles.tittle}>PodCaster</h1>
        <Indicator state={true} />
      </div>
      <Divider />
      <Outlet />
    </div>
  );
};
