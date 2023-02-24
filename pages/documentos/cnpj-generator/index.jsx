import TodoStateProvider from "../../../context/TodoContext";

import SEO from "../../../components/common/SEO";
import Screen from "../../../features/GenerateCNPJ/Screens";
import { Box } from "@mui/material";

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
          description="Gerador de CNPJ"
          title="Gerar CNPJ"
          url="/documentos/cnpj-generator"
          imageUrl="/todo-list.png"
        />

        <Screen />
      </Box>
    </TodoStateProvider>
  );
};

export default TodoList;
