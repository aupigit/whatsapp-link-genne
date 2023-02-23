import { Button, Icon } from "@mui/material";

const AppIcon = ({ icon }) => {
  return (
    <Button>
      <Icon as={icon} width="6" height="6" />
    </Button>
  );
};

export default AppIcon;
