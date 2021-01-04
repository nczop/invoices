import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DatePicker from './DatePicker';

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
function Information() {
  const classes = useStyles();
  return (
    <div className={classes.informationContainer}>
      <div className={classes.column1}>
        <form noValidate autoComplete="off">
          <Box m={2}>
            <TextField id="standard-basic" label="No." className={classes.input} />
          </Box>
        </form>
        <Box m={2} component="span">
          <DatePicker />
        </Box>
        <Box m={2} component="span">
          <DatePicker />
        </Box>
      </div>
      <div className={classes.button}>
        <Box m={0.5}>
          <Button variant="contained">Cancel</Button>
        </Box>
        <Box m={2}>
          <Button variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </div>
    </div>
  );
}
export default Information;
