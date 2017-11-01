-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Mer 25 Octobre 2017 à 09:39
-- Version du serveur :  5.7.20-0ubuntu0.16.04.1
-- Version de PHP :  7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `blog`
--

-- --------------------------------------------------------

--
-- Structure de la table `Author`
--

CREATE TABLE `Author` (
  `Id` tinyint(3) UNSIGNED NOT NULL,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `Author`
--

INSERT INTO `Author` (`Id`, `FirstName`, `LastName`) VALUES
(1, 'John', 'Doe'),
(2, 'Hedin', 'Celine');

-- --------------------------------------------------------

--
-- Structure de la table `Category`
--

CREATE TABLE `Category` (
  `Id` tinyint(3) UNSIGNED NOT NULL,
  `Name` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `Category`
--

INSERT INTO `Category` (`Id`, `Name`) VALUES
(2, 'Jeux-Vidéos'),
(1, 'Voyages');

-- --------------------------------------------------------

--
-- Structure de la table `Comment`
--

CREATE TABLE `Comment` (
  `Id` mediumint(8) UNSIGNED NOT NULL,
  `NickName` varchar(30) DEFAULT NULL,
  `Contents` text NOT NULL,
  `CreationTimestamp` datetime NOT NULL,
  `Post_Id` smallint(5) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `Comment`
--

INSERT INTO `Comment` (`Id`, `NickName`, `Contents`, `CreationTimestamp`, `Post_Id`) VALUES
(1, 'c.line', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget suscipit metus. Nam nec velit ornare, tincidunt nunc sit amet, ullamcorper arcu. Fusce porta fringilla aliquet. Phasellus ac ante quam. Nullam pharetra vitae ipsum vel auctor. Etiam sit amet pretium ipsum. Etiam volutpat risus vitae tortor vulputate, quis dignissim turpis vestibulum. Donec porta hendrerit lorem, nec blandit magna consequat bibendum. Nunc imperdiet nunc nec venenatis mollis. Donec nunc orci, scelerisque id felis id, sagittis vestibulum ipsum.', '2017-10-19 00:00:00', 2),
(2, 'Ali', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget suscipit metus. Nam nec velit ornare, tincidunt nunc sit amet, ullamcorper arcu. Fusce porta fringilla aliquet. Phasellus ac ante quam. ', '2017-10-20 00:00:00', 1),
(3, 'Ali', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget suscipit metus. Nam nec velit ornare, tincidunt nunc sit amet, ullamcorper arcu. Fusce porta fringilla aliquet. Phasellus ac ante quam. ', '2017-10-20 00:00:00', 1),
(4, 'Rayan', 'Yo!!!', '2017-10-19 00:00:00', 3),
(5, 'Rayan', 'Yo!!!', '2017-10-19 00:00:00', 3),
(6, 'Fileas', 'Coucou', '2017-10-18 00:00:00', 1),
(8, 'Celine', 'lorem12', '2017-10-20 15:53:43', 1),
(9, 'Philippe', 'Je ne suis pas d\'accord!!!!', '2017-10-20 15:56:23', 3),
(10, 'Philippe', 'Je ne suis pas daccord!!!!', '2017-10-20 16:05:25', 3);

-- --------------------------------------------------------

--
-- Structure de la table `Post`
--

CREATE TABLE `Post` (
  `Id` smallint(5) UNSIGNED NOT NULL,
  `Title` varchar(100) NOT NULL,
  `img` varchar(60) DEFAULT NULL,
  `Contents` text NOT NULL,
  `CreationTimestamp` datetime NOT NULL,
  `Author_Id` tinyint(3) UNSIGNED DEFAULT NULL,
  `Category_Id` tinyint(3) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `Post`
--

INSERT INTO `Post` (`Id`, `Title`, `img`, `Contents`, `CreationTimestamp`, `Author_Id`, `Category_Id`) VALUES
(1, 'Les fauteuils de bureau ergonomiques', '../img/fauteuil-de-bureau.jpg', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit alias vel cum voluptates, totam! Corporis sequi, minus similique facilis eveniet! Rerum, atque eius impedit, dolor quod minima similique velit sequi.\r\n<h1>Coucou</h1>\r\nNihil aliquam eos exercitationem repudiandae harum, doloremque ratione quam, sint earum neque quas quo veniam laboriosam quis ipsam iusto soluta.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit alias vel cum voluptates, totam! Corporis sequi, minus similique facilis eveniet! Rerum, atque eius impedit, dolor quod minima similique velit sequi. Nihil aliquam eos exercitationem repudiandae harum, doloremque ratione quam, sint earum neque quas quo veniam laboriosam quis ipsam iusto soluta.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit alias vel cum voluptates, totam! Corporis sequi, minus similique facilis eveniet!\r\n\r\nRerum, atque eius impedit, dolor quod minima similique velit sequi. Nihil aliquam eos exercitationem repudiandae harum, doloremque ratione quam, sint earum neque quas quo veniam laboriosam quis ipsam iusto soluta.Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n\r\nVelit alias vel cum voluptates, totam! Corporis sequi, minus similique facilis eveniet! Rerum, atque eius impedit, dolor quod minima similique velit sequi. Nihil aliquam eos exercitationem repudiandae harum, doloremque ratione quam, sint earum neque quas quo veniam laboriosam quis ipsam iusto soluta.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit alias vel cum voluptates, totam! Corporis sequi, minus similique facilis eveniet!\r\n\r\nRerum, atque eius impedit, dolor quod minima similique velit sequi. Nihil aliquam eos exercitationem repudiandae harum, doloremque ratione quam, sint earum neque quas quo veniam laboriosam quis ipsam iusto soluta.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit alias vel cum voluptates, totam! Corporis sequi, minus similique facilis eveniet! Rerum, atque eius impedit, dolor quod minima similique velit sequi. Nihil aliquam eos exercitationem repudiandae harum, doloremque ratione quam, sint earum neque quas quo veniam laboriosam quis ipsam iusto soluta.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit alias vel cum voluptates, totam! Corporis sequi, minus similique facilis eveniet!\r\n\r\nRerum, atque eius impedit, dolor quod minima similique velit sequi. Nihil aliquam eos exercitationem repudiandae harum, doloremque ratione quam, sint earum neque quas quo veniam laboriosam quis ipsam iusto soluta.', '2017-10-02 00:00:00', 2, 1),
(2, 'Le travail en toute sécurité dans le BTP', '../img/consulting_business_russie_btp.jpg', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit alias vel cum voluptates, totam! Corporis sequi, minus similique facilis eveniet! Rerum, atque eius impedit, dolor quod minima similique velit sequi.\r\n\r\nNihil aliquam eos exercitationem repudiandae harum, doloremque ratione quam, sint earum neque quas quo veniam laboriosam quis ipsam iusto soluta.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit alias vel cum voluptates, totam! Corporis sequi, minus similique facilis eveniet! Rerum, atque eius impedit, dolor quod minima similique velit sequi. Nihil aliquam eos exercitationem repudiandae harum, doloremque ratione quam, sint earum neque quas quo veniam laboriosam quis ipsam iusto soluta.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit alias vel cum voluptates, totam! Corporis sequi, minus similique facilis eveniet! \\n \r\nRerum, atque eius impedit, dolor quod minima similique velit sequi. Nihil aliquam eos exercitationem repudiandae harum, doloremque ratione quam, sint earum neque quas quo veniam laboriosam quis ipsam iusto soluta.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit alias vel cum voluptates, totam! Corporis sequi, minus similique facilis eveniet! Rerum, atque eius impedit, dolor quod minima similique velit sequi. Nihil aliquam eos exercitationem repudiandae harum, doloremque ratione quam, sint earum neque quas quo veniam laboriosam quis ipsam iusto soluta.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit alias vel cum voluptates, totam! Corporis sequi, minus similique facilis eveniet! \\n \r\nRerum, atque eius impedit, dolor quod minima similique velit sequi. Nihil aliquam eos exercitationem repudiandae harum, doloremque ratione quam, sint earum neque quas quo veniam laboriosam quis ipsam iusto soluta.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit alias vel cum voluptates, totam! Corporis sequi, minus similique facilis eveniet! Rerum, atque eius impedit, dolor quod minima similique velit sequi. Nihil aliquam eos exercitationem repudiandae harum, doloremque ratione quam, sint earum neque quas quo veniam laboriosam quis ipsam iusto soluta.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit alias vel cum voluptates, totam! \\n \r\nCorporis sequi, minus similique facilis eveniet! Rerum, atque eius impedit, dolor quod minima similique velit sequi. Nihil aliquam eos exercitationem repudiandae harum, doloremque ratione quam, sint earum neque quas quo veniam laboriosam quis ipsam iusto soluta.', '2017-10-16 00:00:00', 1, 2),
(3, 'L\'open space, pour ou contre??', '../img/open space.jpg', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit alias vel cum voluptates, totam! Corporis sequi, minus similique facilis eveniet! Rerum, atque eius impedit, dolor quod minima similique velit sequi. Nihil aliquam eos exercitationem repudiandae harum, doloremque ratione quam, sint earum neque quas quo veniam laboriosam quis ipsam iusto soluta.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit alias vel cum voluptates, totam! Corporis sequi, minus similique facilis eveniet!\\n \r\nRerum, atque eius impedit, dolor quod minima similique velit sequi. Nihil aliquam eos exercitationem repudiandae harum, doloremque ratione quam, sint earum neque quas quo veniam laboriosam quis ipsam iusto soluta.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit alias vel cum voluptates, totam! Corporis sequi, minus similique facilis eveniet! \\n\r\nRerum, atque eius impedit, dolor quod minima similique velit sequi. Nihil aliquam eos exercitationem repudiandae harum, doloremque ratione quam, sint earum neque quas quo veniam laboriosam quis ipsam iusto soluta.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit alias vel cum voluptates, totam! Corporis sequi, minus similique facilis eveniet! \\n \r\nRerum, atque eius impedit, dolor quod minima similique velit sequi. Nihil aliquam eos exercitationem repudiandae harum, doloremque ratione quam, sint earum neque quas quo veniam laboriosam quis ipsam iusto soluta.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit alias vel cum voluptates, totam! Corporis sequi, minus similique facilis eveniet! Rerum, atque eius impedit, dolor quod minima similique velit sequi. Nihil aliquam eos exercitationem repudiandae harum, doloremque ratione quam, sint earum neque quas quo veniam laboriosam quis ipsam iusto soluta.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit alias vel cum voluptates, totam! Corporis sequi, minus similique facilis eveniet! \\n \r\nRerum, atque eius impedit, dolor quod minima similique velit sequi. Nihil aliquam eos exercitationem repudiandae harum, doloremque ratione quam, sint earum neque quas quo veniam laboriosam quis ipsam iusto soluta.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit alias vel cum voluptates, totam! Corporis sequi, minus similique facilis eveniet! Rerum, atque eius impedit, dolor quod minima similique velit sequi. Nihil aliquam eos exercitationem repudiandae harum, doloremque ratione quam, sint earum neque quas quo veniam laboriosam quis ipsam iusto soluta.', '2017-10-18 00:00:00', 1, 1),
(17, 'La sécurité au travail passe par les salariés', '../img/d19a3c2_9216-gqq5rn.jpg', '\r\n« Le paramètre sécurité est devenu aussi important pour les entreprises multinationales que le prix des appels d’offres. Les pétroliers ont été les précurseurs suivis par les autres secteurs », indique Benoît Clocheret, directeur général du cabinet de conseils Artelia, qui organise depuis trois ans une rencontre annuelle des responsables de la sécurité de grandes entreprises de l’industrie, de la construction et de l’énergie (Total, Shell, Bolloré, Eiffage, Vinci, etc.).\r\nPourtant les syndicats constatent encore des situations de sous-déclarations des accidents du travail, toujours perçus comme blâmables, car associés à une dégradation de l’image de l’entreprise et à une augmentation des cotisations sociales.\r\nC’est la raison pour laquelle l’objectif « zéro presque accident » a pris la place dans les multinationales du « zéro accident » affiché par les directions des ressources humaines. Ce néologisme créé par les acteurs de terrain de la sécurité au travail pour désigner les incidents, autrement dit les accidents qui ont pu être évités, est devenu un classique dont les multinationales font désormais le bilan pour réduire le risque réel d’accidentologie.\r\n2,34 millions de décès chaque année\r\nL’enjeu : 4 % du produit intérieur brut (PIB), selon l’Organisation internationale du travail (OIT) qui a évalué le coût annuel de l’absentéisme, des retraites anticipées, et de la hausse des cotisations liée au nombre et à la fréquence des accidents du travail. « Plus la taille de l’entreprise augmente, plus le taux est individualisé et repose sur les résultats de l’établissement en matière de sécurité », précise l’Urssaf.\r\nQuant au coût humain : 2,34 millions de travailleurs décèdent chaque année des suites d’un accident ou d’une maladie liés au travail, soit 6 300 par jour, selon les estimations de l’OIT, qui se penchera, du 30 mai au 10 juin, sur les pratiques des multinationales à l’occasion de la 105e Conférence...\r\n', '2017-10-23 14:14:03', 2, 2);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `Author`
--
ALTER TABLE `Author`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `Category`
--
ALTER TABLE `Category`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `Name` (`Name`);

--
-- Index pour la table `Comment`
--
ALTER TABLE `Comment`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `CreationTimestamp` (`CreationTimestamp`),
  ADD KEY `Post_Id` (`Post_Id`);

--
-- Index pour la table `Post`
--
ALTER TABLE `Post`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `Title` (`Title`),
  ADD KEY `CreationTimestamp` (`CreationTimestamp`),
  ADD KEY `Author_Id` (`Author_Id`),
  ADD KEY `Category_Id` (`Category_Id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `Author`
--
ALTER TABLE `Author`
  MODIFY `Id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `Category`
--
ALTER TABLE `Category`
  MODIFY `Id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `Comment`
--
ALTER TABLE `Comment`
  MODIFY `Id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT pour la table `Post`
--
ALTER TABLE `Post`
  MODIFY `Id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `Comment`
--
ALTER TABLE `Comment`
  ADD CONSTRAINT `Comment_ibfk_1` FOREIGN KEY (`Post_Id`) REFERENCES `Post` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `Post`
--
ALTER TABLE `Post`
  ADD CONSTRAINT `Post_ibfk_1` FOREIGN KEY (`Author_Id`) REFERENCES `Author` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Post_ibfk_2` FOREIGN KEY (`Category_Id`) REFERENCES `Category` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
