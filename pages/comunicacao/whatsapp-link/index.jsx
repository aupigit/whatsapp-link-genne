import TodoStateProvider from "../../../context/TodoContext";

import SEO from "../../../components/common/SEO";
import PageTitle from "../../../components/common/PageTitle";
import Screen from "../../../features/WhatsappLink/Screens";
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
          description="Create a Whatsapp Link."
          title="Whatsapp Link"
          url="/comunicacao/whatsapp-link"
          imageUrl="/todo-list.png"
        />

        <Screen />
      </Box>
    </TodoStateProvider>
  );
};

export default TodoList;
