import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { cpf as cpfValidator, cnpj as cnpjValidator } from "cpf-cnpj-validator";
import { Container, Typography } from "@mui/material";
import PageTitle from "../../components/common/PageTitle";

const Validator = () => {
  const [inputValue, setInputValue] = useState("");
  const [isCpfValid, setIsCpfValid] = useState(null);
  const [isCnpjValid, setIsCnpjValid] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setIsCpfValid(null);
    setIsCnpjValid(null);
  };

  const handleValidateCpf = () => {
    const isValid = cpfValidator.isValid(inputValue);
    setIsCpfValid(isValid);
  };

  const handleValidateCnpj = () => {
    const isValid = cnpjValidator.isValid(inputValue);
    setIsCnpjValid(isValid);
  };

  return (
    <Container component="main">
      <PageTitle>Validador de CPF e CNPJ</PageTitle>
      <Typography
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
        }}
        paragraph
        mb={3}
      >
        Valide CPF e CNPJ
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          label="CPF ou CNPJ"
          value={inputValue}
          onChange={handleInputChange}
        />
        {isCpfValid !== null && (
          <Box sx={{ display: "flex", mt: 2 }}>
            {isCpfValid ? (
              <p style={{ color: "green" }}>CPF válido</p>
            ) : (
              <p style={{ color: "red" }}>CPF inválido</p>
            )}
          </Box>
        )}
        {isCnpjValid !== null && (
          <Box sx={{ display: "flex", mt: 2 }}>
            {isCnpjValid ? (
              <p style={{ color: "green" }}>CNPJ válido</p>
            ) : (
              <p style={{ color: "red" }}>CNPJ inválido</p>
            )}
          </Box>
        )}
        <Box sx={{ display: "flex", mt: 2 }}>
          <Button variant="contained" onClick={handleValidateCpf}>
            Validar CPF
          </Button>
          <Button
            variant="contained"
            onClick={handleValidateCnpj}
            sx={{ ml: 1 }}
          >
            Validar CNPJ
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Validator;
