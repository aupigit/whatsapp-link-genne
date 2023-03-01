import React from "react";
import Confetti from "react-confetti";
import { confettiStyle } from "./confetti-style";

export default function ConfettiComponent() {
  return (
    <Confetti
      width={3000}
      height={900}
      numberOfPieces={140}
      tweenDuration={0.5}
      colors={confettiStyle}
    />
  );
}
