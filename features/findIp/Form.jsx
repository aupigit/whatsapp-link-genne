import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import PageTitle from "../../components/common/PageTitle";
import axios from "axios";
import { blue, purple } from "@mui/material/colors";

const Form = () => {
  const [ipDetails, setIpDetails] = useState({});

  useEffect(() => {
    axios.get("https://api.ipify.org?format=json").then((res) => {
      const ipAddress = res.data.ip;
      axios
        .get(`https://ipapi.co/${ipAddress}/json/`)
        .then((res) => {
          setIpDetails(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, []);

  return (
    <Container component="main">
      <PageTitle>Qual meu IP?</PageTitle>
      <Typography variant="subtitle1" sx={{ mt: 1 }}>
        Descubra seu endereço IPv4
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 5 }}>
        <Grid container spacing={2} sx={{ alignItems: "center" }}>
          <Grid item>
            <Typography variant="h5">Seu IP:</Typography>
          </Grid>
          <Grid item>
            <Card>
              <Box sx={{ bgcolor: "#4F6792", p: 1.2 }}>
                <Typography variant="body1">{ipDetails.ip}</Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
        <Typography variant="h5" sx={{ mt: 2 }}>
          Localização aproximada:
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          {`${ipDetails.city}, ${ipDetails.region}, ${ipDetails.country_name}`}
        </Typography>
        <Typography variant="h5" sx={{ mb: 1 }}>
          Provedor de Internet:
        </Typography>
        <Typography variant="subtitle1">{ipDetails.org}</Typography>
      </Paper>
    </Container>
  );
};

export default Form;
