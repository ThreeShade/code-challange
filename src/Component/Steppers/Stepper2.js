import React from "react";
import TextField from "@mui/material/TextField";
function Stepper1({ onChange, value }) {
  return (
    <form
      onChange={onChange}
      className="stepper-form-section max-height-80-percentage"
    >
      <TextField
        required
        className="mr-16px mb-16px"
        error={false}
        label="Address"
        type={"text"}
        name="address"
        value={value.address}
        variant="standard"
      />
      <TextField
        required
        className="mr-16px mb-16px"
        error={false}
        label="Street"
        type={"text"}
        name="street"
        value={value.street}
        variant="standard"
      />
      <TextField
        required
        className="mr-16px mb-16px"
        error={false}
        label="City"
        name="city"
        type={"tel"}
        value={value.city}
        variant="standard"
      />
      <TextField
        required
        className="mr-16px mb-16px"
        type={"number"}
        error={false}
        label="Pin code"
        name="pinCode"
        value={value.pinCode}
        variant="standard"
      />
      <TextField
        required
        className="mr-16px mb-16px"
        type={"number"}
        error={false}
        label="Lucky number"
        name="luckyNumber"
        value={value.luckyNumber}
        variant="standard"
      />
      <TextField
        required
        className="mr-16px mb-16px"
        type={"text"}
        error={false}
        label="Favourite color"
        name="color"
        value={value.color}
        variant="standard"
      />
    </form>
  );
}

export default Stepper1;
