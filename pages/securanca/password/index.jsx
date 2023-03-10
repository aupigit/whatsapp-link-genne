import { usePasswordGeneratorFormControls } from "../../../features/PasswordGenerator/usePasswordGeneratorFormControls";

import { Button, Typography } from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";

import SEO from "../../../components/common/SEO";
import PageTitle from "../../../components/common/PageTitle";

import PasswordContainer from "../../../features/PasswordGenerator/PasswordContainer";
import PasswordOutput from "../../../features/PasswordGenerator/PasswordOutput";
import SliderInput from "../../../features/PasswordGenerator/SliderInput";
import PasswordOptions from "../../../features/PasswordGenerator/PasswordOptions";

const PasswordGenerator = () => {
  const {
    values,
    handleChange,
    handleSlider,
    handleClick,
    handleShowPassword,
  } = usePasswordGeneratorFormControls();

  return (
    <>
      <SEO
        description=" Crie senhas fortes"
        title="Gerador de Senhas"
        url="/securanca/password"
        imageUrl="/password-generator.png"
      />

      <PageTitle>Gerador de Senhas</PageTitle>

      <Typography paragraph mb={5}>
        Crie senhas fortes
      </Typography>

      <PasswordContainer
        top={
          <>
            <PasswordOutput
              password={values.password}
              showPassword={values.showPassword}
              handleShowPassword={handleShowPassword}
            />

            <SliderInput slider={values.slider} handleSlider={handleSlider} />
          </>
        }
        center={<PasswordOptions values={values} handleChange={handleChange} />}
        bottom={
          <Button
            fullWidth
            variant="contained"
            onClick={handleClick}
            endIcon={<KeyIcon />}
            sx={{ fontSize: 16 }}
          >
            Gerar
          </Button>
        }
      />
    </>
  );
};

export default PasswordGenerator;
