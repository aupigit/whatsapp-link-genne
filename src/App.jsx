import React, { useState } from "react";
import Card from "./components/Card/Card";
import "./Form.scss";
import {
  ArrowFatDown,
  Copy,
  LinkBreak,
  LinkSimpleHorizontal,
  Swap,
  WhatsappLogo,
} from "phosphor-react";
import MaskedInput from "./components/MaskedInput/MaskedInput";
import {
  Alert,
  AlertTitle,
  Button,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import Confetti from "./components/Animation/Confetti";
import { QRCodeCanvas } from "qrcode.react";

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
            <button
              className="btn waves-effect waves-light teal button-handler"
              onClick={() => {
                copyToClipboard(urlState);
              }}
            >
              {copyState}
              <i className="material-icons right">
                <Copy />
              </i>
            </button>
          </div>

          <div className="col s12 m6">
            <a
              className="btn waves-effect waves-light teal button-handler"
              href={url}
              target="a_blank"
            >
              Enviar no WhatsApp
              <i className="material-icons right">
                {" "}
                <LinkSimpleHorizontal />
              </i>
            </a>
          </div>
          <div className="col s12 m12">
            <Button
              className="btn waves-effect waves-light teal accent-1 teal-text button-handler"
              onClick={() => {
                clearAll();
              }}
              endIcon={<Swap />}
            >
              Refazer
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <span className="black-text">
              Ou se preferir use o QR CODE abaixo
              <i>
                {" "}
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
              <Card>
                <Confetti />

                <div className="form-wrap">
                  <form
                    onSubmit={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    <div className="row">
                      <div className="input-field col s12">
                        <h4> Parabéns 🎉🎉🎉</h4>
                        <h5>
                          Agora você pode enviar esse link pra quem você quiser
                        </h5>
                      </div>
                    </div>
                    <div className="row">
                      {urlState ? renderResult(urlState) : ""}
                    </div>
                  </form>
                </div>
              </Card>
            )}
          </>
        )}

        {!isSubmitting && (
          <Card>
            <div className="form-wrap">
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <div className="row">
                  <div className="input-field col s12">
                    <h1>
                      <WhatsappLogo size={37} weight="duotone" /> Conversor de Link Whatsapp
                    </h1>
                    <p className="teal-text margin-negative">
                      Crie botões e links de whataspp com mesagens pré-definidas, ou apenas crie links de whataspp a partir dos números, assim você não precisa mais adicionar um contato para iniciar uma conversa.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <span className="helper-text">
                      Escreva seu número de telefone aqui 📱 <br />
                    </span>

                    <MaskedInput
                      id="phone"
                      type="number"
                      mask={"(99) 99999-9999"}
                      name="phone"
                      onChange={(e) => setPhoneState(e.target.value)}
                      value={phoneState}
                    />

                    <span className="helper-text">
                      <span className="teal-text">
                        Não se esqueça do prefixo.
                      </span>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <span className="helper-text">
                      Escreva sua mensagem aqui ✍️ <br />
                    </span>
                    <input
                      id="message"
                      name="message"
                      type="text"
                      className="materialize-textarea validate"
                      value={messageState}
                      placeholder="Ex: Olá em que posso ajudar"
                      onChange={(e) => setMessageState(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">
                    <button
                      className="btn waves-effect waves-light teal button-handler"
                      type="submit"
                    >
                      Gerar Link
                      <i className="material-icons right">
                        <LinkSimpleHorizontal />
                      </i>
                    </button>
                  </div>
                  {urlState ? renderResult(urlState) : ""}
                </div>
              </form>
            </div>
          </Card>
        )}
      </>
    </>
  );
};

export default Form;
