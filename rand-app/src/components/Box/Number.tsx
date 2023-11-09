import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import {
  Unstable_NumberInput as BaseNumberInput,
  NumberInputProps
} from '@mui/base/Unstable_NumberInput';
import { useData } from '../Box/useData';
import React from 'react';

export const CustomNumberInput = React.forwardRef(function CustomNumberInput(
  props: NumberInputProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <BaseNumberInput
      slotProps={{
        incrementButton: {
          children: '▴',
        },
        decrementButton: {
          children: '▾',
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

export default function Number() {
  const { setData } = useData();
  const [inputValue, setInputValue] = React.useState<string>('');

  const handleSaveAndClearInput = () => {
    if (inputValue.trim() !== '') { // verify the field if is empty.
      setData((prevData) => ({
        ...prevData,
        numbers: [...(prevData.numbers || []), inputValue], // Add number to the array.
      }));
    }
    setInputValue(''); // clean box field.
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSaveAndClearInput(); // function to clean e save data.
    }
  };
  const handleBlur = () => {
    handleSaveAndClearInput();
  };
  return (
    <Grid container spacing={2} padding={3}>
      <Grid item xs={12} sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'lightgrey',
        padding: 1,
        marginTop: '15px'

      }}>
        <Box sx={{
          flexGrow: 1,
          margin: 2,
          backgroundColor: 'lightBlue'
        }}>
          <Box sx={{ position: 'relative' }}>
            <TextField
              fullWidth
              type="number"
              label="Enter a number"
              variant="outlined"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              onBlur={handleBlur}
            />
            {/* clean field */}
            {inputValue && (
              <IconButton
                aria-label="clear"
                onClick={handleSaveAndClearInput}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: '40px',
                  transform: 'translateY(-50%)',
                }}
              >
                <ClearIcon />
              </IconButton>
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

