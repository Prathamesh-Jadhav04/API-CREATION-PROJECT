API Creation Project 🚀

A simple REST API built using Node.js and Express.js that demonstrates the implementation of HTTP methods such as GET, POST, PUT, and DELETE.

This project is designed to understand the fundamentals of API creation and handling client requests with Express.js.

📌 Project Overview

The API provides endpoints to retrieve user names and simulate adding, updating, and deleting users.

✨ Features
Retrieve a list of users using GET.
Add a user using POST.
Update user information using PUT.
Delete a user using DELETE.
Parse incoming JSON request bodies.
Return responses in JSON format.
🛠️ Tech Stack
Node.js — JavaScript runtime environment.
Express.js — Web framework for building APIs.
JavaScript ES Modules — Modern JavaScript import syntax.
📂 Project Structure
text
API-CREATION-PROJECT/
├── server.js       # Express server and API routes
├── package.json    # Project dependencies and scripts
├── package-lock.json
└── README.md       # Project documentation


Note: The filenames above are examples. Adjust them to match your actual repository.

⚙️ Installation and Setup
1. Clone the Repository
bash
git clone https://github.com/Prathamesh-Jadhav04/API-CREATION-PROJECT.git

2. Navigate to the Project Directory
bash
cd API-CREATION-PROJECT

3. Install Dependencies
bash
npm install express


If your repository already contains a package.json with the required dependencies, run:

bash
npm install

4. Configure ES Modules

Ensure your package.json includes "type": "module" because the application uses ES module imports.

Example:

json
{
  "type": "module",
  "scripts": {
    "start": "node server.js"
  }
}


Replace server.js with the actual filename of your Express application.

5. Start the Server
bash
npm start


Alternatively, if you have not configured a start script, run:

bash
node server.js


The expected terminal output is:

text
Server started on port 4000

🌐 API Endpoints

Base URL: http://localhost:4000

HTTP Method	Endpoint	Description
GET	/api/users	Retrieve the list of users
POST	/api/Add	Simulate adding a user
PUT	/api/Update	Simulate updating a user
DELETE	/api/Delete	Simulate deleting a user
📡 API Request and Response Examples
1. Get All Users

Endpoint: GET /api/users

Retrieves a predefined list of user names.

Example Request

http
GET http://localhost:4000/api/users


Response — 200 OK

json
[
  "Minakshi",
  "Krishika",
  "Shravni"
]

2. Add a User

Endpoint: POST /api/Add

Returns a confirmation message indicating that a user was added.

Example Request

http
POST http://localhost:4000/api/Add
Content-Type: application/json


Example Request Body

json
{
  "name": "Prathamesh"
}


Response — 200 OK

json
{
  "Msg": "User Added In DB"
}


Note: The current implementation does not save the submitted user to a database. It only returns a response message.

3. Update a User

Endpoint: PUT /api/Update

Returns a confirmation message indicating that a user was updated.

Example Request

http
PUT http://localhost:4000/api/Update
Content-Type: application/json


Example Request Body

json
{
  "name": "Prathamesh Updated"
}


Response — 200 OK

json
{
  "Msg": "User Updated In DB"
}


Note: The current implementation does not modify a database record.

4. Delete a User

Endpoint: DELETE /api/Delete

Returns a confirmation message indicating that a user was deleted.

Example Request

http
DELETE http://localhost:4000/api/Delete


Response — 200 OK

json
{
  "Msg": "User Deleted From DB"
}


Note: The current implementation does not delete any actual user data.

🧪 Testing the API

You can test the endpoints using:

Postman — Send HTTP requests and inspect responses.
Thunder Client — Test APIs directly inside Visual Studio Code.
cURL — Test endpoints from the terminal.

Example:

bash
curl http://localhost:4000/api/users


For POST and PUT requests, select Body → raw → JSON in Postman to send a JSON request body.

🔮 Future Improvements
Implement actual CRUD operations with a database.
Add request validation.
Use dynamic user IDs for update and delete operations.
Add consistent error handling.
Create automated API tests.
Add API documentation using Swagger.
👨‍💻 Author

Prathamesh Jadhav

GitHub: @Prathamesh-Jadhav04
Repository: API-CREATION-PROJECT
📄 License

No license has been specified for this project.

⭐ If you find this project useful, feel free to explore the repository and follow its development.
