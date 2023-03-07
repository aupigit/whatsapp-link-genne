import React from "react";
import { Heading, HStack, VStack } from "@chakra-ui/react";
import { ArrowsClockwise, MaskHappy, MaskSad } from "phosphor-react";

import { onGenerateCNPJ, onSetMask } from "./document";

import { DocumentType } from "../../constants/enums";

import AppIcon from "./app-icon";
import AppButton, { GenerateButton, MaskButton } from "./app-button";
import ServicesButton from "./services-button";
import CopyButton from "./copy-button";
import {
  Box,
  Container,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PageTitle from "../../components/common/PageTitle";

const Form = () => {
  const [documentType, setDocumentType] = React.useState(DocumentType.CNPJ);
  const [document, setDocument] = React.useState("");
  const [mask, setMask] = React.useState(true);

  React.useEffect(() => {
    onGenerate(documentType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onGenerate = (type) => {
    setDocumentType(type);
    let doc = "";

    if (type === DocumentType.CNPJ) {
      doc = onGenerateCNPJ(mask);
    }

    setDocument(doc);
  };

  const onToggleMask = (mask) => {
    setMask(mask);

    if (mask) {
      setDocument((document) => {
        return onSetMask(document, documentType);
      });
    } else {
      setDocument((document) => document.replace(/[^\d]/g, ""));
    }
  };
  const isSmallerScreen = useMediaQuery((theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <>
      <Container component="main">
        <PageTitle>Gerador de CNPJ</PageTitle>
        <Typography>Use números de CNPJ válidos em testes.</Typography>
        <Paper elevation={3} sx={{ p: 3, mt: 5 }}>
          <ServicesButton documentType={documentType} onGenerate={onGenerate} />
          <Box sx={{ marginTop: 2, display: "flex", flexDirection: "column" }}>
            <Heading as={isSmallerScreen ? "h3" : "h2"}>{document}</Heading>
          </Box>
          <Box
            sx={{
              marginTop: 2,
            }}
          >
            <HStack>
              <CopyButton text={document} />
              <MaskButton mask={mask} onClick={() => onToggleMask(!mask)} />
              <GenerateButton
                icon={<ArrowsClockwise />}
                onClick={() => onGenerate(documentType)}
              />
            </HStack>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Form;
