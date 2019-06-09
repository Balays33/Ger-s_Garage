Create database  Gers_Garage;

Create table  Gers_Garage.customers(
						contact_id INT(5000) NOT NULL AUTO_INCREMENT,
                        first_name VARCHAR(25),
						last_name VARCHAR(30) NOT NULL,
						birthday DATE, 
                        Mobile_Number int(20) not null,
                        customer_Email varchar(40) not null,
                        primary key (contact_id)
);

create table Gers_Garage.vehicle(
						vehicle_type varchar(20),
                        vehicle_EngineSize int (4),
                        vehicle_Fuel varchar (10),
                        vehicle_BodyType varchar(15),
                        vehicle_Date int (4),
                        vehicle_Brand varchar (20),
                        vehicle_LicenseN varchar (10),
                        vehicle_color varchar (10)
);