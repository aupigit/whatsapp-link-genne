import React from "react";
import Confetti from "react-confetti";

const style = [
  "#527dc6",
  "#009688",
  "#527dc6",
  "#009688",
  "#527dc6",
  "#009688",
  "#527dc6",
  "#009688",
  "#527dc6",
  "#009688",
  "#527dc6",
  "#009688",
  "#527dc6",
  "#009688",
  "#527dc6",
  "#009688",
  "#527dc6",
];

export default () => {
  return (
    <Confetti
      width={1400}
      height={1400}
      numberOfPieces={40}
      tweenDuration={0.5}
      colors={style}
    />
  );
};