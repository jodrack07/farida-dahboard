import avatar9 from "../../assets/images/users/avatar-9.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar10 from "../../assets/images/users/avatar-10.jpg";
import {
  userData,
  entrepriseData,
  stationData,
  annonceData,
} from "../dasbboardData";

interface DashboardProps {
  id: number;
  title: string;
  price: number;
  subtitle: string;
}

const WidgetsData: Array<DashboardProps> = [
  {
    id: 1,
    title: "Utilisateurs",
    price: userData.length,
    subtitle: "Nombre total d'utilisateurs",
  },
  {
    id: 2,
    title: "Entreprises",
    price: entrepriseData.length,
    subtitle: "Nombre total d'entreprises",
  },
  {
    id: 3,
    title: "Annonces",
    price: annonceData.length,
    subtitle: "Nombre total d'annonces",
  },
  {
    id: 4,
    title: "Stations",
    price: stationData.length,
    subtitle: "Nombre total de stations",
  },
];

interface OrderProps {
  id: number;
  orderno: string;
  date: string;
  status: string;
  icon: string;
  image: string;
  name: string;
  purchased: string;
  more?: string;
  revenue: string;
}

const OrderData: Array<OrderProps> = [
  {
    id: 1,
    orderno: "#DK1018",
    date: "1 Jun, 11:21",
    status: "Paid",
    icon: "mdi mdi-check-circle-outline text-success",
    image: avatar2,
    name: "Alex Fox",
    purchased: "Wireframing Kit for Figma",
    revenue: "$129.99",
  },
  {
    id: 2,
    orderno: "#DK1017",
    date: "29 May, 18:36",
    status: "Paid",
    icon: "mdi mdi-check-circle-outline text-success",
    image: avatar3,
    name: "Joya Calvert",
    purchased: "Mastering the Grid",
    more: "+2 more",
    revenue: "$228.88",
  },
  {
    id: 3,
    orderno: "#DK1016",
    date: "25 May , 08:09",
    status: "Refunded",
    icon: "mdi mdi-arrow-left-thin-circle-outline text-warning",
    image: avatar4,
    name: "Gracyn Make",
    purchased: "Wireframing Kit for Figma",
    revenue: "$9.99",
  },
  {
    id: 4,
    orderno: "#DK1015",
    date: "19 May , 14:09",
    status: "Paid",
    icon: "mdi mdi-check-circle-outline text-success",
    image: avatar5,
    name: "Monroe Mock",
    purchased: "Spiashify 2.0",
    revenue: "$44.00",
  },
  {
    id: 5,
    orderno: "#DK1014",
    date: "10 May , 10:00",
    status: "Paid",
    icon: "mdi mdi-check-circle-outline text-success",
    image: avatar6,
    name: "Lauren Bond",
    purchased: "Mastering the Grid",
    revenue: "$75.87",
  },
  {
    id: 6,
    orderno: "#DK1011",
    date: "29 Apr , 12:46",
    status: "Changeback",
    icon: "mdi mdi-close-circle-outline text-danger",
    image: avatar9,
    name: "Ricardo Schaefer",
    purchased: "Spiashify 2.0",
    revenue: "$63.99",
  },
  {
    id: 7,
    orderno: "#DK1010",
    date: "27 Apr , 10:53",
    status: "Paid",
    icon: "mdi mdi-check-circle-outline text-success",
    image: avatar10,
    name: "Arvi Hasan",
    purchased: "Wireframing Kit for Figma",
    revenue: "$51.00",
  },
];

export { WidgetsData, OrderData };
