-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  Dim 16 jan. 2022 à 19:08
-- Version du serveur :  10.4.8-MariaDB
-- Version de PHP :  7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `radio`
--

-- --------------------------------------------------------

--
-- Structure de la table `t_annonce`
--

CREATE TABLE `t_annonce` (
  `CodeAnnonce` int(11) NOT NULL,
  `DateAnnonce` datetime NOT NULL,
  `EtatAnnonce` varchar(200) NOT NULL,
  `CodeUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `t_attribution_tache`
--

CREATE TABLE `t_attribution_tache` (
  `CodeAttribution` int(11) NOT NULL,
  `CodeTache` int(11) NOT NULL,
  `CodeUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `t_couleur`
--

CREATE TABLE `t_couleur` (
  `CodeCouleur` int(11) NOT NULL,
  `DesignationCouleur` varchar(100) NOT NULL,
  `RGB` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `t_detail_annonce`
--

CREATE TABLE `t_detail_annonce` (
  `CodeDetail` int(11) NOT NULL,
  `Resume` text NOT NULL,
  `Fichier` text NOT NULL,
  `Debut` time NOT NULL,
  `Fin` time NOT NULL,
  `CodeAnnonce` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `t_entreprise`
--

CREATE TABLE `t_entreprise` (
  `CodeEntreprise` int(11) NOT NULL,
  `DesignationEntreprise` varchar(200) NOT NULL,
  `AdresseEntreprise` text NOT NULL,
  `DateCreation` datetime NOT NULL,
  `ContactEntreprise` varchar(15) NOT NULL,
  `EmailEntreprise` varchar(50) NOT NULL,
  `SiteWebEntreprise` varchar(150) NOT NULL,
  `LogoEntreprise` text NOT NULL,
  `CodeCouleur` int(11) NOT NULL,
  `EntrepriseCreated_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `t_paiement`
--

CREATE TABLE `t_paiement` (
  `CodePaiement` int(11) NOT NULL,
  `Montant` float NOT NULL,
  `DatePaiement` datetime NOT NULL,
  `Reference` varchar(50) NOT NULL,
  `Etat` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `t_programme`
--

CREATE TABLE `t_programme` (
  `CodeProgramme` int(11) NOT NULL,
  `DesignationProgramme` varchar(220) NOT NULL,
  `JourProgramme` varchar(20) NOT NULL,
  `HeureDebutProgramme` time NOT NULL,
  `HeureFinProgramme` time NOT NULL,
  `Etat` varchar(20) NOT NULL,
  `DateCreationProgramme` datetime NOT NULL,
  `ProgrammeCreated_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `CodeStation` int(11) NOT NULL,
  `CodeType` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `t_secteur`
--

CREATE TABLE `t_secteur` (
  `CodeSecteur` int(11) NOT NULL,
  `DesignationSecteur` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `t_station`
--

CREATE TABLE `t_station` (
  `CodeStation` int(11) NOT NULL,
  `LocalisationStation` varchar(220) NOT NULL,
  `FrequenceStation` varchar(20) NOT NULL,
  `DateCreationStation` datetime NOT NULL,
  `LongitudeStation` varchar(30) NOT NULL,
  `LatitudeStation` varchar(30) NOT NULL,
  `Porte` varchar(30) NOT NULL,
  `ContactStation` varchar(100) NOT NULL,
  `EmailStation` varchar(50) NOT NULL,
  `AdresseStation` text NOT NULL,
  `StationCreated_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `CodeEntreprise` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `t_tache`
--

CREATE TABLE `t_tache` (
  `CodeTache` int(11) NOT NULL,
  `DesignationTache` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `t_tarif`
--

CREATE TABLE `t_tarif` (
  `CodeTarif` int(11) NOT NULL,
  `Intervalle` varchar(50) NOT NULL,
  `CodeProgramme` int(11) NOT NULL,
  `CodeSecteur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `t_type_programme`
--

CREATE TABLE `t_type_programme` (
  `CodeType` int(11) NOT NULL,
  `DesignationType` varchar(200) NOT NULL,
  `DetailType` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `t_user`
--

CREATE TABLE `t_user` (
  `CodeUser` int(11) NOT NULL,
  `NomComplet` varchar(250) NOT NULL,
  `Contact` varchar(30) NOT NULL,
  `AdresseUser` varchar(250) NOT NULL,
  `AdresseMail` varchar(50) NOT NULL,
  `PasswordUser` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `t_annonce`
--
ALTER TABLE `t_annonce`
  ADD PRIMARY KEY (`CodeAnnonce`);

--
-- Index pour la table `t_attribution_tache`
--
ALTER TABLE `t_attribution_tache`
  ADD PRIMARY KEY (`CodeAttribution`);

--
-- Index pour la table `t_couleur`
--
ALTER TABLE `t_couleur`
  ADD PRIMARY KEY (`CodeCouleur`);

--
-- Index pour la table `t_detail_annonce`
--
ALTER TABLE `t_detail_annonce`
  ADD PRIMARY KEY (`CodeDetail`);

--
-- Index pour la table `t_entreprise`
--
ALTER TABLE `t_entreprise`
  ADD PRIMARY KEY (`CodeEntreprise`);

--
-- Index pour la table `t_paiement`
--
ALTER TABLE `t_paiement`
  ADD PRIMARY KEY (`CodePaiement`);

--
-- Index pour la table `t_programme`
--
ALTER TABLE `t_programme`
  ADD PRIMARY KEY (`CodeProgramme`);

--
-- Index pour la table `t_secteur`
--
ALTER TABLE `t_secteur`
  ADD PRIMARY KEY (`CodeSecteur`);

--
-- Index pour la table `t_station`
--
ALTER TABLE `t_station`
  ADD PRIMARY KEY (`CodeStation`);

--
-- Index pour la table `t_tache`
--
ALTER TABLE `t_tache`
  ADD PRIMARY KEY (`CodeTache`);

--
-- Index pour la table `t_tarif`
--
ALTER TABLE `t_tarif`
  ADD PRIMARY KEY (`CodeTarif`);

--
-- Index pour la table `t_user`
--
ALTER TABLE `t_user`
  ADD PRIMARY KEY (`CodeUser`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `t_annonce`
--
ALTER TABLE `t_annonce`
  MODIFY `CodeAnnonce` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `t_attribution_tache`
--
ALTER TABLE `t_attribution_tache`
  MODIFY `CodeAttribution` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `t_couleur`
--
ALTER TABLE `t_couleur`
  MODIFY `CodeCouleur` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `t_detail_annonce`
--
ALTER TABLE `t_detail_annonce`
  MODIFY `CodeDetail` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `t_entreprise`
--
ALTER TABLE `t_entreprise`
  MODIFY `CodeEntreprise` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `t_paiement`
--
ALTER TABLE `t_paiement`
  MODIFY `CodePaiement` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `t_programme`
--
ALTER TABLE `t_programme`
  MODIFY `CodeProgramme` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `t_secteur`
--
ALTER TABLE `t_secteur`
  MODIFY `CodeSecteur` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `t_station`
--
ALTER TABLE `t_station`
  MODIFY `CodeStation` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `t_tache`
--
ALTER TABLE `t_tache`
  MODIFY `CodeTache` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `t_tarif`
--
ALTER TABLE `t_tarif`
  MODIFY `CodeTarif` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `t_user`
--
ALTER TABLE `t_user`
  MODIFY `CodeUser` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


# netlify.toml
[build]
  command = "next build && next export"
  publish = "out"