import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Link,
} from "@mui/material";
import {
  Email,
  Facebook,
  Info,
  Instagram,
  Phone,
  Public,
} from "@mui/icons-material";

function Modal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button endIcon={<Info />} variant="contained" onClick={handleOpen}>
        Contato | informações
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Contato />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

function Contato() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Contato
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <Phone />
          </ListItemIcon>
          <ListItemText primary="(47) 4101-1253" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Email />
          </ListItemIcon>
          <ListItemText primary="contato@aupi.com.br" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <Facebook />
          </ListItemIcon>
          <ListItemText
            primary={
              <Link
                href="https://www.facebook.com/aupisolucoes"
                target="_blank"
                rel="noopener"
              >
                facebook.com/aupisolucoes
              </Link>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Instagram />
          </ListItemIcon>
          <ListItemText
            primary={
              <Link
                href="https://www.instagram.com/aupisolucoes"
                target="_blank"
                rel="noopener"
              >
                @aupisolucoes
              </Link>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Public />
          </ListItemIcon>
          <ListItemText
            primary={
              <Link href="https://aupi.com.br" target="_blank" rel="noopener">
                aupi.com.br
              </Link>
            }
          />
        </ListItem>
      </List>
    </>
  );
}

export default Modal;
