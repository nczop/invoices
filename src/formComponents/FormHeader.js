import React from "react";
import PropTypes from "prop-types";

function FormHeader({ header }) {
  return <h1>{header}</h1>;
}
FormHeader.propTypes = {
  header: PropTypes.string.isRequired,
};
export default FormHeader;
