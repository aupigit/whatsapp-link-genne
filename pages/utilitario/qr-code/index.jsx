import { Box, Typography } from "@mui/material";

import { usePopoverColorPicker } from "../../../hooks/usePopoverColorPicker";
import { useQrCodeFormControls } from "../../../features/QrCode/useQrCodeFormControls";
import { initialValues } from "../../../constants/popoverColorPicker";

import PageTitle from "../../../components/common/PageTitle";
import SEO from "../../../components/common/SEO";
import QrCodeForm from "../../../features/QrCode/QrCodeForm";

const QrCode = () => {
  const { colors, handleBlur } = usePopoverColorPicker(initialValues);
  const {
    codeRef,
    values,
    downloadUrl,
    handleChange,
    handleSubmit,
    handleReset,
  } = useQrCodeFormControls(colors);

  return (
    <>
      <SEO
        description="Create a QR code."
        title="QR Code Generator"
        url="/utilitario/qr-code"
        imageUrl="/qr-code.png"
      />

      <PageTitle>Gerador de QR CODE</PageTitle>

      <Typography paragraph mb={5}>
        Crie um QR code.
      </Typography>

      <QrCodeForm
        values={values}
        colors={colors}
        downloadUrl={downloadUrl}
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      />

      <Box ref={codeRef} sx={{ "& canvas": { maxWidth: "100%" } }}></Box>
    </>
  );
};

export default QrCode;
