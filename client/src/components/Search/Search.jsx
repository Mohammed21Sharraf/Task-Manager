import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { BsSearch } from 'react-icons/bs';

export default function InputWithIcon() {
  return (
    <Box sx={{color:'white', '& > :not(style)': { m: 1 } }}>
      <FormControl variant="outlined">

        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <BsSearch  className='icon'/>
            </InputAdornment>
          }
        />
      </FormControl>

      </Box>
  );
}
