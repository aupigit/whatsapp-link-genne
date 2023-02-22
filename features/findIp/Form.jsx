import React, { useEffect, useState } from "react";
import { Container, CssBaseline, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PageTitle from "../../components/common/PageTitle";
import axios from "axios";

const Form = () => {
  const [ipDetails, setIpDetails] = useState([]);

  // Fetching the API once when the
  // component is mounted
  useEffect(() => {
    axios.get("https://ipapi.co/json/").then((res) => {
      setIpDetails(res.data);
    });
  }, []);

  return (
    <>
      <Container component="main">
        <PageTitle>Qual meu IP?</PageTitle>
        <Typography
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
          }}
          paragraph
          mb={5}
        >
          Descubra seu IPv4
        </Typography>
        <CssBaseline />
        {/* <Box
              sx={{
                marginTop: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            > */}
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <h4>Seu IP :</h4>
          <h1 id="ip">{ipDetails.ip}</h1>
          <h4>Localização aproximada: </h4>

          <p>
            {ipDetails.city}, {ipDetails.region},{ipDetails.country_name}.
          </p>

          <h4>Provedor de internet:</h4>

          <p>{ipDetails.org}</p>
        </Box>
      </Container>
    </>
  );
};

export default Form;
