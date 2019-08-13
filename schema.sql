CREATE DATABASE phillymeetup_db;
USE phillymeetup_db;

CREATE TABLE phillymeets
-- Is this table just for events? 
(
	id int NOT NULL AUTO_INCREMENT,
	event_name varchar(30) NOT NULL,
	event_type varchar(30) NOT NULL,
    event_location varchar (30),
    event_date date(YYYY-MM-DD) NOT NULL.
	PRIMARY KEY (id)
);