import { FC } from "react";

import CustomInput from "../CustomInput/CustomInput";

import { CustomFilterProps } from "./customFilter.type";

import styles from "./CustomFilter.module.css";

export const CustomFilter: FC<CustomFilterProps> = ({ handleFilter }) => {
  return (
    <div className={styles.filterPice}>
      <CustomInput
        label={`100`}
        htmlFor="max"
        id="max"
        name="max"
        type="text"
        min={0}
        max={Infinity}
        placeHolder="Filter podcasts..."
        handleFilter={handleFilter}
      />
    </div>
  );
};

export default CustomFilter;
