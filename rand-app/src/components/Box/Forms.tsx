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

export default function Forms() {
  const [text, setText] = React.useState('');
  const [numero, setNumero] = React.useState(0);
  const [show] = React.useState(true);
  const [rows, setRows] = React.useState<{ text: string; numero: number; }[]>([]);

  const onClickButao = () => {
    setRows(old => [...old, { text, numero }]);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={4}>
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
              value={numero}
              onChange={(e) => setNumero(Number(e.target.value))}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button variant="text" onClick={onClickButao}>
              Add
            </Button>
            {show && (
              <div>
                Hello {text}, Number {numero}
              </div>
            )}

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Text</TableCell>
                    <TableCell align="right">Number</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.text}
                      </TableCell>
                      <TableCell align="right">{row.numero}</TableCell>
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
