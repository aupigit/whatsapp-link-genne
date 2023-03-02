import { HStack } from "@chakra-ui/react";
import { Animation, DocumentScanner, GetAppRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import { DocumentType } from "../../constants/enums";

const ServicesButton = ({ documentType, onGenerate }) => {
  return (
    <HStack>
      <Button
        variant="contained"
        endIcon={<Animation />}
        isActive={documentType === DocumentType.CPF}
        onClick={() => onGenerate(DocumentType.CPF)}
      >
        Gerar novo CPF
      </Button>
    </HStack>
  );
};

export default ServicesButton;
