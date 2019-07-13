CREATE DATABASE CouncilWeb;
USE CouncilWeb;

SET character_set_client = utf8mb4;
SET character_set_results = utf8mb4;
SET character_set_connection = utf8mb4;

CREATE TABLE EventTags (
       TagID INT NOT NULL AUTO_INCREMENT,
       TagName NVARCHAR(100),
       PRIMARY KEY (TagID)
);

CREATE TABLE EventTagsRelation (
       RelationID INT,
       TagID INT,
       EventID INT
);

CREATE TABLE Events (
       EventID INT NOT NULL AUTO_INCREMENT,
       EventName NVARCHAR(100),
	Category NVARCHAR(100),
       Priority TINYINT,
       PriorityUntil DATE,
       CreateDate DATETIME,
       Creator NVARCHAR(100),
       Content NVARCHAR(1000),
	PRIMARY KEY (EventID)
);

CREATE TABLE ProjectTags (
       TagID INT,
       TagName NVARCHAR(100)
);

CREATE TABLE ProjectTagsRelation (
       RelationID INT,
       TagID INT,
       ProjectID INT
);

CREATE TABLE Projects (
       ProjectID INT NOT NULL AUTO_INCREMENT,
       LabName NVARCHAR(100),
       ProfessorName_ZH NVARCHAR(100),
       ProfessorName_EN NVARCHAR(100),
       Description NVARCHAR(4000),
	PRIMARY KEY (ProjectID)
);

CREATE TABLE Affairs (
       AffairID INT NOT NULL AUTO_INCREMENT,
       Applicant NVARCHAR(100),
       ID VARCHAR(10),
       ApplyService NVARCHAR(100),
       ApplyDate DATETIME,
       ProcessDate DATETIME,
       ProcessName NVARCHAR(100),
       Comments NVARCHAR(500),
	PRIMARY KEY (AffairID)
);

CREATE TABLE AlbumTags (
       TagID INT,
       TagName NVARCHAR(100)
);

CREATE TABLE AlbumTagsRelation (
       RelationID INT,
       TagID INT,
       AlbumID INT
);

CREATE TABLE Albums (
       AlbumID INT NOT NULL AUTO_INCREMENT,
       AlbumName NVARCHAR(200),
       URL VARCHAR(2083),
       CoverImg NVARCHAR(200),
       CreateDate DATETIME,
       Creator NVARCHAR(100),
	PRIMARY KEY (AlbumID)
);

CREATE TABLE Accounts (
       id int(11) NOT NULL,
       username varchar(50) NOT NULL,
       password varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2;
ALTER TABLE Accounts ADD PRIMARY KEY (id);
ALTER TABLE Accounts MODIFY id int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
