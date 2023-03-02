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
        isActive={documentType === DocumentType.CNPJ}
        onClick={() => onGenerate(DocumentType.CNPJ)}
      >
        Gerar novo CNPJ
      </Button>
    </HStack>
  );
};

export default ServicesButton;
