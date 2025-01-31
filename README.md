Menu Management API (Node.js Backend)

Overview

This is a Node.js and Express.js backend project for menu management, allowing CRUD operations for Categories, Subcategories, and Items. The API is structured for scalability and ease of use, with a MongoDB database for storing menu data.

Features

Create, Read, Update, Delete (CRUD) operations for:

Categories

Subcategories

Items

Search API to find items by name.

RESTful API structure following MVC architecture.

Data validation using Mongoose schemas.

Postman Collection for testing APIs.

Detailed API Documentation.

Tech Stack

Backend: Node.js, Express.js

Database: MongoDB (Mongoose ODM)

Tools: Postman, GitHub, Loom (for explanation video)

Installation & Setup

Prerequisites

Make sure you have the following installed:

Node.js

MongoDB

Postman (for API testing)

Steps to Run the Application Locally

Clone the Repository

git clone https://github.com/vishwadwivedi35/Guestara-Node-Project.git
cd menu-management-api

Install Dependencies

npm install

Create a .env File and Add the Following:

PORT=5000
MONGO_URI=your_mongodb_connection_string

Start the Server

npm start

API Testing

Use Postman to send API requests to http://localhost:5000.

API Endpoints

Category APIs

Create Category - POST /api/categories

Get All Categories - GET /api/categories

Get Category by ID/Name - GET /api/categories/:id

Update Category - PUT /api/categories/:id

Delete Category - DELETE /api/categories/:id

Subcategory APIs

Create Subcategory - POST /api/subcategories

Get All Subcategories - GET /api/subcategories

Get Subcategory by ID/Name - GET /api/subcategories/:id

Update Subcategory - PUT /api/subcategories/:id

Delete Subcategory - DELETE /api/subcategories/:id

Item APIs

Create Item - POST /api/items

Get All Items - GET /api/items

Get Item by ID/Name - GET /api/items/:id

Search Item by Name - GET /api/items/search?name=<item-name>

Update Item - PUT /api/items/:id

Delete Item - DELETE /api/items/:id

Project Structure

menu-management-api/
│-- server.js # Entry point
│-- routes/ # Route handlers
│ ├── categoryRoutes.js
│ ├── subcategoryRoutes.js
│ ├── itemRoutes.js
│-- controllers/ # API logic
│ ├── categoryController.js
│ ├── subcategoryController.js
│ ├── itemController.js
│-- models/ # Mongoose schemas
│ ├── Category.js
│ ├── Subcategory.js
│ ├── Item.js
│-- config/
│ ├── db.js # MongoDB connection
│-- .env # Environment variables
│-- package.json # Dependencies
│-- README.md # Documentation

Deployment

Live Link: (To be added after deployment)

GitHub Repository: (To be added after pushing code)

Assignment Questions

Which database did you choose and why?

I chose MongoDB because it provides a flexible schema design for handling hierarchical data, such as categories and subcategories. Its NoSQL nature makes it easy to scale and store complex nested data.

Three things learned from this assignment?

Efficient API structuring for hierarchical data.

Optimizing search queries for faster lookups.

Writing clean and well-documented code for better maintainability.

Most difficult part of the assignment?

Managing relationships between categories, subcategories, and items while ensuring optimized querying was a challenge. Handling tax calculations dynamically also required careful logic.

What would you do differently with more time?

Implement authentication for admin access.

Improve API response times by using caching mechanisms.

Integrate Swagger documentation for better API usability.
