import React from "react";
import TextField from "@mui/material/TextField";
function Stepper1({ onChange, value, error }) {
  return (
    <form onChange={onChange} className='stepper-form-section '>
      <TextField
        required
        label='Full name'
        type={"text"}
        name='fullName'
        className='mr-16px mb-16px'
        value={value.fullName}
        error={!!value.fullName ? error.fullName !== true : false}
        helperText={!!value.fullName && error.fullName}
        variant='standard'
      />
      <TextField
        required
        className='mr-16px mb-16px'
        label='Email'
        type={"email"}
        name='email'
        value={value.email}
        error={!!value.email ? error.email !== true : false}
        helperText={!!value.email && error.email}
        variant='standard'
      />
      <TextField
        required
        className='mr-16px mb-16px'
        label='Phone number'
        name='phoneNumber'
        type={"tel"}
        value={value.phoneNumber}
        error={!!value.phoneNumber ? error.phoneNumber !== true : false}
        helperText={!!value.phoneNumber && error.phoneNumber}
        variant='standard'
      />
      <TextField
        required
        className='mr-16px mb-16px'
        type={"number"}
        label='Age'
        name='age'
        value={value.age}
        error={!!value.age ? error.age !== true : false}
        helperText={!!value.age && error.age}
        variant='standard'
      />
      <TextField
        required
        className='mr-16px mb-16px'
        type={"number"}
        label='Height (CMS)'
        name='height'
        value={value.height}
        error={!!value.height ? error.height !== true : false}
        helperText={!!value.height && error.height}
        variant='standard'
      />
      <TextField
        required
        className='mr-16px mb-16px'
        type={"text"}
        label='Weight (KG)'
        name='weight'
        value={value.weight}
        error={!!value.weight ? error.weight !== true : false}
        helperText={!!value.weight && error.weight}
        variant='standard'
      />
    </form>
  );
}

export default Stepper1;
