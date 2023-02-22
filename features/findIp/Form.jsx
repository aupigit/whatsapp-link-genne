import React, { useEffect, useState } from "react";
import { Chip, Container, CssBaseline, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PageTitle from "../../components/common/PageTitle";
import axios from "axios";
import { purple, yellow } from "@mui/material/colors";

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

        <Box component="form" noValidate sx={{ mt: 1 }}>
          <Typography
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
            }}
            paragraph
            mb={2}
          >
            <h4>Seu IP : </h4>
          </Typography>

          <Chip sx={{ bgcolor: purple[800] }} label={ipDetails.ip}></Chip>
          <Typography
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
            }}
            paragraph
            mb={2}
          >
            <h4>Localização aproximada : </h4>
          </Typography>

          <Typography
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
            }}
            paragraph
            mb={2}
          >
            {ipDetails.city}, {ipDetails.region},{ipDetails.country_name}.
          </Typography>

          <Typography
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
            }}
            paragraph
            mb={2}
          >
            <h4>Provedor De Internet : </h4>
          </Typography>

          <Typography
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
            }}
            paragraph
            mb={2}
          >
            {ipDetails.org}
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Form;
