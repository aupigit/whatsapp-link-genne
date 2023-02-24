import React from "react";
import { Heading, HStack, VStack } from "@chakra-ui/react";
import { ArrowsClockwise, MaskHappy, MaskSad } from "phosphor-react";

import { onGenerateCNPJ, onSetMask } from "./document";

import { DocumentType } from "../../constants/enums";

import AppIcon from "./app-icon";
import AppButton, { GenerateButton, MaskButton } from "./app-button";
import ServicesButton from "./services-button";
import CopyButton from "./copy-button";
import { Box, Container, Typography } from "@mui/material";
import PageTitle from "../../components/common/PageTitle";

const Form = () => {
  const [documentType, setDocumentType] = React.useState(DocumentType.CPF);
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
    } else if (type === DocumentType.CNPJ) {
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

  return (
    <>
      {/* <VStack alignItems="center" justifyContent="center" flex="1" spacing="10"> */}

      <Container component="main">
      <VStack alignItems="stretch" spacing="4">
        <PageTitle>Gerador de CNPJ</PageTitle>
        <Typography>
          Use números de CNPJ válidos em testes.
        </Typography>
        <ServicesButton documentType={documentType} onGenerate={onGenerate} />
        <Box>
          <Heading as="h2">{document}</Heading>
        </Box>
        <Box>
          <HStack spacing="4">
          <CopyButton text={document} />
        <MaskButton mask={mask} onClick={() => onToggleMask(!mask)} />
        <GenerateButton onClick={() => onGenerate(documentType)} />
          </HStack>
        </Box>
      </VStack>
      </Container>
    </>
  );
};

export default Form;
