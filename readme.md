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
- **Password Hashing**: Bcrypt



## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/RizwanStinson/Ticket_Management_System
   cd Ticket-Management-System
   npm install
   npm run dev

2. **Environment Variables Setup**
   ```bash
   MONGODB_URI = your_mongodb_atlas_connection_string
   JWT_SECRET = your_jwt_secret_key
   PORT = your_desired_port_number

To run the project locally, you need to set up the following environment variables in a .env file at the root of your project. 

 
## 🟠 Postman Collection

Visit the published postman collection remotely at (https://documenter.getpostman.com/view/37648594/2sAYHxmNpC) 
and locally at ![Postman Collection](/Ticket%20Management%20System.postman_collection.json)

## 📊 ER Diagram
![ER_Diagram](/er_diagram/ER_Diagram.png)