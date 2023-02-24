import React, { useEffect, useState } from "react";
import { Chip, Container, Typography } from "@mui/material";
import PageTitle from "../../components/common/PageTitle";
import axios from "axios";
import { purple } from "@mui/material/colors";

const Form = () => {
  const [ipDetails, setIpDetails] = useState({});

  useEffect(() => {
    axios.get("https://ipapi.co/json/").then((res) => {
      setIpDetails(res.data);
    });
  }, []);

  return (
    <Container component="main">
      <PageTitle>Qual meu IP?</PageTitle>
      <Typography variant="subtitle1" sx={{ mt: 1 }}>
        Descubra seu endereço IPv4
      </Typography>
      <Typography variant="h5" sx={{ mt: 5 }}>
        Seu IP:
      </Typography>
      <Chip label={ipDetails.ip} sx={{ bgcolor: purple[800], mt: 1 }} />
      <Typography variant="h5" sx={{ mt: 5 }}>
        Localização aproximada:
      </Typography>

      <Typography variant="subtitle1" sx={{ mt: 1 }}>
        {`${ipDetails.city}, ${ipDetails.region}, ${ipDetails.country_name}`}
      </Typography>
      <Typography variant="h5" sx={{ mt: 5 }}>
        Provedor de Internet:
      </Typography>
      <Typography variant="subtitle1" sx={{ mt: 1 }}>
        {ipDetails.org}
      </Typography>
    </Container>
  );
};

export default Form;
