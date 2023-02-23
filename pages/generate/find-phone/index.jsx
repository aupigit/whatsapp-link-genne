import TodoStateProvider from "../../../context/TodoContext";

import SEO from "../../../components/common/SEO";
import Screen from "../../../features/findPhone/Screens";
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
          title="Whatsapp Link"
          url="/generate/find-phone"
          imageUrl="/todo-list.png"
        />

        <Screen />
      </Box>
    </TodoStateProvider>
  );
};

export default TodoList;
