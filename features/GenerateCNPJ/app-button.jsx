import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { MaskHappy, MaskSad, ArrowsClockwise } from "phosphor-react";
import AppIcon from "./app-icon";
import { Button } from "@mui/material";
import { Masks } from "@mui/icons-material";

const MaskButton = ({ mask, onClick }) => {
  return (
    <Tooltip title={mask ? "Sem máscara" : "Com máscara"}>
      <Button onClick={onClick} variant="contained" endIcon={<MaskHappy />}>
        {mask ? "Sem máscara" : "Com máscara"}
      </Button>
    </Tooltip>
  );
};

const GenerateButton = ({ onClick }) => {
  return (
    <Tooltip title="Gerar novo documento">
      <Button onClick={onClick} variant="contained" endIcon={<ArrowsClockwise />}>
        Refazer 
      </Button>
    </Tooltip>
  );
};

export { MaskButton, GenerateButton };
