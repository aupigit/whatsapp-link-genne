import React, { useState } from "react";
import {
  ArrowFatDown,
  Copy,
  LinkBreak,
  LinkSimpleHorizontal,
  Swap,
  WhatsappLogo,
} from "phosphor-react";
import MaskedInput from "./MaskedInput";
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Input,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import Confetti from "./Confetti";
import { QRCodeCanvas } from "qrcode.react";
import {
  LinkOffOutlined,
  LinkOutlined,
  Send,
  SendAndArchive,
} from "@mui/icons-material";
import { Box } from "@mui/system";

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
      <div className="col s12 result-wrapper">
        <span type="text" id="result" className="result" readOnly={!!urlState}>
          {urlState}
        </span>
        <hr />
        <br />
        <div className="row">
          <div className="col s12 m6">
            <Button
              className="btn waves-effect waves-light teal button-handler"
              onClick={() => {
                copyToClipboard(urlState);
              }}
              variant="contained"
            >
              {copyState}
              <i className="material-icons right">
                <Copy />
              </i>
            </Button>
          </div>

          <div className="col s12 m6">
            <Button
              className="btn waves-effect waves-light teal button-handler"
              href={url}
              target="a_blank"
              endIcon={<Send />}
              variant="outlined"
            >
              Enviar no WhatsApp
            </Button>
          </div>
          <div className="col s12 m12">
            <Button
              className="btn waves-effect waves-light teal accent-1 teal-text button-handler"
              onClick={() => {
                clearAll();
              }}
              variant="contained"
              endIcon={<Swap />}
            >
              Refazer
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <span className="white-text">
              Ou se preferir use o QR CODE abaixo
              <i>
                <ArrowFatDown size={16} weight="bold" />
              </i>
              <br />
              <br />
            </span>
            <QRCodeCanvas id="qrCode" value={urlState} size={200} level={"H"} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <>
        {isSubmitting && (
          <>
            {!returnData && (
              <div>
                <Confetti />

                <div className="form-wrap">
                  <form
                    onSubmit={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    <div className="row">
                      <Typography>
                        <h2> Parabéns 🎉🎉🎉</h2>
                        <h4>
                          Agora você pode enviar esse link pra quem você quiser
                        </h4>
                      </Typography>
                    </div>
                    <div className="row">
                      {urlState ? renderResult(urlState) : ""}
                    </div>
                  </form>
                </div>
              </div>
            )}
          </>
        )}

        {!isSubmitting && (
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
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
                {/* <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {""}
                    </Link>
                  </Grid>
                </Grid> */}
              </Box>
            </Box>
          </Container>
        )}
      </>
    </>
  );
};

export default Form;
