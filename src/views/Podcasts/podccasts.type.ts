import propTypes from "prop-types";
export const PodcastsPropTypes = {
  data: propTypes.any,
  img: propTypes.any,
  author: propTypes.any,
};
export const PodcastsDefaultProps = {
  data: null,
};

export type PodcastsProps = propTypes.InferProps<typeof PodcastsPropTypes>;
