import { useState } from "react";

import {
  utilsRoutes,
  comunicacaoRoutes,
  documentosRoutes,
  navItems,
  securityRoutes,
} from "../constants/routes";

import { Typography } from "@mui/material";

import SEO from "../components/common/SEO";
import PageTitle from "../components/common/PageTitle";

import CardLinks from "../features/Home/CardLinks";
import BottomMenu from "../components/layout/BottomMenu";

const Home = () => {
  const [screen, setScreen] = useState("documentos");

  const handleScreen = (_, newScreen) => {
    setScreen(newScreen);
  };
  return (
    <>
      <SEO
        description="Lista de ferramentas para ajudar a acelerar o desenvolvimento da web."
        title="Home"
        url="/"
      />

      <PageTitle>Ferramentas pro seu dia a dia desenvolvido por Aupi</PageTitle>

      <Typography paragraph mb={5}>
        Lista de ferramentas para ajudar a acelerar o desenvolvimento pra você e
        para sua empresa.
      </Typography>

      <BottomMenu
        screen={screen}
        handleScreen={handleScreen}
        navItems={navItems}
      >
        {screen === "comunicacao" && <CardLinks routes={comunicacaoRoutes} />}
        {screen === "documentos" && <CardLinks routes={documentosRoutes} />}
        {screen === "security" && <CardLinks routes={securityRoutes} />}
        {screen === "utils" && <CardLinks routes={utilsRoutes} />}
      </BottomMenu>
    </>
  );
};

export default Home;
