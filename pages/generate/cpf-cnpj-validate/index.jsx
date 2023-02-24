import TodoStateProvider from "../../../context/TodoContext";

import SEO from "../../../components/common/SEO";
import Screen from "../../../features/ValidateCPF-CNPJ/Screens";
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
          description="Validador de CPF CNPJ"
          title="Validador de CPF e CNPJ"
          url="/generate/cpf-cnpj-validate"
          imageUrl="/todo-list.png"
        />

        <Screen />
      </Box>
    </TodoStateProvider>
  );
};

export default TodoList;
