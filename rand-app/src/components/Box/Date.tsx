import * as React from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Box, Grid } from '@mui/material';
//import { useData } from './DataContext';

function Date() {
  //Hook useData//
  // const [data, setData] = useData();
  //const handleDateChange = (newDate: any) => { // Alterado para 'any', pois não sabemos o tipo exato retornado
  // Atualiza o novo valor. Você pode precisar formatar 'newDate' antes de configurá-lo.
  // const formattedDate = newDate ? newDate.toString() : ''; // Simples conversão para string; ajuste conforme necessário
  //setData((prevData) => ({ ...prevData, date: formattedDate }));
  //};

  return (

    <Grid container spacing={2} padding={3}>
      <Grid item xs={12} sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'lightgrey',
        marginTop: '15px',

      }}>
        <Box sx={{
          flexGrow: 1,
          margin: 2,
        }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={[
                'DateTimePicker',
              ]}>
              <DemoItem
              >
                <DateTimePicker

                  sx={{
                    backgroundColor: 'lightblue'
                  }} />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </Box>
      </Grid>
    </Grid>
  );
}
export default Date;
