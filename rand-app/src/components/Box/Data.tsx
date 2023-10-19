import * as React from 'react';
import AdapterMoment from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DateTimePicker, DateTimePickerProps } from '@mui/lab';
import { TextField, ThemeProvider, useTheme, createTheme, Grid } from '@mui/material';
import moment from 'moment-timezone';

function Data() {
  const [selectedDate, setSelectedDate] = React.useState<moment.Moment | null>(moment());
  const [timeZone, setTimeZone] = React.useState<string>('UTC');

  const handleDateChange = (date: moment.Moment | null) => {
    setSelectedDate(date);
  };

  const handleTimeZoneChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newZone = event.target.value;
    setTimeZone(newZone);

    // Clone the current date and change the timezone, then update the state.
    if (selectedDate) {
      const updatedDate = selectedDate.clone().tz(newZone);
      setSelectedDate(updatedDate);
    }
  };

  const existingTheme = useTheme();

  const theme = React.useMemo(
    () => createTheme({ direction: 'rtl' }, existingTheme),
    [existingTheme],
  );

  const timeZones = moment.tz.names();

  // Extracting type for renderInput params
  type RenderInputParams = Parameters<NonNullable<DateTimePickerProps<moment.Moment>['renderInput']>>[0];

  return (
    <ThemeProvider theme={theme}>
      <div dir="rtl">
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <DateTimePicker
                renderInput={(params) => (
                  <TextField {...params.inputProps} // spread inputProps
                    inputRef={params.inputRef}
                  />)}
                label="Date and Time"
                value={selectedDate}
                onChange={handleDateChange}
                minDate={moment('1900-01-01')}
                maxDate={moment('2100-12-31')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                select
                label="Time Zone"
                value={timeZone}
                SelectProps={{
                  native: true,
                }}
                onChange={handleTimeZoneChange}
                variant="standard"
                fullWidth
              >
                {timeZones.map((zone) => (
                  <option key={zone} value={zone}>
                    {zone}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </LocalizationProvider>
      </div>
    </ThemeProvider>
  );
}

export default Data;
