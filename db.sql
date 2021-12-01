CREATE DATABASE `portfolio`;

USE `portfolio`;

CREATE TABLE `project` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `created_at` date NOT NULL,
  `illustration` varchar(255) NOT NULL
);

INSERT INTO `project` (`title`, `content`, `created_at`, `illustration`) VALUES
('plop', 'lorem', '2021-01-21', 'image'),
('plop1', 'lorem', '2021-01-21', 'image'),
('plop2', 'lorem', '2021-01-21', 'image'),
('plop3', 'lorem', '2021-01-21', 'image');

CREATE TABLE `category` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `name` varchar(255) NOT NULL
);

CREATE TABLE `techno` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `name` varchar(255) NOT NULL
);

CREATE TABLE `techno_project` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `techno_id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL
);

ALTER TABLE `project`
  ADD CONSTRAINT `project_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);

ALTER TABLE `techno_project`
  ADD CONSTRAINT `techno_project_ibfk_1` FOREIGN KEY (`techno_id`) REFERENCES `techno` (`id`),
  ADD CONSTRAINT `techno_project_ibfk_2` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`);

INSERT INTO `category` (`name`) VALUES
('Dev Web'),
('Client'),
('School');

INSERT INTO `techno` (`name`) VALUES
('PHP'),
('JS'),
('React');
