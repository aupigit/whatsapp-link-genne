import React, { useRef, useState } from "react";
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
import emailjs from "@emailjs/browser";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#fff",
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
  color: "#000",
});

const ModalContainer = styled("div")({
  backgroundColor: theme.palette.background.default,
  borderRadius: "5px",
  padding: "20px",
  outline: "none",
});

const FeedbackForm = ({ onClose }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const form = useRef();

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_po4i0lq",
        "template_bh05x9j",
        form.current,
        "5tHrtJW8RbpwtZGcP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setOpenSnackbar(true);
    // onClose();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Box>
        <TextField
          sx={{ mt: 2 }}
          label="Digite aqui seu feedback"
          multiline
          rows={4}
          name="feedback"
          fullWidth
          required
        />
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel>Tipo de feedback</InputLabel>
          <Select name="type" label="Tipo de feedback">
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
        <Button sx={{ mt: 2 }} type="submit" variant="contained">
          Enviar feedback
        </Button>
        <Button variant="outlined" onClick={onClose} sx={{ ml: 2, mt: 2 }}>
          Fechar
        </Button>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Feedback enviado com sucesso!"
      />
    </form>
  );
};

const Feedback = () => {
  const [open, setOpen] = useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <FeedbackButton onClick={handleModalOpen} endIcon={<EmojiObjects />}>
        Enviar feedback
      </FeedbackButton>
      <FeedbackModal open={open} onClose={handleModalClose}>
        <ModalContainer>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Envie seu feedback
          </Typography>
          <FeedbackForm onClose={handleModalClose} />
        </ModalContainer>
      </FeedbackModal>
    </ThemeProvider>
  );
};

export default Feedback;
