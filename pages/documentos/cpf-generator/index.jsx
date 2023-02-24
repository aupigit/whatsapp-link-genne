import TodoStateProvider from "../../../context/TodoContext";

import SEO from "../../../components/common/SEO";
import Screen from "../../../features/GenerateCPF/Screens";
import { Box, Typography } from "@mui/material";

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
          description="Gerador de CPF"
          title="Gerador de CPF"
          url="/documentos/cpf-generator"
          imageUrl="/todo-list.png"
        />

        <Screen />
      </Box>
    </TodoStateProvider>
  );
};

export default TodoList;
