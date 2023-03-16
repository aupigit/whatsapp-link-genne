import React, { useRef, useState } from "react";
import { createTheme, styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Avatar, Box, Snackbar, Typography } from "@mui/material";
import { Card, CardHeader, IconButton } from "@mui/material";
import {
  EmojiObjects,
  SentimentVerySatisfied,
  BugReportOutlined,
  EmojiObjectsOutlined,
} from "@mui/icons-material";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import logo from "../../public/logos/logo.png";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#333333",
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
  "& .MuiPaper-root": {
    width: "100%",
    maxWidth: "none",
  },
});

const ModalFirst = styled("div")({
  backgroundColor: theme.palette.background.default,
  borderRadius: "5px",
  padding: "50px",
  outline: "none",
  width: "100%",
  height: "100%",
});

const ModalContainer = styled("div")({
  backgroundColor: theme.palette.background.default,
  borderRadius: "5px",
  padding: "20px",
  outline: "none",
  width: "32.5%",
  height: "37.5%",
});
const FeedbackForm = ({ onClose, cardTitle }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const form = useRef();

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
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
    onClose();
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <Box sx={{ textAlign: "center", mb: 1 }}>
        <Image
          src={logo}
          alt="Logo azul da empresa aupi"
          width={90}
          height={35}
        />

        <Typography
          sx={{
            color: "#f2f2f2",
            textAlign: "center",
          }}
          variant="subtitle2"
        >
          Diga-nos o que está faltando ou o que você gostaria de ver no site.
        </Typography>
      </Box>
      <Box>
        <TextField
          sx={{ mt: 2 }}
          label="Adicione um título"
          rows={4}
          name="title"
          fullWidth
          required
        />
        <TextField
          sx={{ mt: 2 }}
          label={`Digite aqui seu feedback para ${cardTitle}`}
          multiline
          rows={4}
          name="feedback"
          fullWidth
          required
        />
        <input type="hidden" name="type" value={cardTitle} />
        <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 1 }}>
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            color="primary"
            type="submit"
          >
            Enviar
          </Button>
          <Button variant="outlined" sx={{ ml: 2, mt: 2 }} onClick={onClose}>
            Cancelar
          </Button>
        </Box>
      </Box>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        message="Feedback enviado com sucesso!"
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleSnackbarClose}
          >
            <SentimentVerySatisfied fontSize="small" />
          </IconButton>
        }
      />
    </form>
  );
};

const FeedbackCard = ({ cardTitle, cardIcon }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let icon;
  if (cardIcon === "report") {
    icon = <BugReportOutlined />;
  } else if (cardIcon === "request") {
    icon = <EmojiObjectsOutlined />;
  }

  return (
    <>
      <Card
        variant="filled"
        onClick={handleOpen}
        sx={{
          "&:hover": {
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
            backgroundColor: "#404040",
          },
          backgroundColor: "#333333",
          cursor: "pointer",
          transition: "all 0.5s ease",
          width: "100%",
        }}
      >
        <CardHeader
          avatar={<Avatar>{icon}</Avatar>}
          title={cardTitle}
          subheader="Deixe aqui seu feedback"
        />
      </Card>

      <FeedbackModal open={open} onClose={handleClose}>
        <ModalContainer>
          <FeedbackForm
            onClose={handleClose}
            cardTitle={cardTitle}
            cardIcon={cardIcon}
          />
        </ModalContainer>
      </FeedbackModal>
    </>
  );
};

const Feedback = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <FeedbackButton onClick={handleOpen} endIcon={<EmojiObjects />}>
        Enviar feedback
      </FeedbackButton>
      <FeedbackModal open={open} onClose={handleClose}>
        <div>
          <ModalFirst>
            <Box sx={{ textAlign: "center", mb: 5 }}>
              <Image
                src={logo}
                alt="Logo azul da empresa aupi"
                width={90}
                height={35}
              />
            </Box>
            <FeedbackCard cardTitle="Reportar um erro" cardIcon="report" />
            <br />
            <FeedbackCard
              cardTitle="Solicitação de recurso"
              cardIcon="request"
            />
          </ModalFirst>
        </div>
      </FeedbackModal>
    </div>
  );
};

export default Feedback;
