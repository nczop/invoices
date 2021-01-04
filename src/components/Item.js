import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(() => ({
  itemContainer: {
    display: "flex",
  },
  nameInput: {
    flex: "50%",
  },
  details: {
    flex: "50%",
    display: "flex",
  },
}));

function Item() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.itemContainer}>
        <div className={classes.nameInput}>
        <Box m={2}>
            <TextField label="Name" fullWidth />
        </Box>
        </div>
        <div className={classes.details}>
          <Box m={2}>
            <TextField label="Amount" fullWidth />
          </Box>
          <Box m={2}>
            <TextField label="Unit" fullWidth />
          </Box>
          <Box m={2}>
            <TextField label="Tax" fullWidth />
          </Box>
          <Box m={2}>
            <TextField label="Price" fullWidth />
          </Box>
        </div>
      </div>
    </>
  );
}
export default Item;
