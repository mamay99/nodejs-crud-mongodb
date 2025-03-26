# nodejs-crud-mongodb
Node.js CRUD API with MongoDB (MVC Pattern)

Project Overview

This project is a simple CRUD (Create, Read, Update, Delete) application built using Node.js and MongoDB. The API is designed using the MVC (Model-View-Controller) pattern, and Postman is used for testing API requests.

Technologies Used

Node.js - Backend runtime environment

Express.js - Web framework for Node.js

MongoDB - NoSQL database

Mongoose - ODM (Object Data Modeling) library for MongoDB

Postman - API testing tool

Project Structure

/project-root
│── /controllers      # Handles request logic
│   │── user.js       # Controller for user request & CRUD operations
│
│── /models           # Defines MongoDB schemas
│   │── user.js       # Mongoose User schema for desired fields
│
│── /routes           # fucntions routes
│   │── user.js       # Routes for handling CRUD requests
│
│── /middlewares      # Custom middleware 
│   │── index.js      # Maintainig the log file for all operations 
│
│── /connection.js    # MongoDb Database Connections
│
│── .gitignore        # Files to ignore in Git
│── package.json      # Project dependencies and scripts
│── index.js          # Entry point of the application
│── README.md         # Project documentation

Description of Key Directories and Files

/controllers/: Contains controller functions that handle business logic for various API requests.

/models/: Defines the structure of database collections using Mongoose schemas.

/routes/: Contains route files that define functions containing CRUD requests.

/middlewares/: Includes custom middleware functions for Maintainig the log file for all operations.

/connection.js: Stores configuration files, such as database connection settings.

server.js: The main entry point of the application that initializes the server and connects the components.

package.json: Contains project dependencies, scripts, and metadata.

.gitignore: Specifies files and directories to exclude from version control.

README.md: Documentation explaining the project, setup, and usage.

Installation and Setup

1. Clone the Repository

git clone https://github.com/mamay99/nodejs-crud-mongodb.git
cd nodejs-crud-mongodb

2. Install Dependencies

npm install

3. Setup Environment Variables

Create a .env file in the root directory and add the following:

MONGO_URI=mongodb://127.0.0.1:27017/practice1
PORT=8000

4. Run the Server

npm start

The server will start on http://localhost:8000.

API Endpoints

Method

Endpoint

Description

GET

[/users]
http://localhost:8000/api/user/

Get all items

GET

[/api/users/:id]
(http://localhost:8000/api/user/67e32653735cfc2955ff2f2f)

Get item by ID

POST

[/items]
(http://localhost:8000/api/user/)

Create a new item

PATCH

[/items/:id]
(http://localhost:8000/api/user/67e391928f7172d2b7fe3596)

Update an item

DELETE

[/items/:id]
(http://localhost:8000/api/user/67e391928f7172d2b7fe3596)

Delete an item

License

This project is licensed under the MIT License.

