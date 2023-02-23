import { Box, Typography } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";

const AppBarLogo = ({ logoSize, textSize, open }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          "@media (min-width:600px)": {
            ...(open && { display: "none" }),
          },
          "@media (max-width:599px)": {
            ...(open === true && { display: "none" }),
          },
        }}
      >
        <Box
          sx={{
            width: logoSize,
            height: logoSize,
          }}
        >
          <SvgIcon
            viewBox="0 0 120 121"
            color="icon"
            sx={{
              width: logoSize,
              height: logoSize,
            }}
          >
            <defs>
              <image
                id="img1"
                href="data:image/png;base64,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"
              />
            </defs>
            <style></style>
            <use id="img1" href="#img1" transform="matrix(1,0,0,1,0,0)" />
          </SvgIcon>
        </Box>

        <Typography
          fontFamily={`'Lato', sans-serif`}
          fontWeight={700}
          letterSpacing={2}
          sx={{
            paddingBottom: "5px",
            fontSize: textSize,
          }}
        >
          Aupi Tools
        </Typography>
      </Box>
    </>
  );
};

export default AppBarLogo;
