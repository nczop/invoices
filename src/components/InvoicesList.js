import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import Container from '@material-ui/core/Container';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

const columns = [
  { id: 'no', label: 'No.', minWidth: 50 },
  { id: 'created', label: 'Created', minWidth: 150 },
  {
    id: 'validUntil',
    label: 'Valid until',
    minWidth: 150,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'amount',
    label: 'Amount',
    minWidth: 150,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(no, created, validUntil, amount) {
  return {
    no,
    created,
    validUntil,
    amount,
  };
}

const rows = [
  createData('01', '10/12/2020', '01/01/2020', 888),
  createData('02', '10/12/2020', '01/01/2020', 888),
  createData('03', '10/12/2020', '01/01/2020', 888),
  createData('04', '10/12/2020', '01/01/2020', 888),
  createData('05', '10/12/2020', '01/01/2020', 888),
  createData('06', '10/12/2020', '01/01/2020', 888),
  createData('07', '10/12/2020', '01/01/2020', 888),
  createData('08', '10/12/2020', '01/01/2020', 888),
  createData('09', '10/12/2020', '01/01/2020', 888),
  createData('10', '10/12/2020', '01/01/2020', 888),
  createData('11', '10/12/2020', '01/01/2020', 888),
  createData('01', '10/12/2020', '01/01/2020', 888),
  createData('02', '10/12/2020', '01/01/2020', 888),
  createData('03', '10/12/2020', '01/01/2020', 888),
  createData('04', '10/12/2020', '01/01/2020', 888),
  createData('05', '10/12/2020', '01/01/2020', 888),
  createData('06', '10/12/2020', '01/01/2020', 888),
  createData('07', '10/12/2020', '01/01/2020', 888),
  createData('08', '10/12/2020', '01/01/2020', 888),
  createData('09', '10/12/2020', '01/01/2020', 888),
  createData('10', '10/12/2020', '01/01/2020', 888),
  createData('11', '10/12/2020', '01/01/2020', 888),
  createData('01', '10/12/2020', '01/01/2020', 888),
  createData('02', '10/12/2020', '01/01/2020', 888),
  createData('03', '10/12/2020', '01/01/2020', 888),
  createData('04', '10/12/2020', '01/01/2020', 888),
  createData('05', '10/12/2020', '01/01/2020', 888),
  createData('06', '10/12/2020', '01/01/2020', 888),
  createData('07', '10/12/2020', '01/01/2020', 888),
  createData('08', '10/12/2020', '01/01/2020', 888),
  createData('09', '10/12/2020', '01/01/2020', 888),
  createData('10', '10/12/2020', '01/01/2020', 888),
  createData('11', '10/12/2020', '01/01/2020', 888),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 2440,
  },
});

function InvoicesList() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container style={{ background: 'grey' }}>
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
                <TableCell align="center" style={{ minWidth: '150' }}>
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
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell align="center" style={{ minWidth: '150' }}>
                      <IconButton
                        aria-label="delete"
                      >
                        <DeleteOutlineIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
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
