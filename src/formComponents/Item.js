import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { Field } from "formik";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import TextField from '@material-ui/core/TextField';


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

function Item(props) {
  const classes = useStyles();

  const deleteItem = () => {
    props.removeItem(props.id);
  };

  return (
    <>
      <div className={classes.itemContainer}>
        <div className={classes.nameInput}>
          <Box m={2}>
            <Field
              label="Name"
              fullWidth
              as={TextField}
              name={`items[${props.index}].name`}
              InputProps={{
                readOnly: props.disabled,
              }}
            />
          </Box>
        </div>
        <div className={classes.details}>
          <Box m={2}>
            <Field
              label="Amount"
              fullWidth
              as={TextField}
              name={`items[${props.index}].amount`}
              InputProps={{
                readOnly: props.disabled,
              }}
            />
          </Box>
          <Box m={2}>
            <Field
              label="Unit"
              fullWidth
              as={TextField}
              name={`items[${props.index}].unit`}
              InputProps={{
                readOnly: props.disabled,
              }}
            />
          </Box>
          <Box m={2}>
            <Field
              label="Tax"
              fullWidth
              as={TextField}
              name={`items[${props.index}].tax`}
              InputProps={{
                readOnly: props.disabled,
              }}
            />
          </Box>
          <Box m={2}>
            <Field
              label="Price"
              fullWidth
              as={TextField}
              name={`items[${props.index}].price`}
              InputProps={{
                readOnly: props.disabled,
              }}
            />
          </Box>
            <Box>
              <IconButton
                aria-label="delete"
                onClick={deleteItem}
                disabled={!props.isRemovable || props.disabled}
              >
                <DeleteOutlineIcon fontSize="small" />
              </IconButton>
            </Box>          
        </div>
      </div>
    </>
  );
}
export default Item;
