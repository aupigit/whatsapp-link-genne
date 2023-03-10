import { TextField } from "@mui/material";
import React from "react";
import InputMask from "react-input-mask";

const MaskedInput = ({
  value,
  mask,
  onChange,
  onBlur,
  name,
  label,
  touched,
  errors,
}) => {
  return (
    <InputMask mask={mask} value={value} onChange={onChange} onBlur={onBlur}>
      {() => (
        <TextField
          name={name}
          label={label}
          onChange={onChange}
          error={touched && Boolean(errors)}
          fullWidth
        />
      )}
    </InputMask>
  );
};
export default MaskedInput;
