import { FormGroup, TextField } from "@mui/material";

import FieldsetContainer from "../FieldsetContainer";

const NumberRange = ({ values, handleChange }) => {
  const isDisabled = values.isLottery;

  return (
    <>
      <FieldsetContainer
        title="Intervalo numérico"
        helperText={`Os resultados estarão entre ${values.start} e ${values.end}`}
      >
        <FormGroup
          sx={{
            flexDirection: "row",
            gap: {
              xs: 0,
              xms: 2,
            },
            marginBottom: 1,
          }}
        >
          <TextField
            disabled={isDisabled}
            variant="outlined"
            label="Mínimo"
            name="start"
            value={values.start}
            onChange={handleChange}
            autoComplete="none"
            sx={{
              // flex: 1,
              "& fieldset": {
                borderBottomLeftRadius: {
                  xs: 0,
                  xms: 4,
                },
                borderBottomRightRadius: {
                  xs: 0,
                  xms: 4,
                },
                borderBottomColor: {
                  xs: "transparent",
                  xms: "rgba(255, 255, 255, 0.23)",
                },
              },
            }}
          />

          <TextField
            disabled={isDisabled}
            variant="outlined"
            label="Máximo"
            name="end"
            value={values.end}
            onChange={handleChange}
            autoComplete="none"
            sx={{
              // flex: 1,
              "& fieldset": {
                borderTopLeftRadius: {
                  xs: 0,
                  sm: 4,
                },
                borderTopRightRadius: {
                  xs: 0,
                  sm: 4,
                },
              },
            }}
          />
        </FormGroup>
      </FieldsetContainer>
    </>
  );
};

export default NumberRange;
