import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { usePlacesWidget } from "react-google-autocomplete";
function Stepper1({ onChange, value, onSelectAddress, error }) {
  const pinCodeRef = useRef();
  const { ref } = usePlacesWidget({
    apiKey: process.env.REACT_APP_MAP_API_KEY,
    onPlaceSelected: (place) => {
      onSelectAddress(place);
    }
  });

  //country list for search address
  const country = "in";
  return (
    <form onChange={onChange} className='stepper-form-section max-height-80-percentage'>
      <Autocomplete
        ref={ref}
        className='mr-16px mb-16px border-none width-100-percentage border-bottom-1px font-size-16px'
        apiKey={process.env.REACT_APP_MAP_API_KEY}
        options={{
          types: ["address"],
          componentRestrictions: { country }
        }}
      />
      <TextField
        required
        className='mr-16px mb-16px'
        error={!!value.country ? error.country !== true : false}
        helperText={!!value.country && error.country}
        label='Country'
        type={"text"}
        name='country'
        value={value.country}
        variant='standard'
      />
      <TextField
        required
        className='mr-16px mb-16px'
        label='City'
        name='city'
        type={"tel"}
        value={value.city}
        variant='standard'
        error={!!value.city ? error.city !== true : false}
        helperText={!!value.city && error.city}
      />
      <TextField
        required
        className='mr-16px mb-16px'
        type={"number"}
        error={!!value.pinCode ? error.pinCode !== true : false}
        helperText={!!value.pinCode && error.pinCode}
        label='Pin code'
        name='pinCode'
        value={value.pinCode}
        ref={pinCodeRef}
        variant='standard'
      />
      <TextField
        className='mr-16px mb-16px'
        type={"number"}
        error={false}
        label='Lucky number'
        name='luckyNumber'
        value={value.luckyNumber}
        variant='standard'
      />
      <TextField
        className='mr-16px mb-16px'
        type={"text"}
        error={false}
        label='Favourite color'
        name='color'
        value={value.color}
        variant='standard'
      />
    </form>
  );
}

export default Stepper1;
