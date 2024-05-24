'use client';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';

export function DatePickerMui() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        sx={{
          '& .MuiOutlinedInput-root': {
            border: '1px solid #fff',
            color: '#fff',
          },
          '& .MuiButtonBase-root': {
            color: '#fff',
          },
        }}
      />
    </LocalizationProvider>
  );
}
