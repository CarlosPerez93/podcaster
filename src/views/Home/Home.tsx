import { useGetPodcast } from "../../hooks/useGetPodcast";

export const Home = () => {
  const query = useGetPodcast();
  const c = query.data?.data?.feed.entry;

  return (
    <div>
      {c.map((i: any) => (
        <p>{i.title.label}</p>
      ))}
    </div>
  );
};
