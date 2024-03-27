import propTypes from "prop-types";

export const IndicatorPropTypes = {
  state: propTypes.bool.isRequired,
};
export const IndicatorDefaultProps = {};

export type IndicatorProps = propTypes.InferProps<typeof IndicatorPropTypes>;
