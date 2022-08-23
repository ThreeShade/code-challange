import React from "react";
import TextField from "@mui/material/TextField";
function Stepper1({ onChange, value }) {
  return (
    <form onChange={onChange} className="stepper-form-section" >
      <TextField
        error={false}
        label="Address"
        type={"text"}
        name="address"
        value={value.address}
        helperText="Incorrect name."
        variant="standard"
      />
      <TextField
        error={false}
        label="Street"
        type={"text"}
        name="street"
        value={value.street}
        helperText="Incorrect email"
        variant="standard"
      />
      <TextField
        error={false}
        label="City"
        name="city"
        type={"tel"}
        value={value.city}
        helperText="Incorrect phone number"
        variant="standard"
      />
      <TextField
        type={"number"}
        error={false}
        label="Pin code"
        name="pinCode"
        value={value.pinCode}
        helperText="Incorrect phone number"
        variant="standard"
      />
      <TextField
        type={"number"}
        error={false}
        label="Lucky number"
        name="luckyNumber"
        value={value.luckyNumber}
        helperText="Please enter valid number"
        variant="standard"
      />
      <TextField
        type={"text"}
        error={false}
        label="Favourite color"
        name="color"
        value={value.color}
        helperText="Incorrect color"
        variant="standard"
      />
    </form>
  );
}

export default Stepper1;
