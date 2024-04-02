import { Spin } from "antd";
import { useGetPodcast } from "../../hooks/useGetPodcast";
import { Podcasts } from "../Podcasts/Podcasts";

import styles from "./Home.module.css";

export const Home = () => {
  const { data, query } = useGetPodcast();

  return (
    <Spin spinning={query.isLoading}>
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
