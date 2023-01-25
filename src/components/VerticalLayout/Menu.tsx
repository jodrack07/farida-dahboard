interface MenuItemsProps {
  id: number;
  novidade?: any;
  label: string;
  icon?: string;
  link?: string;
  badge?: string;
  badgecolor?: string;
  subItems?: any;
  isHeader?: boolean;
}

const menuItems: Array<MenuItemsProps> = [
  {
    id: 135,
    label: "Entreprises",
    icon: "monitor",
    link: "/entreprise",
    badgecolor: "badge-soft-secondary",
  },
  {
    id: 135,
    label: "Annonces",
    icon: "monitor",
    link: "/annonce",
    badgecolor: "badge-soft-secondary",
  },
  {
    id: 136,
    label: "Utilisateurs",
    icon: "user",
    link: "/users",
    badgecolor: "badge-soft-secondary",
  },
  {
    id: 137,
    label: "Stations",
    icon: "user",
    link: "/station",
    badgecolor: "badge-soft-secondary",
  },
  {
    id: 138,
    label: "Programmes",
    icon: "user",
    link: "/programme",
    badgecolor: "badge-soft-secondary",
  },
];

export { menuItems };
