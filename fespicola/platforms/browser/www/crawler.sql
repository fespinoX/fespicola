DROP DATABASE IF EXISTS crawler_app;
CREATE DATABASE crawler_app CHARACTER SET utf8 COLLATE utf8_general_ci;
USE crawler_app;

DROP TABLE IF EXISTS `bares`;
CREATE TABLE `bares` (
  `ID` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `NOMBRE` varchar(100) NOT NULL,
  `TIPO_DE_COMIDA` varchar(100) NOT NULL,
  `DIRECCION` varchar(100) NOT NULL,
  `BARRIO` varchar(100) NOT NULL,
  `CATEGORIA` varchar(100) NOT NULL,
  PRIMARY KEY (`ID`)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;