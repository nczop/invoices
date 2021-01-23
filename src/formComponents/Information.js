import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DatePicker from './DatePicker';
import { Field } from "formik";

const useStyles = makeStyles(() => ({
  informationContainer: {
    display: 'flex',
  },
  button: {
    display: 'flex',
    flex: '50%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  column1: {
    flex: '50%',
    justifyContent: 'flex-start',
  },
  datePickers: {
    display: 'flex',
  },
  input: {
    width: '87%',
  },
}));
function Information(props) {
  const classes = useStyles();

  return (
    <div className={classes.informationContainer}>
      <div className={classes.column1}>
        <form noValidate autoComplete="off">
          <Box m={2}>
            <Field id="standard-disabled" label="No." className={classes.input} component={TextField} name="no" InputProps={{
            readOnly: props.isReadOnly,
          }}/>
          </Box>
        </form>
        <Box m={2} component="span">
          <DatePicker label="Created date"/>
        </Box>
        <Box m={2} component="span">
          <DatePicker label="Valid until date"/>
        </Box>
      </div>
      <div className={classes.button}>
        <Box m={0.5}>
          <Button variant="contained">Cancel</Button>
        </Box>
        <Box m={2}>
          <Button variant="contained" color="primary" onClick={props.submitForm}>
            Save
          </Button>
        </Box>
      </div>
    </div>
  );
}
export default Information;
