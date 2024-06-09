import { Spin } from "antd";
import { useState } from "react";

import { Podcasts } from "../Podcasts/Podcasts";
import CustomFilter from "../../components/CustomFilter/CustomFilter";

import { useFilter } from "../../hooks/useFilter";
import { useGetPodcast } from "../../hooks/useGetPodcast";

import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const [filter, setFilter] = useState<string>("");
  const [key, setKey] = useState<string>("");

  const { data, query } = useGetPodcast();

  const handleFilter = (e: any) => {
    setFilter(e.target.value);
    setKey(key);
  };

  const handlePodcastById = (id: number) => navigate(`/podcast/${id}`);

  return (
    <Spin spinning={query.isLoading}>
      <CustomFilter handleFilter={(e) => handleFilter(e)} />
      <div className={styles.home}>
        {useFilter({ data: data, stateFilter: filter })?.map(
          (res: any, index: number) => (
            <Podcasts
              onclick={() => handlePodcastById(res.id.attributes["im:id"])}
              key={index}
              data={res}
              img={res["im:image"].map((img: any) => img.label)}
              author={res["im:artist"].label}
            />
          )
        )}
      </div>
    </Spin>
  );
};
