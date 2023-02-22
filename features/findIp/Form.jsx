import React, { useEffect, useState } from "react";
import { ArrowFatDown, HandsClapping } from "phosphor-react";
import MaskedInput from "./MaskedInput";
import {
  Avatar,
  Button,
  Chip,
  Container,
  CssBaseline,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Confetti from "./Confetti";
import { QRCodeCanvas } from "qrcode.react";
import {
  ArrowCircleDownTwoTone,
  ArrowDownward,
  Autorenew,
  ContentCopy,
  LinkOutlined,
  WhatsApp,
} from "@mui/icons-material";
import { Box } from "@mui/system";
import PageTitle from "../../components/common/PageTitle";
import { grey, purple } from "@mui/material/colors";
import axios  from "axios";

const Form = () => {
  const [ipDetails, setIpDetails] = useState([]);
  const [lat, setLat] = useState(22.5726);
  const [lon, setLon] = useState(88.3832);

  // Fetching the API once when the
  // component is mounted
  useEffect(() => {
    axios.get("https://ipapi.co/json/").then((res) => {
      setIpDetails(res.data);
    });
  }, []);

  return (
    <>
      <h1 className="heading">IP Address Finder</h1>
      <div className="App">
        <div className="left">
          <h4>What is my IPv4 address?</h4>
          <h1 id="ip">{ipDetails.ip}</h1>
          <h4>Approximate location: </h4>

          <p>
            {ipDetails.city}, {ipDetails.region},{ipDetails.country_name}.
          </p>

          <h4>Internet Service Provider(ISP):</h4>

          <p>{ipDetails.org}</p>
        </div>
      </div>
    </>
  );
};

export default Form;
