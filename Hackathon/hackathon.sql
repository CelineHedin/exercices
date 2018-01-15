-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  hackathon.cfmlgkjd4t1q.eu-west-1.rds.amazonaws.com:3306
-- Généré le :  Jeu 02 Novembre 2017 à 19:49
-- Version du serveur :  5.6.35-log
-- Version de PHP :  7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `hackathon`
--

-- --------------------------------------------------------

--
-- Structure de la table `fantome`
--

CREATE TABLE `fantome` (
  `id` int(11) NOT NULL,
  `pseudo` varchar(50) CHARACTER SET utf8 NOT NULL,
  `score` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `fantome`
--

INSERT INTO `fantome` (`id`, `pseudo`, `score`, `date`) VALUES
(8, 'Romain', 1234456, '2017-11-01'),
(9, 'gcgcds', 1, '2017-11-08'),
(10, 'dhdgvdgvdf', 2, '2017-11-08'),
(12, 'grgfrgfr', 12345, '2017-11-06'),
(13, 'hdshvfqsghvqfs', 12456, '2017-11-08'),
(14, 'ytezytfearzty', 1234, '2017-11-07'),
(15, 'sqdgdqghsvdqsg', 56798, '2017-11-01'),
(16, 'gqqgcdqzgh', 3456, '2017-11-02'),
(17, 'gqdvzhgfqg', 3456, '2017-11-01'),
(18, 'hjfqjfgqdjg', 568, '2017-11-09'),
(19, 'c.line', 234567870, '2017-11-02');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `fantome`
--
ALTER TABLE `fantome`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `fantome`
--
ALTER TABLE `fantome`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
