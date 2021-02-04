import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import useInvoicesList from "../hooks/useInvoicesList";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import Container from "@material-ui/core/Container";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";

const columns = [
  { id: "id", label: "No.", minWidth: 50 },
  {
    id: "created",
    label: "Created",
    minWidth: 150,
    align: "center",
    format: (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString()
    },
  },
  {
    id: "validUntil",
    label: "Valid until",
    minWidth: 150,
    align: "center",
    format: (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString()
    },
  },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: "50px",
  },
  container: {
    maxHeight: 2440,
  },
});

function InvoicesList(props) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useInvoicesList();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const removeItem = (itemId) => {
    axios.delete("http://localhost:3001/invoices/" + itemId).then(() => {
      const newItemsList = rows.filter((item) => item.id !== itemId);
      setRows(newItemsList);
    });
  };

  return (
    <Container>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell align="center" style={{ minWidth: "150" }}>
                  Amount
                </TableCell>
                <TableCell align="center" style={{ minWidth: "150" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          component={Link}
                          to={`/invoice/${row.id}`}
                        >
                          {column.format ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                    <TableCell align="center" style={{ minWidth: "150" }}>
                      {row.items
                        .map((item) => item.price * item.amount)
                        .reduce((a, b) => a + b, 0)}
                    </TableCell>
                    <TableCell align="center" style={{ minWidth: "150" }}>
                      <IconButton
                        aria-label="delete"
                        onClick={() => removeItem(row.id)}
                      >
                        <DeleteOutlineIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
                        component={Link}
                        to={`/editInvoice/${row.id}`}
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  );
}

export default InvoicesList;
