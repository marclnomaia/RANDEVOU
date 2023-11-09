import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Box, Grid } from '@mui/material';
import { useData } from '../Box/useData';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

function Date() {
  const { data, setData } = useData();
  const handleDateChange = (newDate: Date | null) => {
    const formattedDate = newDate ? newDate.toISOString() : '';
    setData((prevData: any) => ({ ...prevData, date: formattedDate }));
  };
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
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DemoContainer
              components={[
                'DateTimePicker',
              ]}>
              <DemoItem>
                <DateTimePicker
                  sx={{ backgroundColor: 'lightblue' }}
                  onChange={handleDateChange}
                  value={data.date ? new globalThis.Date(data.date) : null}

                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </Box>
      </Grid>
    </Grid>
  );
}
export default Date;
