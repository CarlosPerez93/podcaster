import { useQuery } from "@tanstack/react-query";
import { podcastApi } from "../api/Api";

const URL =
  "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

export const useGetPodcast = () => {
  const query = useQuery({
    queryKey: ["podcast"],
    queryFn: () => podcastApi({ path: "get", url: URL, params: "" }),
    staleTime: 1000 * 60 * 60 * 12,
  });

  let data = query.data?.data?.feed.entry;
  return { data, query };
};
