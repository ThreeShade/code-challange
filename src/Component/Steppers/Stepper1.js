import React from "react";
import TextField from "@mui/material/TextField";
import { validate } from "../../utils/validations";
function Stepper1({ onChange, value }) {
  return (
    <form onChange={onChange} className="stepper-form-section" >
      <TextField
        error={validate("name",value.fullName)?.error}
        label="Full name"
        type={"text"}
        name="fullName"
        value={value.fullName}
        helperText={validate("name",value.fullName)?.message}
        variant="standard"
      />
      <TextField
        error={false}
        label="Email"
        type={"email"}
        name="email"
        value={value.email}
        helperText="Incorrect email"
        variant="standard"
      />
      <TextField
        error={false}
        label="Phone number"
        name="phoneNumber"
        type={"tel"}
        value={value.phoneNumber}
        helperText="Incorrect phone number"
        variant="standard"
      />
      <TextField
        type={"number"}
        error={false}
        label="Age"
        name="age"
        value={value.age}
        helperText="Incorrect phone number"
        variant="standard"
      />
      <TextField
        type={"number"}
        error={false}
        label="Height"
        name="height"
        value={value.height}
        helperText="Incorrect height"
        variant="standard"
      />
      <TextField
        type={"text"}
        error={false}
        label="Weight"
        name="weight"
        value={value.weight}
        helperText="Incorrect weight"
        variant="standard"
      />
    </form>
  );
}

export default Stepper1;
