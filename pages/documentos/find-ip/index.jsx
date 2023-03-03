import TodoStateProvider from "../../../context/TodoContext";

import SEO from "../../../components/common/SEO";
import PageTitle from "../../../components/common/PageTitle";
import Screen from "../../../features/findIp/Screens";
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
          description="Saiba o seu ip local"
          title="Meu IP"
          url="/seguranca/find-ip"
          imageUrl="/todo-list.png"
        />

        <Screen />
      </Box>
    </TodoStateProvider>
  );
};

export default TodoList;
