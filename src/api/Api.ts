import axios from "axios";

const url =
  "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

export const podcastApi = async () => {
  const response = await axios.get(url);

  return response;
};
