import React, { useState } from "react";
import { HandsClapping } from "phosphor-react";
import MaskedInput from "./MaskedInput";
import {
  Avatar,
  Button,
  Chip,
  Container,
  CssBaseline,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Confetti from "./Confetti";
import { QRCodeCanvas } from "qrcode.react";
import {
  ArrowDownward,
  Autorenew,
  ContentCopy,
  LinkOutlined,
  WhatsApp,
} from "@mui/icons-material";
import { Box } from "@mui/system";
import PageTitle from "../../components/common/PageTitle";
import { grey, purple } from "@mui/material/colors";

const Form = () => {
  const [phoneState, setPhoneState] = useState("");
  const [messageState, setMessageState] = useState("");
  const [urlState, setUrlState] = useState("");
  const [copyState, setCopyState] = useState("Copiar Link");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [returnData, setReturnData] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    let newPhone = phoneState.replace(/\D/g, "");
    setUrlState(
      `https://api.whatsapp.com/send?phone=55${newPhone}&text=${encodeURIComponent(
        messageState
      )}`
    );
  };

  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url);
    setCopyState("Copiado!");
    setTimeout(() => {
      setCopyState("Copiar para área de transferência");
    }, 2000);
  };

  const clearAll = () => {
    setIsSubmitting(false);
    setPhoneState("");
    setMessageState("");
    setUrlState("");
  };

  function renderResult(url) {
    return (
      <Container>
        <Chip sx={{ bgcolor: purple[800] }} label={urlState}></Chip>
        <br />

        <Stack direction="row" spacing={1}>
          <Box>
            <Button
              sx={{ mt: 3, mb: 2 }}
              className="btn waves-effect waves-light teal button-handler"
              onClick={() => {
                copyToClipboard(urlState);
              }}
              variant="contained"
              endIcon={<ContentCopy />}
            >
              {copyState}
            </Button>
          </Box>

          <Box>
            <Button
              sx={{ mt: 3, mb: 2 }}
              className="btn waves-effect waves-light teal button-handler"
              href={url}
              target="a_blank"
              endIcon={<WhatsApp />}
              variant="filled"
            >
              Enviar no WhatsApp
            </Button>
          </Box>
        </Stack>

        <Button
          sx={{ mt: 1, mb: 2 }}
          onClick={() => {
            clearAll();
          }}
          variant="contained"
          endIcon={<Autorenew />}
        >
          Refazer
        </Button>

        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <ListItem sx={{ mt: 2, mb: 1 }}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: grey[400] }}>
                <ArrowDownward />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Ou se preferir use o QR CODE abaixo" />
          </ListItem>
          <br />
          <Paper elevation={1} sx={{ p: 5, }}>
            <QRCodeCanvas id="qrCode" value={urlState} size={150} level={"H"} />
          </Paper>
        </Box>
      </Container>
    );
  }

  return (
    <>
      <>
        {isSubmitting && (
          <>
            {!returnData && (
              
              <Container component="main">
                <Confetti />
                <PageTitle>
                  Parabéns <HandsClapping /> <HandsClapping />
                </PageTitle>
                <Typography
                  sx={{
                    marginTop: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                  paragraph
                  mb={5}
                >
                  Agora você pode enviar esse link pra quem você quiser
                </Typography>
                <CssBaseline />

                <Paper elevation={3} sx={{ p: 3, mt: 5 }}>
                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                  >
                    {urlState ? renderResult(urlState) : ""}

                    {/* </Box> */}
                  </Box>
                </Paper>
              </Container>
            )}
          </>
        )}

        {!isSubmitting && (
          <Container component="main">
            <PageTitle>Whatsapp Link</PageTitle>
            <Typography
              sx={{
                marginTop: 2,
                display: "flex",
                flexDirection: "column",
              }}
              paragraph
              mb={5}
            >
              Crie botões e links de whataspp com mesagens pré-definidas, ou
              apenas crie links de whataspp a partir dos números, assim você não
              precisa mais adicionar um contato para iniciar uma conversa.
            </Typography>
            <CssBaseline />
            <Paper elevation={3} sx={{ p: 3, mt: 5 }}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <MaskedInput
                  id="phone"
                  type="number"
                  mask={"(99) 99999-9999"}
                  name="phone"
                  label={"Escreva seu número de telefone aqui 📱"}
                  onChange={(e) => setPhoneState(e.target.value)}
                  value={phoneState}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="Escreva sua mensagem aqui ✍️"
                  value={messageState}
                  id="message"
                  name="message"
                  placeholder="Ex: Olá em que posso ajudar"
                  onChange={(e) => setMessageState(e.target.value)}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  startIcon={<LinkOutlined />}
                >
                  Gerar Link
                </Button>
                {/* </Box> */}
              </Box>
            </Paper>
          </Container>
        )}
      </>
    </>
  );
};

export default Form;
