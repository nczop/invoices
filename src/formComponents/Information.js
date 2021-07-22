import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Field } from "formik";
import { DatePicker } from "formik-material-ui-pickers";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import ErrorMessageValidation from "./ErrorMessageValidation";

const useStyles = makeStyles(() => ({
  informationContainer: {
    display: "flex",
  },
  button: {
    display: "flex",
    flex: "50%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  column1: {
    flex: "50%",
    justifyContent: "flex-start",
  },
  datePickers: {
    display: "flex",
  },
  input: {
    width: "87%",
  },
}));
function Information(props) {
  const classes = useStyles();
  const history = useHistory();

  const handleCancelButton = () => {
    history.push("/invoices");
  };

  return (
    <div className={classes.informationContainer}>
      <div className={classes.column1}>
        <Box m={2}>
          <Field
            id="standard-disabled"
            label="No."
            className={classes.input}
            as={TextField}
            name="id"
            readOnly={props.disabled}
          />
          <ErrorMessageValidation name="id" component="div"/>
        </Box>
        <Box m={2} component="span">
          <Field
            component={DatePicker}
            label="Created date"
            name="created"
            readOnly={props.disabled}
          />
          <ErrorMessageValidation name="created" />
        </Box>
        <Box m={2} component="span">
          <Field
            component={DatePicker}
            label="Valid until date"
            name="validUntil"
            readOnly={props.disabled}
          />
        </Box>
      </div>
      <div className={classes.button}>
        <Box m={0.5}>
          <Button
            variant="contained"
            disabled={props.disabled}
            onClick={handleCancelButton}
          >
            Cancel
          </Button>
        </Box>
        <Box m={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={props.submitForm}
            disabled={props.disabled}
          >
            Save
          </Button>
        </Box>
      </div>
    </div>
  );
}

Information.propTypes = {
  disabled: PropTypes.bool,
  submitForm: PropTypes.func.isRequired,
};

Information.defaultProps = {
  disabled: false,
};
export default Information;
