import * as React from 'react';
import { useState } from 'react';
import { Button, Grid, TextField, Box } from '@mui/material';
//import { useData } from './DataContext'; // Ajuste este import conforme o caminho correto em seu projeto.

function PrintButton() {
  //const [data] = useData();
  const [dateInput, setDateInput] = useState('');
  const [textInput, setTextInput] = useState('');
  const [numberInput, setNumberInput] = useState('');

  // Estado para controlar a visibilidade do box de informações
  const [showInfoBox, setShowInfoBox] = useState(false);

  // Manipuladores para atualizar os estados de entrada
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateInput(event.target.value);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value);
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberInput(event.target.value);
  };

  // Quando o botão é pressionado, exibe o box de informações e loga os dados
  const handleSaveClick = () => {
    setShowInfoBox(true);
    //console.log(data); // Isso assumirá que 'data' é um objeto que você deseja registrar.
  };

  // Corpo principal do componente
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      style={{ minHeight: '100vh', paddingTop: '10px' }}
    >
      <Grid item>
        <Button variant="contained" onClick={handleSaveClick}>
          Save
        </Button>
      </Grid>
      {/* Box de informações que mostra os dados coletados, se estiver visível */}
      {showInfoBox && (
        <Grid item>
          <Box
            sx={{
              marginTop: '1rem',
              padding: '1rem',
              border: '1px solid black',
              width: '100%',
              textAlign: 'left',
            }}
          >
            <div>Date: {dateInput}</div>
            <div>Text: {textInput}</div>
            <div>Number: {numberInput}</div>
          </Box>
        </Grid>
      )}
    </Grid>
  );
}

export default PrintButton;

