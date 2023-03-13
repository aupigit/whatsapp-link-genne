import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  Grid,
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
        setResultado(
          (valor * rate).toLocaleString("pt-br", {
            style: "currency",
            currency: currencyFinal,
          })
        );
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
    <Grid container spacing={2} justifyContent="flex-end">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 3, mb: 5 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth variant="outlined">
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
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth variant="outlined">
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
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth variant="outlined">
                  <TextField
                    id="outlined-number"
                    label="Valor"
                    value={valor}
                    onChange={handleChangeValor}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Box mt={3}>
              <Button variant="contained" onClick={handleConverter}>
                Converter
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 3, mb: 5 }}>
            <Typography variant="h6" gutterBottom>
              Resultado:
            </Typography>
            <Typography variant="h3" color="primary">
              {resultado}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CurrencyConverter;
