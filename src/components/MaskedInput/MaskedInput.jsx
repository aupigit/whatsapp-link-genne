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
  onInput,
}) => {
  return (
    <InputMask
      onInput={onInput}
      mask={mask}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    >
      {() => <input placeholder="Ex: (47) 99999-9999" />}
    </InputMask>
  );
};
export default MaskedInput;
