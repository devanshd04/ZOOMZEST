ZoomZest Car Rental

Project Overview

ZoomZest Car Rental is a full-featured web application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides a seamless car rental experience for both customers and administrators, with features like car listings, real-time booking, and user authentication. This project was built with a focus on modern web development practices and an interactive user interface.

Features

User Authentication: Secure registration and login using JWT.
Car Listings with Filters: View and filter cars based on different criteria (model, price, etc.).
Booking System: Real-time availability checks and reservation confirmation.
Admin Dashboard: Manage car inventory, view bookings, and handle user data.
Responsive Design: Ensures the platform is accessible across desktop and mobile devices.
Interactive Frontend: Developed with React.js for a dynamic user experience.
Tech Stack Used

Frontend: React.js, HTML, CSS, Bootstrap
Backend: Node.js, Express.js
Database: MongoDB (managed with Mongoose)
Tools: MongoDB Compass, JWT for authentication
Installation and Setup

To set up the ZoomZest Car Rental project locally, follow these steps:

Prerequisites
Node.js (version 14.x or higher)
npm (or yarn)
MongoDB (local instance or cloud-based)
Installation Steps
Clone the Repository:
bash
Copy code
git clone https://github.com/your-repo/zoomzest-car-rental.git
cd zoomzest-car-rental
Install Dependencies:
Navigate to the api folder (backend):
bash
Copy code
cd api
npm install
Navigate to the client folder (frontend):
bash
Copy code
cd ../client
npm install
Set Up Environment Variables: Create a .env file in the api folder and add:
env
Copy code
MONGO_URL=mongodb://<your_mongo_connection_string>
PORT=5001
SECRET=my_super_secret_key_12345
Start the Project:
Run the backend server:
bash
Copy code
cd ../api
npm start
Run the frontend development server:
bash
Copy code
cd ../client
npm start
Usage

User Registration/Login:
Users can sign up and log in to access the car rental services.
Browse Cars:
View available cars with filter options.
Make a Booking:
Select a car, pick rental dates, and confirm your booking.
Admin Panel:
Accessible by admin users to manage cars and bookings.
Database Structure

Users Collection:
json
Copy code
{
  "userId": "uniqueId",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "hashedPassword",
  "bookings": []
}
Cars Collection:
json
Copy code
{
  "carId": "uniqueCarId",
  "model": "Toyota Prius",
  "availability": true,
  "pricePerDay": 50
}
Bookings Collection:
json
Copy code
{
  "bookingId": "uniqueBookingId",
  "userId": "uniqueId",
  "carId": "uniqueCarId",
  "startDate": "2024-11-05",
  "endDate": "2024-11-10",
  "status": "confirmed"
}
Technical Issues and Solutions

API Delays: Improved response times by optimizing middleware and using asynchronous code.
CORS Errors: Implemented cors middleware in Express to handle cross-origin requests.
State Management: Used React hooks like useState and useEffect for effective state handling.
Future Scope

Mobile App Development: Extend ZoomZest to iOS and Android platforms.
Advanced Analytics: Dashboard with insights for admins on user behavior and car trends.
Payment Integration: Support for secure payment gateways for booking fees.
Real-Time Car Tracking: Implement GPS tracking for better user experience and security.
