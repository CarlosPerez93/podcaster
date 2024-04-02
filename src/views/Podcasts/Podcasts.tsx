import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { FC } from "react";
import { PodcastsProps } from "./podccasts.type";

import styles from "./Podcasts.module.css";
export const Podcasts: FC<PodcastsProps> = ({ data, img, author }) => {
  return (
    <Card
      hoverable
      className={styles.podcasts}
      cover={<img className={styles.album} alt="photo podcast" src={img[0]} />}
    >
      <Meta title={data.title.label} description={`Author: ${author}`} />
    </Card>
  );
};
