import { useQuery } from "@tanstack/react-query";
import { podcastApi } from "../api/Api";

export const useGetPodcast = () => {
  const query = useQuery({
    queryKey: ["podcast"],
    queryFn: podcastApi,
  });

  return query;
};
