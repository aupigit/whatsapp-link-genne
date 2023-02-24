import { useState } from "react";
import { Container, Typography, Box, Chip } from "@mui/material";
import { purple } from "@mui/material/colors";
import { LocationCity } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MaskedInput from "./MaskedInput";
import PageTitle from "../../components/common/PageTitle";
import statesData from "./state.json";

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
      <PageTitle>Buscador de Estado com o Número de Telefone</PageTitle>
      <Typography sx={{ my: 2 }}>
        Encontre o estado através do número de telefone
      </Typography>

      <MaskedInput
        mask="(99) 99999-9999"
        label="Número de telefone"
        value={phone}
        onChange={handlePhoneChange}
        margin="normal"
        variant="outlined"
      />

      <Button
        variant="contained"
        onClick={handleButtonClick}
        sx={{ mt: 2 }}
      >
        Verificar estado
      </Button>

      {showState && state && (
        <Typography variant="h2" sx={{ mt: 2 }}>
          <Chip
            icon={<LocationCity />}
            label={`O estado é: ${state}`}
            sx={{ bgcolor: purple[700] }}
          />
        </Typography>
      )}
    </Container>
  );
}

export default App;
