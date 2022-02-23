-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: ibucanggih_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `ibucanggih_db`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `ibucanggih_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `ibucanggih_db`;

--
-- Table structure for table `eventform`
--

DROP TABLE IF EXISTS `eventform`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventform` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `date` varchar(200) NOT NULL,
  `month` varchar(200) NOT NULL,
  `eventtype` varchar(200) NOT NULL,
  `eventname` varchar(200) NOT NULL,
  `image` varchar(500) NOT NULL,
  `review` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventform`
--

LOCK TABLES `eventform` WRITE;
/*!40000 ALTER TABLE `eventform` DISABLE KEYS */;
/*!40000 ALTER TABLE `eventform` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eventname`
--

DROP TABLE IF EXISTS `eventname`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventname` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `type` varchar(200) NOT NULL,
  `date` varchar(200) NOT NULL,
  `month` varchar(200) NOT NULL,
  `poin` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventname`
--

LOCK TABLES `eventname` WRITE;
/*!40000 ALTER TABLE `eventname` DISABLE KEYS */;
INSERT INTO `eventname` VALUES (1,'Youtube','Youtube Live','08','Mar',25);
/*!40000 ALTER TABLE `eventname` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eventtype`
--

DROP TABLE IF EXISTS `eventtype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventtype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `image` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventtype`
--

LOCK TABLES `eventtype` WRITE;
/*!40000 ALTER TABLE `eventtype` DISABLE KEYS */;
INSERT INTO `eventtype` VALUES (1,'Youtube Live','blob:http://localhost:3000/1d4fbb54-acea-4856-9919-c03f98221e8b'),(2,'Challenge Online','blob:http://localhost:3000/e8f8227d-4473-40b6-8bca-f6e2250cfe85'),(3,'Kuliah Whatsapp','blob:http://localhost:3000/04c7043f-9e44-4bfe-a4ad-13356df4fd95');
/*!40000 ALTER TABLE `eventtype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `password` varchar(500) NOT NULL,
  `role` varchar(200) NOT NULL,
  `address` varchar(200) NOT NULL,
  `wagroup` varchar(200) NOT NULL,
  `image` varchar(500) NOT NULL,
  `poin` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQUE` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'IbuCanggih','IbuCanggih@gmail.com','081987654321','$2b$10$0/5tm6xCW3skFhNKHV8B9urg91Mq6goxI.R34U0jRCj32rK.1LuRO','admin','-','-','/static/media/Mother.de7b65afa6d57c499e9d.png',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wagroups`
--

DROP TABLE IF EXISTS `wagroups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wagroups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wagroups`
--

LOCK TABLES `wagroups` WRITE;
/*!40000 ALTER TABLE `wagroups` DISABLE KEYS */;
INSERT INTO `wagroups` VALUES (1,'Group 1');
/*!40000 ALTER TABLE `wagroups` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-23 11:51:27
