import React from 'react';
import TextField from '@mui/material/TextField';


const TextField = ({ label, value, onChange }) => {
  return <TextField varian={'outlined'} label={label} value={value} onChange={onChange} />
}

export default TextField;