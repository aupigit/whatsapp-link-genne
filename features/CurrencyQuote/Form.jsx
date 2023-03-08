import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const CurrencyConverter = () => {
  const [moedas, setMoedas] = useState([]);
  const [currencyInit, setCurrencyInit] = useState("");
  const [currencyFinal, setCurrencyFinal] = useState("");
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState("");

  useEffect(() => {
    axios
      .get("https://api.exchangerate-api.com/v4/latest/USD")
      .then((response) => {
        const currencyArray = Object.keys(response.data.rates);
        setMoedas(currencyArray);
        setCurrencyInit("USD");
        setCurrencyFinal(currencyArray[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleConverter = () => {
    axios
      .get(`https://api.exchangerate-api.com/v4/latest/${currencyInit}`)
      .then((response) => {
        const rate = response.data.rates[currencyFinal];
        setResultado((valor * rate).toFixed(2));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChangeCurrencyInit = (event) => {
    setCurrencyInit(event.target.value);
  };

  const handleChangeCurrencyFinal = (event) => {
    setCurrencyFinal(event.target.value);
  };

  const handleChangeValor = (event) => {
    setValor(event.target.value);
  };

  return (
    <div>
      <Paper elevation={3} sx={{ p: 3, mt: 5 }}>
        <FormControl variant="outlined" sx={{ m: 1 }}>
          <InputLabel id="de-label">De</InputLabel>
          <Select
            labelId="de-label"
            id="de-select"
            value={currencyInit}
            onChange={handleChangeCurrencyInit}
            label="De"
          >
            {moedas.map((moeda) => (
              <MenuItem key={moeda} value={moeda}>
                {moeda}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined" sx={{ m: 1 }}>
          <InputLabel id="para-label">Para</InputLabel>
          <Select
            labelId="para-label"
            id="para-select"
            value={currencyFinal}
            onChange={handleChangeCurrencyFinal}
            label="Para"
          >
            {moedas.map((moeda) => (
              <MenuItem key={moeda} value={moeda}>
                {moeda}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          id="standard-basic"
          label="Valor"
          variant="filled"
          value={valor}
          onChange={handleChangeValor}
          sx={{ m: 1 }}
        />
        <Button
          variant="contained"
          onClick={handleConverter}
          sx={{ mt: 1, ml: 1 }}
        >
          Converter
        </Button>

        {resultado && (
          <Box mt={2}>
            <Typography variant="body1">Resultado: {resultado}</Typography>
          </Box>
        )}
      </Paper>
    </div>
  );
};

export default CurrencyConverter;
