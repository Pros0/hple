import React from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

const EducationAutocomplete = () => {
  return <Autocomplete renderInput={() => <TextField fullWidth />} />
}

export default EducationAutocomplete;