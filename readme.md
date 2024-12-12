# 🚌 Ticket Management System

## 🌟 Overview

The Ticket Management System is a robust, scalable backend solution for managing bus tickets. Built with Node.js, Express, and MongoDB, this system provides a seamless experience for both administrators and users in handling bus ticket operations.


## 🚀 Features

- **🔐 User Authentication**: Secure JWT-based authentication system
- **👥 Role-Based Access Control**: Distinct functionalities for admins and regular users
- **🚍 Bus Management**: Add, update, and delete bus information
- **🎫 Ticket Management**: Create, modify, and remove tickets for specific buses and time slots
- **💳 Ticket Purchasing**: Allow users to view and purchase available tickets
- **📊 Real-time Seat Availability**: Automatically update seat availability upon ticket purchase

## 🛠 Technologies Used

- **Backend**: Node.js, Express.js
-**Design Pattern**: Modular
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT)
- **Language**: TypeScript
- **API Testing**: Postman



## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/RizwanStinson/ticket-management-system.git
   cd ticket-management-system
   npm install
   npm run start


### ER Diagram
![Dashboard](/er_diagram/Ticket_Management_System_ERDiagram.png)

## Relations:

The Bus entity has a one-to-many relationship with the Ticket entity. This means a single bus can have multiple associated tickets.
The User entity has a one-to-many relationship with the Ticket entity. This means a single user can purchase multiple tickets.

## Primary Keys (PK):

The User entity has a primary key of UserID.
The Bus entity has a primary key of BusID.
The Ticket entity has a primary key of TicketID.

## Foreign Keys (FK):

The Ticket entity has a foreign key of BusID, which references the primary key of the Bus entity.
The Ticket entity also has a foreign key of UserID, which references the primary key of the User entity.


### Postman Collection

Visit the postman collection remotely at [https://documenter.getpostman.com/view/37648594/2sAYHxmNpC](Postman Collection). and locally at 
![Postman Collection](/Ticket%20Management%20System.postman_collection.json)
