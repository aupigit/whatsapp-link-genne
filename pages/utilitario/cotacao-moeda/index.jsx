import TodoStateProvider from "../../../context/TodoContext";

import SEO from "../../../components/common/SEO";
import Screen from "../../../features/CurrencyQuote/Screens";
import { Box, Typography } from "@mui/material";
import PageTitle from "../../../components/common/PageTitle";

const TodoList = () => {
  return (
    <TodoStateProvider>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SEO
          description="Converte Moeda"
          title="Converte Moeda"
          url="/picker/number"
          imageUrl="/number-picker.png"
        />

        <PageTitle>Conversor de Moedas | Todas Moedas</PageTitle>

        <Typography paragraph mb={5}>
          Converta todos os tipos de moedas
        </Typography>

        <Screen />
      </Box>
    </TodoStateProvider>
  );
};

export default TodoList;
