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
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT)
- **Language**: TypeScript
- **API Testing**: Postman

## 📋 Prerequisites

- Node.js (v14 or later)
- MongoDB
- npm or yarn

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/RizwanStinson/ticket-management-system.git
   cd ticket-management-system



npm init -y
npm install express mongoose bcrypt jsonwebtoken dotenv
npm install --save-dev typescript @types/express @types/mongoose @types/bcrypt @types/jsonwebtoken @types/node ts-node nodemon