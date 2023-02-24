import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { cpf as cpfValidator, cnpj as cnpjValidator } from "cpf-cnpj-validator";
import { Container, Typography, Alert } from "@mui/material";
import PageTitle from "../../components/common/PageTitle";
import { Send } from "@mui/icons-material";

const Validator = () => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setIsValid(null);
  };

  const handleValidate = () => {
    const isCpf = inputValue.length === 11;
    const isCnpj = inputValue.length === 14;
    if (isCpf) {
      const isValid = cpfValidator.isValid(inputValue);
      setIsValid(isValid);
    } else if (isCnpj) {
      const isValid = cnpjValidator.isValid(inputValue);
      setIsValid(isValid);
    } else {
      setIsValid(false);
    }
  };

  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "20vh",
    }}
  >
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
        {isValid !== null && (
          <Box sx={{ display: "flex", mt: 2 }}>
            {isValid ? (
              <Alert severity="success">
                {inputValue.length === 11 ? "CPF" : "CNPJ"} válido
              </Alert>
            ) : (
              <Alert severity="error">
                {inputValue.length === 11 ? "CPF" : "CNPJ"} inválido
              </Alert>
            )}
          </Box>
        )}
        <Box sx={{ display: "flex", mt: 2 }}>
          <Button variant="contained" onClick={handleValidate} endIcon={<Send/>}>
            Validar
          </Button>
        </Box>
      </Box>
    </Container>
    </Box>
  );
};

export default Validator;
