import { ErrorMessage } from "formik";
import PropTypes from "prop-types";

function ErrorMessageValidation(props) {
  return (
    <ErrorMessage name={props.name} component={props.component} style={{ color: "red" }} />
  )
}
export default ErrorMessageValidation;

ErrorMessageValidation.propTypes = {
  name: PropTypes.string.isRequired,
  component: PropTypes.string
};

ErrorMessageValidation.defaultProps = {
  component: 'span'
}