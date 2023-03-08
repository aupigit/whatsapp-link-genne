import HomeIcon from "@mui/icons-material/Home";
import KeyIcon from "@mui/icons-material/Key";
import QrCodeIcon from "@mui/icons-material/QrCode";
import FactoryIcon from "@mui/icons-material/Factory";
import {
  BadgeOutlined,
  ContactPageOutlined,
  FactCheck,
  FindInPage,
  Phone,
  Security,
  TollOutlined,
  WhatsappOutlined,
} from "@mui/icons-material";

export const mainRoutes = [
  {
    path: "/",
    name: "Home",
    key: "home",
    icon: <HomeIcon />,
    description: "Ferramentas funcionais",
  },
];

export const utilsRoutes = [
  {
    path: "/utilitario/qr-code",
    name: "Gerador de QR Code",
    homeName: "Gerador de QR code",
    key: "qr-code-generator",
    icon: <QrCodeIcon />,
    description: "Crie seu QR code",
  },
];

export const comunicacaoRoutes = [
  {
    path: "/comunicacao/find-phone",
    name: "Qual o estado do telefone",
    homeName: "Qual o estado do telefone",
    key: "cpf-cnpj-validate",
    icon: <Phone />,
    description: "Qual o estado do telefone",
  },

  {
    path: "/comunicacao/whatsapp-link",
    name: "Link para Whatsapp",
    homeName: "Gerador de Link para Whatsapp",
    key: "todo-list",
    icon: <WhatsappOutlined />,
    description: "Crie seu Whatsapp Link.",
  },
];

export const documentosRoutes = [
  {
    path: "/documentos/cpf-generator",
    name: "Gerador de CPF",
    homeName: "Gerador de CPF",
    key: "cpf-documentos",
    icon: <BadgeOutlined />,
    description: "Gerador de CPF",
  },
  {
    path: "/documentos/cnpj-generator",
    name: "Gerador de CNPJ",
    homeName: "Gerador de CNPJ",
    key: "cnpj-documentos",
    icon: <ContactPageOutlined />,
    description: "Gerador de CNPJ",
  },
  {
    path: "/documentos/cpf-cnpj-validate",
    name: "Validador de CPF e CNPJ",
    homeName: "Validador de CPF e CNPJ",
    key: "cpf-cnpj-validate",
    icon: <FactCheck />,
    description: "Validador de CPF e CNPJ",
  },
];

export const securityRoutes = [
  {
    path: "/securanca/find-ip",
    name: "Descubra seu IP",
    homeName: "Saiba seu IP",
    key: "find-Ip",
    icon: <FindInPage />,
    description: "Descubra seu IP",
  },
  {
    path: "/securanca/password",
    name: "Gerador de Senhas",
    homeName: "Gerador de Senhas",
    key: "password-generator",
    icon: <KeyIcon />,
    description: "Crie Senhas Fortes",
  },
];

export const navItems = [
  {
    routes: documentosRoutes,
    label: "Documentos",
    value: "documentos",
    icon: <FactoryIcon />,
  },

  {
    routes: comunicacaoRoutes,
    label: "Comunicações",
    value: "comunicacao",
    icon: <Phone />,
  },
  {
    routes: securityRoutes,
    label: "Segurança",
    value: "security",
    icon: <Security />,
  },
  {
    routes: utilsRoutes,
    label: "Utilitarios",
    value: "utils",
    icon: <TollOutlined />,
  },
];
