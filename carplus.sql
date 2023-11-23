-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-11-2023 a las 15:41:27
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `carplus`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `car`
--

CREATE TABLE `car` (
  `id` int(10) NOT NULL,
  `modelo` varchar(50) NOT NULL,
  `ano` varchar(50) NOT NULL,
  `marca` varchar(50) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `imagen` varchar(6000) NOT NULL,
  `descripcion` varchar(6000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `car`
--

INSERT INTO `car` (`id`, `modelo`, `ano`, `marca`, `tipo`, `imagen`, `descripcion`) VALUES
(17, 'OptraDesign', '2009-01-01', 'Chevrolet', 'Casual', 'https://www.venelogia.com/uploads/mandrake/chevrolet-optra-sedan-frontal.jpg', 'Optra design color rojo del año 2009'),
(18, 'Charger', '1970-01-01', 'Dodge', 'Deportivo', 'https://cdn.topgear.es/sites/navi.axelspringer.es/public/media/image/2019/08/dodge-charger-1970.jpg?tf=3840x', 'Dodge Charger año 1970'),
(19, 'BelAir', '1957-01-01', 'Chevrolet', 'Convertible', 'https://i.pinimg.com/736x/cd/f9/3f/cdf93fde782c02e0838a49415dd8c965.jpg', 'Bel Air convertible año 1957'),
(20, 'Coronet', '1970-01-01', 'Dodge', 'Deportivo', 'https://blog.consumerguide.com/wp-content/uploads/sites/2/2020/10/1970-SuperBee-A057.jpg', 'Dodge Coronet año 1970');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `car`
--
ALTER TABLE `car`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `car`
--
ALTER TABLE `car`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
