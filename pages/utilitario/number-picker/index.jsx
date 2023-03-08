import { useNumberPickerFormControls } from "../../../features/RandomPicker/useNumberPickerFormControls";
import { useCounter } from "../../../hooks/useCounter";

import { Typography } from "@mui/material";

import SEO from "../../../components/common/SEO";
import PageTitle from "../../../components/common/PageTitle";

import NumberForm from "../../../features/RandomPicker/NumberPicker/NumberForm";

const NumberPicker = () => {
  const {
    resultRef,
    values,
    setValues,
    handleChange,
    handleClick,
    handleCopy,
    handleReset,
  } = useNumberPickerFormControls();
  const { handleDecrease, handleIncrease } = useCounter(values, setValues);

  return (
    <>
      <SEO
        description="Get a random number from a range."
        title="Number Picker"
        url="/picker/number"
        imageUrl="/number-picker.png"
      />

      <PageTitle>Gerador de Números Aleatórios | Sorteio Online</PageTitle>

      <Typography paragraph mb={5}>
        Obtenha um número aleatório de um intervalo.
      </Typography>

      <NumberForm
        resultRef={resultRef}
        values={values}
        handleChange={handleChange}
        handleClick={handleClick}
        handleCopy={handleCopy}
        handleReset={handleReset}
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
      />
    </>
  );
};

export default NumberPicker;
