import { Button, Hidden, Tooltip } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { useState } from "react";

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <Tooltip title={copied ? "Copiado!" : "Copiar"}>
      <Button aria-label="Copiar" onClick={handleCopy}>
        <Hidden smDown>{copied ? "Copiado" : "Copiar"}</Hidden>
        <Hidden mdUp>{<FileCopyIcon />}</Hidden>
      </Button>
    </Tooltip>
  );
};

export default CopyButton;
