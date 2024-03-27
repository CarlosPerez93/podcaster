import { FC } from "react";
import styles from "./Indicator.module.css";
import { IndicatorProps } from "./indicator.type";

export const Indicator: FC<IndicatorProps> = ({ state }) => {
  return (
    <div
      className={styles.indicatorPlay}
      style={state ? { display: "block" } : { display: "none" }}
    />
  );
};
