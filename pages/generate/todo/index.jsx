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
        url="/generate/todo"
        imageUrl="/todo-list.png"
      />

      <PageTitle>Whatsapp Link</PageTitle>

      <Typography paragraph mb={5}>
        Crie botões e links de whataspp com mesagens pré-definidas, <br />
        ou apenas crie links de whataspp a partir dos números, assim <br />
        você não precisa mais adicionar um contato para iniciar uma <br />
        conversa.
      </Typography>
      <Screen />
      </Box>
    </TodoStateProvider>
  );
};

export default TodoList;
