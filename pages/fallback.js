import { useRouter } from "next/router";

import ErrorTitle from "../components/common/ErrorTitle";

const Fallback = () => {
  const router = useRouter();
  return (
    <>
      <ErrorTitle
        errorMessage="Arquivos em cache ausentes. Reconecte-se à Internet para baixar as atualizações mais recentes."
        buttonText="Voltar"
        buttonAction={() => router.back()}
        isFallback={true}
      />
    </>
  );
};

export default Fallback;
