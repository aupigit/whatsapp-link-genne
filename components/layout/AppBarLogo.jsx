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
            viewBox="0 0 258 331"
            color="icon"
            sx={{
              width: logoSize,
              height: logoSize,
            }}
          >
            <defs>
              <image
                width="258"
                height="331"
                id="img1"
                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQIAAAFLCAMAAAAKxnLGAAAAAXNSR0IB2cksfwAAADNQTFRF////////////////////////////////////////////////////////////////////5RDoRwAAABF0Uk5TABBAcIBgsMDw/+AgUKAwkNC4kg+4AAALPklEQVR4nO2d6XbjIAyF8RLbsbO9/9NO0jZT7EisEiDK/TdTHxu+sEhCgFJJ1PV9P4yahud/dGm+nVldfxqneTkjWudpPPW5C8mm7TLidT+QmMbqmkQ/To611zhcT1vuchNpG/yr/4vhIr413O5raPXfmk6CKRDUXzSFbSSq/w+FS+4K+eo0U9b/S+soaHTsaBvAr65CTIbtylP/L80C+kM/MQJ4aT3lrqJZPf0QIAvCxt0C/kModEzoOMeAo+Zb7uoCGoOt4DBdS7OWeqZp0KBlyF1pXckGgb0K6g1D4j7wqzF31b+1pZgIMT1KaAj5msC3sjeELs8ooGvOOzVkmAg+teQ0lIbctf9Rts5QQCd4K1NnuD1yV1zTmmNm6DPPBAct6QMJp9x1/lBqFzqlV+iq658nkJRBl9MkNinZxNCVNBXs9UjDoGACiRgUTSAJg8IJJGBQPAF+BuUTOJ8nVgJl2gNHcdoHMgicz3c2AqWEB+zi8hfK84xw8QSSbmV5x2YtHPGDroQwobs4psZSXSNM9FPjPXeVvEUdU73krlCAaIfETdJQ+NZCOhxIGwi+NRMSGHNXJlB0GQi33FUJFpl1IME9hPUgIiC1G7xEMzPK7QYvkXQFmbPBWxSzghwPGVb8rNBJNIp0xRtIUgJFuGLDaLLHwm9Fjoiyx8JvxY2Ife7ikygq+0JWpAjTGkFAUsDUpIiAch2NIKYZ1NIIIppBLY0gvBnU0wiCm0ENNsFbYc2gDpvgraBmIN870BUSP9pyF5pYAasKksNlkAIcxnpmxB95b/2XuIJmlncktZztFlTynRe73AVmkKfPLD1oCslzQJS7gGSQVyC1NqPgW14WYo39wDP3piYPSZNHT6hxPnjJoyfUFCnQ5dET6nISNbkjkL6OiMrZOqphFQ2Wc4p6nVPiS85+ghwX6TEfZTFrXT1mKUPBDFXIfLqO47QoZSjApjgTA0dXSYpVgNl6JsPOcTAQknSOpw2YzHs3G1mIg4AjMP2G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"
              />
            </defs>
            <style></style>
            <use id="Background" href="#img1" x="0" y="0" />{" "}
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
