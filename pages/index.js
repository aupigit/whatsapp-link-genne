import { useState } from "react";

import {
  calculateRoutes,
  formatRoutes,
  generateRoutes,
  navItems,
  pickerRoutes,
} from "../constants/routes";

import { Typography } from "@mui/material";

import SEO from "../components/common/SEO";
import PageTitle from "../components/common/PageTitle";

import CardLinks from "../features/Home/CardLinks";
import BottomMenu from "../components/layout/BottomMenu";

const Home = () => {
  const [screen, setScreen] = useState("generate");

  const handleScreen = (_, newScreen) => {
    setScreen(newScreen);
  };
  return (
    <>
      <SEO
        description="List of tools to help speed web development."
        title="Home"
        url="/"
      />

      <PageTitle>Home</PageTitle>

      <Typography paragraph mb={5}>
        Lista de ferramentas para ajudar a acelerar o desenvolvimento pra você e para sua empresa.
      </Typography>

      <BottomMenu
        screen={screen}
        handleScreen={handleScreen}
        navItems={navItems}
      >
        {screen === "generate" && <CardLinks routes={generateRoutes} />}
      </BottomMenu>
    </>
  );
};

export default Home;
