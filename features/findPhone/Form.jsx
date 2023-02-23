import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import statesData from "./state.json";
import { Container } from "@mui/system";
import PageTitle from "../../components/common/PageTitle";
import { Box, Chip, Typography } from "@mui/material";
import MaskedInput from "./MaskedInput";
import { purple } from "@mui/material/colors";
import { LocationCity } from "@mui/icons-material";

function getStateFromPhone(phone) {
  const phoneDigits = phone.replace(/[^\d]/g, "");
  for (const [key, value] of Object.entries(statesData[0])) {
    if (value.areaCodes) {
      if (value.areaCodes.some((code) => phoneDigits.startsWith(code))) {
        return key;
      }
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
      <Typography
        sx={{
          marginTop: 1.5,
          display: "flex",
          flexDirection: "column",
        }}
        paragraph
        mb={3}
      >
        Encontre o estado atraves do número de telefone
      </Typography>

      <MaskedInput
        mask={"(99) 99999-9999"}
        label="Número de telefone"
        value={phone}
        onChange={handlePhoneChange}
        margin="normal"
        variant="outlined"
      />
      <br />
      <Button
   
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
        }}
        variant="contained"
        onClick={handleButtonClick}
      >
        Verificar estado
      </Button>
      {showState && state && (
        <Typography variant="h2">
        <Chip
          sx={{
            marginTop: 2,
            bgcolor: purple[700],
          }}
          label={`O estado é: ${state}`}
        ></Chip>
        </Typography>
      )}
    </Container>
  );
}

export default App;
