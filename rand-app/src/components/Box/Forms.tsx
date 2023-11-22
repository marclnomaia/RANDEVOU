import * as React from 'react';
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

export default function Forms() {
  const [text, setText] = React.useState('');
  const [numbers, setNumbers] = React.useState(0);
  const [rows, setRows] = React.useState<{ text: string; numbers: number }[]>([]);
  const [editIdx, setEditIdx] = React.useState(-1);
  const [editText, setEditText] = React.useState('');
  const [editNumbers, setEditNumbers] = React.useState(0);

  const handleAdd = () => {
    setRows(old => [...old, { text, numbers }]);
    setText('');
    setNumbers(0);
  };

  const startEdit = (idx: React.SetStateAction<number>, row: { text: any; numbers: any; }) => {
    setEditIdx(idx);
    setEditText(row.text);
    setEditNumbers(row.numbers);
  };

  const cancelEdit = () => {
    setEditIdx(-1);
    setEditText('');
    setEditNumbers(0);
  };

  const saveEdit = (idx: number) => {
    const updatedRows = rows.map((row, index) =>
      index === idx ? { ...row, text: editText, numbers: editNumbers } : row
    );
    setRows(updatedRows);
    cancelEdit();
  };

  const deleteRow = (idx: number) => {
    const updatedRows = rows.filter((_, index) => index !== idx);
    setRows(updatedRows);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8} lg={9}>
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
            <Button variant="text" onClick={handleAdd}>
              Add
            </Button>

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Text</TableCell>
                    <TableCell align="right">Number</TableCell>
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
