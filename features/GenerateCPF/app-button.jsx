import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { MaskHappy, MaskSad, ArrowsClockwise } from "phosphor-react";
import AppIcon from "./app-icon";

const MaskButton = ({ mask, onClick }) => {
  return (
    <Tooltip title={mask ? "Sem máscara" : "Com máscara"}>
      <IconButton onClick={onClick} color="inherit">
        <AppIcon icon={mask ? MaskHappy : MaskSad} />
      </IconButton>
    </Tooltip>
  );
};

const GenerateButton = ({ onClick }) => {
  return (
    <Tooltip title="Gerar novo documento">
      <IconButton onClick={onClick} color="inherit">
        <AppIcon icon={ArrowsClockwise} />
      </IconButton>
    </Tooltip>
  );
};

export { MaskButton, GenerateButton };
