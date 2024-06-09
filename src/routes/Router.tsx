import { createBrowserRouter } from "react-router-dom";
import { CustomHeader } from "../components/CustomHeader/CustomHeader";
import { Home } from "../views/Home/Home";
import { PodcastById } from "../views/PodcastById/PodcastById";
import { PodcastByEpisode } from "../views/PodcastByEpidode/PodcastByEpidode";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CustomHeader />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/podcast/:id",
        element: <PodcastById />,
      },
      {
        path: "/podcast/:id/episode/:episodeId",
        element: <PodcastByEpisode />,
      },
    ],
  },
]);
