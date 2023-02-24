import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { cpf as cpfValidator, cnpj as cnpjValidator } from "cpf-cnpj-validator";
import { Container, Typography } from "@mui/material";
import PageTitle from "../../components/common/PageTitle";
import { Send, SendOutlined } from "@mui/icons-material";

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
              <p style={{ color: "green" }}>
                {inputValue.length === 11 ? "CPF" : "CNPJ"} válido
              </p>
            ) : (
              <p style={{ color: "red" }}>
                {inputValue.length === 11 ? "CPF" : "CNPJ"} inválido
              </p>
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
  );
};

export default Validator;
