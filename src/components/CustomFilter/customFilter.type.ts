import propTypes from "prop-types";

export const CustomFilterPropTypes = {
  handleFilter: propTypes.func.isRequired,
};

export const CustomFilterDefaultProps = {};

export type CustomFilterProps = propTypes.InferProps<
  typeof CustomFilterPropTypes
>;
