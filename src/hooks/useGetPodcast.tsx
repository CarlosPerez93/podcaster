import { useQuery } from "@tanstack/react-query";
import { podcastApi } from "../api/Api";

export const useGetPodcast = () => {
  const query = useQuery({
    queryKey: ["podcast"],
    queryFn: podcastApi,
    staleTime: 1000 * 60 * 60 * 12,
  });

  let data = query.data?.data?.feed.entry;
  return { data, query };
};
