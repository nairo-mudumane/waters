-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 28, 2021 at 09:01 PM
-- Server version: 10.4.16-MariaDB
-- PHP Version: 7.3.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `waters`
--

-- --------------------------------------------------------

--
-- Table structure for table `waters_all_users`
--

CREATE TABLE `waters_all_users` (
  `id` int(111) NOT NULL,
  `id_user` varchar(100) NOT NULL,
  `password` varchar(20) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `waters_all_users`
--

INSERT INTO `waters_all_users` (`id`, `id_user`, `password`, `first_name`, `last_name`) VALUES
(1, 'fdl001', '123', '', ''),
(2, 'fdl002', '123', '', ''),
(3, 'fdl003', '123', '', ''),
(4, 'fdl004', '123', '', ''),
(5, 'fdl005', '123', '', ''),
(6, 'fdl006', '123', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `waters_all_users`
--
ALTER TABLE `waters_all_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `waters_all_users`
--
ALTER TABLE `waters_all_users`
  MODIFY `id` int(111) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
