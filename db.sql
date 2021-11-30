CREATE DATABASE 'portfolio';

USE portfolio;

CREATE TABLE `project` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `created_at` date NOT NULL,
  `illustration` varchar(255) NOT NULL
);


INSERT INTO `project` (`id`, `title`, `content`, `created_at`, `illustration`) VALUES
('plop', 'lorem', '2021-01-21', 'image'),
('plop1', 'lorem', '2021-01-21', 'image'),
('plop2', 'lorem', '2021-01-21', 'image'),
('plop3', 'lorem', '2021-01-21', 'image');