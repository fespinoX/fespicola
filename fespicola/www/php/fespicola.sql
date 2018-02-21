DROP DATABASE IF EXISTS fespicola;
CREATE DATABASE fespicola CHARACTER SET utf8 COLLATE utf8_general_ci;
USE fespicola;

DROP TABLE IF EXISTS `resultados`;
CREATE TABLE `resultados` (
  `ID` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `NOMBRE` varchar(100) NOT NULL,
  `PUNTOS` int(8) NOT NULL,
  PRIMARY KEY (`ID`)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;