import React, { useState } from "react";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import {
  EmojiObjects,
  BugReport,
  SentimentVeryDissatisfied,
  SentimentVerySatisfied,
} from "@mui/icons-material";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Typography,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#000",
    },
  },
});

const FeedbackButton = styled(Button)({
  color: theme.palette.background.default,
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: "#1565c0",
  },
});

const FeedbackModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ModalContainer = styled("div")({
  backgroundColor: theme.palette.background.default,
  borderRadius: "5px",
  padding: "20px",
  outline: "none",
});

const FeedbackForm = ({ onSubmit }) => {
  const [feedback, setFeedback] = useState("");
  const [type, setType] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5174/feedbacks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ feedback, type }),
    });
    if (response.ok) {
      setOpenSnackbar(true);
      // onSubmit(); // chama a função onSubmit definida em FeedbackButtonModal
    }
  };

  const handleChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ mt: 2 }}
          label="Digite aqui seu feedback"
          multiline
          rows={4}
          value={feedback}
          onChange={handleChange}
          fullWidth
          required
        />
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel>Tipo de feedback</InputLabel>
          <Select
            value={type}
            label="Tipo de feedback"
            onChange={handleTypeChange}
          >
            <MenuItem value="bug">
              <BugReport sx={{ mr: 1 }} />
              Bug
            </MenuItem>
            <MenuItem value="ideia">
              <EmojiObjects sx={{ mr: 1 }} />
              Ideia
            </MenuItem>
            <MenuItem value="critica">
              <SentimentVeryDissatisfied sx={{ mr: 1 }} />
              Crítica
            </MenuItem>
            <MenuItem value="elogio">
              <SentimentVerySatisfied sx={{ mr: 1 }} />
              Elogio
            </MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Enviar
        </Button>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Feedback enviado com sucesso!"
      />
    </Box>
  );
};

const FeedbackButtonModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <FeedbackButton onClick={handleOpen}>Enviar feedback</FeedbackButton>
      <FeedbackModal
        open={open}
        onClose={handleClose}
        aria-labelledby="feedback-modal-title"
        aria-describedby="feedback-modal-description"
      >
        <ModalContainer>
          <Typography variant="h2" id="feedback-modal-title">
            Enviar feedback
          </Typography>
          <Typography variant="body1" id="feedback-modal-description">
            Use o campo abaixo para enviar feedback sobre ideias, críticas ou
            bugs.
          </Typography>
          <FeedbackForm onSubmit={handleClose} />
          <Button variant="outlined" onClick={handleClose} sx={{ mt: 2 }}>
            Fechar
          </Button>
        </ModalContainer>
      </FeedbackModal>
    </>
  );
};

export default FeedbackButtonModal;
