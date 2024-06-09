import { useParams } from "react-router-dom";
import { useGetPodcastById } from "../../hooks/useGetPodcastById";
import { Spin } from "antd";

export const PodcastById = () => {
  const { id } = useParams();
  const { data } = useGetPodcastById(id);

  console.log(data);

  return (
    <Spin spinning={!data}>
      {data?.map((info: any) => (
        <h1>{info.collectionName}</h1>
      ))}
    </Spin>
  );
};
