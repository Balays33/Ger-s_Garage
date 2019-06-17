drop database Gers_Garage;

Create database  Gers_Garage;

Create table  Gers_Garage.customers(
						contact_id INT NOT NULL AUTO_INCREMENT,
                        first_name VARCHAR(25),
						last_name VARCHAR(30) NOT NULL,
						birthday DATE, 
                        Mobile_Number int(20) not null,
                        customer_Email varchar(40) not null,
                        customer_Comment varchar(200),
                        primary key (contact_id)
);

create table Gers_Garage.vehicle(
						vehicle_type varchar(20),
                        vehicle_EngineSize int (4),
                        vehicle_Fuel varchar (10),
                        vehicle_BodyType varchar(15),
                        vehicle_Date int (4),
                        vehicle_Brand varchar (20),
                        vehicle_LicenseN varchar (10) unique,
                        vehicle_color varchar (10),
                        primary key (vehicle_LicenseN)
);

create table Gers_Garage.Booking(
						booking_Number int  unique AUTO_INCREMENT,
                        booking_Service varchar (20),
                        booking_Cost int (1000),
                        booking_ExtraCost int (1000),
                        primary key (booking_Number)
                        
);

create table Gers_Garage.Staff(
						staff_Number int not null auto_increment,
                        staff_Name varchar (30),
                        primary key (staff_Number)
);

create table Gers_Garage.PartItem(
						partItem_Number int  not null auto_increment,
                        partItem_Name varchar (30),
                        partItem_Cost int,
                        primary key (partItem_Number)
);