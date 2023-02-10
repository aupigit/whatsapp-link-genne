import React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import FooterTitle from "./FooterTitle";
import FooterLink from "./FooterLink";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import logoILink from "../../assets/iLink.png";

const Footer = () => {
  const StackColumn = styled(Stack)(() => ({
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    gap: 8,
    textAlign: "center",
  }));

  const BoxRow = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    marginTop: "calc(10% + 60px)",
    position: "fixed",
    bottom: 0,
    paddingBottom: "1rem",
    height: "auto",
    paddingTop: "1rem",
    backgroundColor: "#009688",
    width: "100%",
  }));

  return (
    <BoxRow
      component="footer"
      sx={{
        py: 4,
        px: 2,
      }}
    >
      <StackColumn>
        <Box
          component="img"
          sx={{ height: 100 }}
          alt="Logo Ilink"
          src={logoILink}
        />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={"Aupi Tools | Aupi"} />
        <FooterLink
          text={
            " R. Orestes Guimarães, 876 - 4º andar - América, Joinville - SC, 89204-060"
          }
        />
        <FooterLink text={"(47) 4101-1253"} />
        <FooterLink text={"www.aupi.com.br"} />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={"Outras ferramentas"} />
        <FooterLink text={"buy house"} />
        <FooterLink text={"sell house"} />
        <FooterLink text={"rent house"} />
        <FooterLink text={"build house"} />
      </StackColumn>
      <StackColumn>
        <FooterTitle text={"Sobre nós"} />
        <FooterLink text={"reporting"} />
        <FooterLink text={"get in touch"} />
        <FooterLink text={"management"} />
      </StackColumn>
      <StackColumn>
        <FooterTitle text={"Conheça a Aupi"} />
        <Stack
          direction="row"
          width="70px"
          maxWidth="100%"
          justifyContent="space-between"
        >
          <Link
            href="https://www.instagram.com/aupisolucoes/?hl=en"
            variant="body2"
            sx={{
              color: "#eee",
              "&:hover": {
                color: "#f4f4f4",
              },
            }}
          >
            <InstagramIcon />
          </Link>
          <Link
            href="https://www.facebook.com/aupisolucoes/"
            variant="body2"
            sx={{
              color: "#eee",
              "&:hover": {
                color: "#f4f4f4",
              },
            }}
          >
            <FacebookIcon />
          </Link>
        </Stack>
        <Typography variant="caption" component="p" color="white">
          &copy; 2023 Aupi Tools | Aupi.
        </Typography>
      </StackColumn>
    </BoxRow>
  );
};

export default Footer;
