import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import { StyledEngineProvider } from '@mui/material';
import Demo from './Demo';



export default function Forms() {
  const [text, setText] = React.useState('');
  const [numbers, setNumbers] = React.useState(0);
  const [date, setDate] = React.useState<number>(new Date().getTime());
  const [rows, setRows] = React.useState([{ text: '', numbers: 0, date: 0 }]);
  const [editIdx, setEditIdx] = React.useState(-1);
  const [editText, setEditText] = React.useState('');
  const [editNumbers, setEditNumbers] = React.useState(0);
  const [editDate, setEditDate] = React.useState('');

  const handleAdd = () => {
    setRows(old => [...old, { text, numbers, date: new Date(date).getTime() }]);
    setText('');
    setNumbers(0);
    setDate(new Date().getTime());
  };

  const startEdit = (idx: number, row: {
    date?: number;
    text: any;
    numbers: any;
  }) => {
    setEditIdx(idx);
    setEditText(row.text);
    setEditNumbers(row.numbers);
    setEditDate(row.date ? row.date.toString() : '');
  };

  const cancelEdit = () => {
    setEditIdx(-1);
    setEditText('');
    setEditNumbers(0);
    setEditDate('');
  };

  const saveEdit = (idx: number) => {
    const updatedRows = rows.map((row, index) =>
      index === idx ? { ...row, text: editText, numbers: editNumbers, date: new Date(editDate).getTime() } : row
    );
    setRows(updatedRows);
    cancelEdit();
  };

  const deleteRow = (idx: number) => {
    setRows(rows.filter((_, index) => index !== idx));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} lg={12}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-text"
              label="Text"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              value={numbers}
              onChange={(e) => setNumbers(Number(e.target.value))}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <React.StrictMode>
              <StyledEngineProvider injectFirst>
                <Demo />
              </StyledEngineProvider>
            </React.StrictMode>
            <Button variant="text" onClick={handleAdd}>
              Add
            </Button>

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Text</TableCell>
                    <TableCell align="right">Number</TableCell>
                    <TableCell align="right">Date</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      {editIdx === index ? (
                        <>
                          <TableCell component="th" scope="row">
                            <TextField
                              value={editText}
                              onChange={(e) => setEditText(e.target.value)}
                            />
                          </TableCell>
                          <TableCell align="right">
                            <TextField
                              type="date"
                              value={editDate}
                              onChange={(e) => setEditDate(e.target.value)}
                            />
                          </TableCell>
                          <TableCell align="right">
                            <TextField
                              value={editNumbers}
                              onChange={(e) => setEditNumbers(Number(e.target.value))}
                              type="number"
                            />
                          </TableCell>
                          <TableCell align="right">
                            <IconButton onClick={() => saveEdit(index)}>
                              <SaveIcon />
                            </IconButton>
                            <IconButton onClick={cancelEdit}>
                              <CancelIcon />
                            </IconButton>
                          </TableCell>
                        </>
                      ) : (
                        <>
                          <TableCell component="th" scope="row">
                            {row.text}
                          </TableCell>
                          <TableCell align="right">{row.numbers}</TableCell>
                          <TableCell align="right">{new Date(row.date).toLocaleDateString()}</TableCell>

                          <TableCell align="right">
                            <IconButton onClick={() => startEdit(index, row)}>
                              <EditIcon />
                            </IconButton>
                            <IconButton onClick={() => deleteRow(index)}>
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Box>
      </Grid>
    </Grid>


  );
}

