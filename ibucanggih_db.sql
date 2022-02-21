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
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventform`
--

LOCK TABLES `eventform` WRITE;
/*!40000 ALTER TABLE `eventform` DISABLE KEYS */;
INSERT INTO `eventform` VALUES (17,1,'08','Feb','Youtube Live','Youtube Youtube Youtube Youtube','blob:http://localhost:3000/4ae51685-a5d6-47ba-a139-e7abdf9edc75',99),(18,1,'08','Feb','Youtube Live','Youtube Youtube Youtube Youtube','blob:http://localhost:3000/a97938d1-3704-4bae-999e-73e272db5d94',99),(19,2,'08','Feb','Youtube Live','Youtube Youtube Youtube Youtube','blob:http://localhost:3000/af2dd81d-14b0-46b0-9cee-5a9bd1b54341',1),(20,2,'08','Feb','Youtube Live','Youtube Youtube Youtube Youtube','blob:http://localhost:3000/a2598058-26b3-4664-bc19-527fd25e1374',0),(21,2,'08','Feb','Youtube Live','Youtube Youtube Youtube Youtube','blob:http://localhost:3000/38c2435e-530c-4a62-83f1-e755fd34c843',99),(22,3,'08','Feb','Youtube Live','Youtube Youtube Youtube Youtube','blob:http://localhost:3000/71c20e2a-4e09-4d14-a0ea-1e587d76ff3b',0),(23,1,'08','Feb','Youtube Live','Youtube Youtube Youtube Youtube','blob:http://localhost:3000/58801501-c54b-4d5d-b258-4fe3dd41e48c',1),(24,1,'02','Feb','Youtube Live','Youtube Youtube Youtube Youtube','blob:http://localhost:3000/cbf3e928-617f-4314-b8db-b65e8d1377bb',99),(25,1,'02','Feb','Youtube Play','Youtube Youtube Youtube Youtube','blob:http://localhost:3000/3151e013-2d08-4ab6-ad6a-7b7ef3c5cf68',99);
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventname`
--

LOCK TABLES `eventname` WRITE;
/*!40000 ALTER TABLE `eventname` DISABLE KEYS */;
INSERT INTO `eventname` VALUES (1,'Youtube Youtube Youtube Youtube','Youtube Live','08','Feb',20),(2,'Whatsapp','Whatsapp Live','09','Feb',30);
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
INSERT INTO `eventtype` VALUES (18,'Youtube Live','blob:http://localhost:3000/1d4fbb54-acea-4856-9919-c03f98221e8b'),(19,'Challenge Online','blob:http://localhost:3000/e8f8227d-4473-40b6-8bca-f6e2250cfe85'),(21,'Kuliah Whatsapp','blob:http://localhost:3000/04c7043f-9e44-4bfe-a4ad-13356df4fd95');
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
  `phone` int(11) NOT NULL,
  `password` varchar(500) NOT NULL,
  `role` varchar(200) NOT NULL,
  `address` varchar(200) NOT NULL,
  `wagroup` varchar(200) NOT NULL,
  `image` varchar(500) NOT NULL,
  `poin` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQUE` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Rizki','123@gmail.com',123,'$2b$10$KJlHQUCC40u7nlLdsurWn.mBQMBtlbkrfG0crLraaqwNsXfF3qVwi','user','Jalan','Youtube Group','blob:http://localhost:3000/957c74e9-acc7-49f2-9dfe-2e2d00032756',60),(2,'tes','123@gmail.com',124,'$2b$10$pjm7pn4bcRFisPKxNinCXep0DbPknWMNxz4draDtNBojFtFH1zyZm','user','-','-','/static/media/DefaultPicture.ccc92cf1ece239c6ab9d.png',20),(3,'tes','123@gmail.com',126,'$2b$10$2tiS6kA845nnkc4rjc1EweIKSeF2xvN7vsUqJlyqszK3gjeWRZTxq','user','-','-','/static/media/Mother.de7b65afa6d57c499e9d.png',0),(4,'tess','123@gmail.com',130,'$2b$10$1aTbjoo.sn.pFFPsergweusEpMRMHIb3VH.IAFmPyQa/mgApSXH/.','user','-','-','/static/media/Mother.de7b65afa6d57c499e9d.png',0),(5,'tesss','123@gmail.com',131,'$2b$10$0is.1SomHKm6BOCmHNbvkecQ5I9GdlSugCn2eBX.XyMHuITv7v5i2','user','-','-','/static/media/Mother.de7b65afa6d57c499e9d.png',0),(6,'tes','123@gmail.com',321,'$2b$10$eYL7AVPATfwi6l3aenAPp.PcjyRHgozKencaWbLXAh4fKVPreHo3q','admin','-','-','/static/media/Mother.de7b65afa6d57c499e9d.png',0),(7,'tes','123@gmail.com',127,'$2b$10$/ALkiKsp1Uud9n1p4BId1OKPHDUOozGBcWQrX5ncjSJtwOXgDJqFm','user','-','-','/static/media/Mother.de7b65afa6d57c499e9d.png',0),(8,'tes','123@gmail.com',128,'$2b$10$t20cv5ag2c39VCnlwt0H/.CAGmlNM1YHANbBYcEfanHKBFGqrW8FS','user','-','-','/static/media/Mother.de7b65afa6d57c499e9d.png',0),(9,'aku','123@gmail.com',122,'$2b$10$uu7WrxlsOp3HlHXE4z0aD.l4Ee8h8sKjFNFucXFrKh0EtrKBWAFX2','user','-','-','/static/media/Mother.de7b65afa6d57c499e9d.png',0),(10,'Testi','123@gmail.com',2147483647,'$2b$10$MLp9a7fzD28rO7ulmmfvfeNQq9aW6e905Wp.3MKeQF/SY9Kl34Uzm','user','-','-','/static/media/Mother.de7b65afa6d57c499e9d.png',0);
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wagroups`
--

LOCK TABLES `wagroups` WRITE;
/*!40000 ALTER TABLE `wagroups` DISABLE KEYS */;
INSERT INTO `wagroups` VALUES (3,'Line'),(2,'Whatsapp'),(1,'Youtube Group');
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

-- Dump completed on 2022-02-21 17:36:09
