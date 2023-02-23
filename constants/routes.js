// Page icons
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import HomeIcon from "@mui/icons-material/Home";
import KeyIcon from "@mui/icons-material/Key";
import QrCodeIcon from "@mui/icons-material/QrCode";
import ScaleIcon from "@mui/icons-material/Scale";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import TagIcon from "@mui/icons-material/Tag";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import FactoryIcon from "@mui/icons-material/Factory";
import {
  BadgeOutlined,
  ContactPageOutlined,
  FactCheck,
  FindInPage,
  Phone,
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

export const calculateRoutes = [
  {
    path: "/calculate/aspect-ratio",
    name: "Aspect Ratio",
    homeName: "Aspect Ratio",
    key: "aspect-ratio",
    icon: <AspectRatioIcon />,
    description: "Calculate the aspect ratio.",
  },
  {
    path: "/calculate/units",
    name: "Units",
    homeName: "Unit Calculator",
    key: "unit-calculator",
    icon: <ScaleIcon />,
    description: "Calculate different unit types.",
  },
];

export const formatRoutes = [
  {
    path: "/format/text",
    name: "Text",
    homeName: "Text Formatter",
    key: "text-formatter",
    icon: <TextFieldsIcon />,
    description: "Format text to any case.",
  },
];

export const generateRoutes = [
  {
    path: "/generate/find-ip",
    name: "Descubra seu IP",
    homeName: "Saiba seu IP",
    key: "find-Ip",
    icon: <FindInPage />,
    description: "Descubra seu IP",
  },
  {
    path: "/generate/cpf-generator",
    name: "Gerador de CPF",
    homeName: "Gerador de CPF",
    key: "cpf-generate",
    icon: <BadgeOutlined />,
    description: "Gerador de CPF",
  },
  {
    path: "/generate/cnpj-generator",
    name: "Gerador de CNPJ",
    homeName: "Gerador de CNPJ",
    key: "cnpj-generate",
    icon: <ContactPageOutlined />,
    description: "Gerador de CNPJ",
  },
  {
    path: "/generate/cpf-cnpj-validate",
    name: "Validador de CPF e CNPJ",
    homeName: "Validador de CPF e CNPJ",
    key: "cpf-cnpj-validate",
    icon: <FactCheck />,
    description: "Validador de CPF e CNPJ",
  },
  {
    path: "/generate/find-phone",
    name: "Qual o estado do telefone",
    homeName: "Qual o estado do telefone",
    key: "cpf-cnpj-validate",
    icon: <Phone />,
    description: "Qual o estado do telefone",
  },
  {
    path: "/generate/password",
    name: "Gerador de Senhas",
    homeName: "Gerador de Senhas",
    key: "password-generator",
    icon: <KeyIcon />,
    description: "Crie Senhas Fortes",
  },
  {
    path: "/generate/qr-code",
    name: "Gerador de QR Code",
    homeName: "Gerador de QR code",
    key: "qr-code-generator",
    icon: <QrCodeIcon />,
    description: "Crie seu QR code",
  },

  {
    path: "/generate/whatsapp-link",
    name: "Link para Whatsapp",
    homeName: "Gerador de Link para Whatsapp",
    key: "todo-list",
    icon: <WhatsappOutlined />,
    description: "Crie seu Whatsapp Link.",
  },
];

export const pickerRoutes = [
  {
    path: "/picker/color",
    name: "Color",
    homeName: "Color Picker",
    key: "color-picker",
    icon: <ColorLensIcon />,
    description: "Choose a color in HEX, RGB or HSL.",
  },
  {
    path: "/picker/item",
    name: "Item",
    homeName: "Item Picker",
    key: "item-picker",
    icon: <ShuffleIcon />,
    description: "Get a random item from a list.",
  },
  {
    path: "/picker/number",
    name: "Number",
    homeName: "Number Picker",
    key: "number-picker",
    icon: <TagIcon />,
    description: "Get a random number.",
  },
];

export const navItems = [
  // { routes: calculateRoutes, label: 'Calculate', value: 'calculate', icon: <CalculateIcon /> },
  // { routes: formatRoutes, label: 'Format', value: 'format', icon: <FormatPaintIcon /> },
  {
    routes: generateRoutes,
    label: "Geradores",
    value: "generate",
    icon: <FactoryIcon />,
  },
  // { routes: pickerRoutes, label: 'Picker', value: 'picker', icon: <SelectAllIcon /> },
];
