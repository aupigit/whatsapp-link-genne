import { useRouter } from "next/router";

import ErrorTitle from "../components/common/ErrorTitle";

const Custom404 = () => {
  const router = useRouter();
  return (
    <>
      <ErrorTitle
        errorCode="404"
        errorMessage="Página não encontrada"
        errorFontSize={50}
        buttonText="Voltar"
        buttonAction={() => router.back()}
      />
    </>
  );
};

export default Custom404;
