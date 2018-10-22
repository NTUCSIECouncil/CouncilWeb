CREATE DATABASE CouncilWeb;
USE CouncilWeb;

CREATE TABLE EventTags (
       TagID INT,
       TagName TEXT
);

CREATE TABLE EventTagsRelation (
       RelationID INT,
       TagID INT,
       EventID INT
);

CREATE TABLE Events (
       EventID INT,
       EventName TINYTEXT,
       Priority TINYINT,
       PriorityUntil DATE,
       CreateDate DATETIME,
       Creator TINYTEXT,
       Content LONGTEXT
);

CREATE TABLE ProjectTags (
       TagID INT,
       TagName TEXT
);

CREATE TABLE ProjectTagsRelation (
       RelationID INT,
       TagID INT,
       ProjectID INT
);

CREATE TABLE Projects (
       ProjectID INT,
       LabName TEXT,
       Description LONGTEXT
);

CREATE TABLE Affairs (
       AffairID INT,
       Applicant TINYTEXT,
       ID VARCHAR(10),
       ApplyService TINYTEXT,
       ApplyDate DATETIME,
       ProcessDate DATETIME,
       ProcessName TINYTEXT,
       Comments TEXT
);

CREATE TABLE AlbumTags (
       TagID INT,
       TagName TEXT
);

CREATE TABLE AlbumTagsRelation (
       RelationID INT,
       TagID INT,
       AlbumID INT
);

CREATE TABLE Albums (
       AlbumID INT,
       AlbumName TINYTEXT,
       URL VARCHAR(2083),
       CoverImg LONGBLOB,
       CreateDate DATETIME,
       Creator TINYTEXT
);
