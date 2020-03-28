-- Drops the closetohome db if it exists currently
DROP DATABASE IF EXISTS closetohome;

-- Creates the closetohome database
CREATE DATABASE closetohome;

USE closetohome;

-- Create the table individual
CREATE TABLE individual (
    id INT AUTO_INCREMENT NOT NULL,
    fname VARCHAR(50) NOT NULL,
    lname VARCHAR(50) NOT NULL,
    familyId INT NOT NULL,
    city VARCHAR(50),
    state VARCHAR(50),
    riskFactor INT,
    PRIMARY KEY (id)
);

-- Create the table family
CREATE TABLE family (
    id INT AUTO_INCREMENT NOT NULL,
    userCreated VARCHAR(255),
    dateCreated DATETIME,
    PRIMARY KEY (id)
);

-- Create the table symptoms
CREATE TABLE symptoms (
    id INT AUTO_INCREMENT NOT NULL,
    individualID INT NOT NULL,
    description VARCHAR(255),
    dateFirstAppeared DATETIME,
    PRIMARY KEY (id)
);

-- Create the table needs
CREATE TABLE needs (
    id INT AUTO_INCREMENT NOT NULL,
    individualID INT NOT NULL,
    description VARCHAR(255),
    datePosted DATETIME,
    PRIMARY KEY (id)
);