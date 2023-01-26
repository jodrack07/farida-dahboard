import React from "react";
import { withRouter } from "react-router-dom";
//redux
import { useSelector } from "react-redux";

export const randomId = (length: number) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const setLocalStorageItems = (localKey: string, localData: any) => {
  if (!localStorage.getItem(localKey)) {
    localStorage.setItem(localKey, JSON.stringify(localData));
  }
};

const NonAuthLayout = ({ children }: any) => {
  const entreprise = [
    {
      code: randomId(4),
      designation: "EMMANUEL FM",
      adresse: "12 rue de l'entreprise",
      creation: "14/01/2023",
      contact: "+243 999 999 999",
      email: "entreprise2@gmail.com",
      siteWeb: "www.entreprise1.com",
      logo: "Fichier_" + randomId(6),
      couleur: "green",
      description: "une description",
    },
    {
      code: randomId(4),
      designation: "SOCIETE XYZ",
      adresse: "5 avenue de la societe",
      creation: "20/02/2022",
      contact: "+243 888 888 888",
      email: "societexyz@gmail.com",
      siteWeb: "www.societexyz.com",
      logo: "Fichier_" + randomId(6),
      couleur: "blue",
      description: "une description",
    },
  ];

  const annonce = [
    {
      code: randomId(4),
      creation: "01/01/2023",
      debut: "03/01/2023",
      fin: "03/02/2023",
      fichier: "file2",
      details: "cette annonce 2......",
      resume: "cette annonce 2......",
      etat: "active",
    },

    {
      code: randomId(4),
      creation: "10/12/2022",
      debut: "12/12/2022",
      fin: "12/01/2023",
      fichier: "file3",
      details: "cette annonce 3......",
      resume: "cette annonce 3......",
      etat: "inactive",
    },
  ];

  const userData = [
    {
      code: randomId(4),
      nom: "Christian Siku",
      phone: "+243 992 984 499",
      email: "chrissiku5@gmail.com",
      address: "Goma, NK - RDC",
      password: "FRD" + randomId(4),
    },

    {
      code: randomId(4),
      nom: "Ahmed Ali",
      phone: "+971 50 123 4567",
      email: "ahmed@gmail.com",
      address: "Dubai - UAE",
      password: "FRD" + randomId(4),
    },
  ];

  const station = [
    {
      code: randomId(4),
      creation: "01/01/2023",
      frequence: "106.3 Hz",
      portee: "100 km",
      phone: "+243 999 999 999",
      email: "station1@gmail.com",
      location: "goma, goma - Himbi",
      longitude: "1.2345",
      latitude: "1.2345",
    },
    {
      code: randomId(4),
      creation: "01/01/2023",
      frequence: "102.5 Hz",
      portee: "100 km",
      phone: "+243 999 999 999",
      email: "station2@gmail.com",
      location: "goma, goma - Mugunga",
      longitude: "2.2345",
      latitude: "1.2345",
    },
  ];

  const programData = [
    {
      code: randomId(4),
      designation: "Journal",
      jour: "Lundi",
      debut: "06:00",
      fin: "07:00",
      etat: "active",
      codeStation: "STN1",
    },
  ];

  setLocalStorageItems("entrepriseData", entreprise);
  setLocalStorageItems("annonces", annonce);
  setLocalStorageItems("utilisateurs", userData);
  setLocalStorageItems("station", station);
  setLocalStorageItems("program", programData);

  const { layoutMode } = useSelector((state: any) => ({
    layoutMode: state.Layout.layoutMode,
  }));

  if (layoutMode === "dark") {
    document.body.setAttribute("data-layout-mode", "dark");
  } else {
    document.body.setAttribute("data-layout-mode", "light");
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default withRouter(NonAuthLayout);
