import { useState } from "react";
import { Container, Typography, Box, Chip, Paper } from "@mui/material";
import { purple } from "@mui/material/colors";
import { Add, AddLocation, ArrowDownward, LocationCity, MyLocation } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MaskedInput from "./MaskedInput";
import PageTitle from "../../components/common/PageTitle";
import statesData from "./state.json";
import { ArrowDown } from "phosphor-react";

function getStateFromPhone(phone) {
  const phoneDigits = phone.replace(/[^\d]/g, "");
  for (const [key, value] of Object.entries(statesData[0])) {
    if (value.areaCodes?.some((code) => phoneDigits.startsWith(code))) {
      return key;
    }
  }
  return "Não encontrado";
}

function App() {
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [showState, setShowState] = useState(false);

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleButtonClick = () => {
    setState(getStateFromPhone(phone));
    setShowState(true);
  };

  return (
    
    <Container component="main">
      <PageTitle>Buscador de Estado pelo Número de Telefone</PageTitle>
      <Typography sx={{ my: 2 }}>
        Encontre o estado através do número de telefone
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mt: 5 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Typography variant="h5">
            Preencha um número de telefone abaixo
          </Typography>
          <ArrowDownward sx={{ mr: 1 }} />
        </Box>

        <MaskedInput
          mask="(99) 99999-9999"
          label="Número de telefone"
          value={phone}
          onChange={handlePhoneChange}
          margin="normal"
          variant="outlined"
        />

        <Button variant="contained" onClick={handleButtonClick} endIcon={<MyLocation/>} sx={{ mt: 2 }}>
          Verificar estado
        </Button>

        {showState && state && (
          <Typography variant="subtitle1" sx={{ mt: 3 }}>
            <Chip
              label={`O estado é: ${state}`}
              sx={{ bgcolor: purple[700], width: "100%" }}
            />
          </Typography>
        )}
      </Paper>
    </Container>
  );
}

export default App;
