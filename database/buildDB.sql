CREATE DATABASE CouncilWeb;
USE CouncilWeb;

SET character_set_client = utf8mb4;
SET character_set_results = utf8mb4;
SET character_set_connection = utf8mb4;

CREATE TABLE EventTags (
       TagID INT,
       TagName NVARCHAR(100)
);

CREATE TABLE EventTagsRelation (
       RelationID INT,
       TagID INT,
       EventID INT
);

CREATE TABLE Events (
       EventID INT,
       EventName NVARCHAR(100),
       Priority TINYINT,
       PriorityUntil DATE,
       CreateDate DATETIME,
       Creator NVARCHAR(100),
       Content NVARCHAR(1000)
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
       ProjectID INT,
       LabName NVARCHAR(100),
       Description NVARCHAR(2000)
);

CREATE TABLE Affairs (
       AffairID INT,
       Applicant NVARCHAR(100),
       ID VARCHAR(10),
       ApplyService NVARCHAR(100),
       ApplyDate DATETIME,
       ProcessDate DATETIME,
       ProcessName NVARCHAR(100),
       Comments NVARCHAR(500)
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
       AlbumID INT,
       AlbumName NVARCHAR(200),
       URL VARCHAR(2083),
       CoverImg LONGBLOB,
       CreateDate DATETIME,
       Creator NVARCHAR(100)
);
