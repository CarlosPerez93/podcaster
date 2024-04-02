import { Spin } from "antd";
import { useGetPodcast } from "../../hooks/useGetPodcast";
import { Podcasts } from "../Podcasts/Podcasts";

import styles from "./Home.module.css";
import { useState } from "react";
import CustomFilter from "../../components/CustomFilter/CustomFilter";

export const Home = () => {
  const { data, query } = useGetPodcast();
  const [filter, setFilter] = useState<string>("");
  const [key, setKey] = useState<string>("");

  const handleFilter = (e: any) => {
    setFilter(e.target.value);
    setKey(key);
  };

  return (
    <Spin spinning={query.isLoading}>
      <CustomFilter handleFilter={(e) => handleFilter(e)} />
      <div className={styles.home}>
        {data?.map((res: any, index: number) => (
          <Podcasts
            key={index}
            data={res}
            img={res["im:image"].map((img: any) => img.label)}
            author={res["im:artist"].label}
          />
        ))}
      </div>
    </Spin>
  );
};
