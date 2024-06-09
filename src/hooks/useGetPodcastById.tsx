import { useQuery } from "@tanstack/react-query";
import { podcastApi } from "../api/Api";

const URL = "https://itunes.apple.com/lookup?id";

export const useGetPodcastById = (id: any) => {
  const query = useQuery({
    queryKey: ["podcast"],
    queryFn: () =>
      podcastApi({
        path: "get",
        url: `${URL}=${id}`,
        params: "",
      }),
    staleTime: 1000 * 60 * 60 * 12,
  });

  let data = query.data?.data?.results;
  return { data, query };
};
