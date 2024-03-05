## API Playground

The API Playground is an application designed to help non-developers understand how APIs work by providing a user-friendly interface to interact with various HTTP requests, such as POST, GET, PATCH, and DELETE. With the support of tools like Postman, users can experiment with different API requests and responses in a controlled environment.

![devDevelopers](https://github.com/christweaver/kelson-app/assets/100533989/035e5699-3675-4534-9537-5764cd2159e4)

## Technologies Used:
- Next.js
- Prisma
- PostgreSQL
- Postman
- Express Validator

## Features:
1. HTTP Request Methods: Users can perform different HTTP request methods like POST, GET, PATCH, and DELETE to interact with the API endpoints.

2. Postman Integration: The application is compatible with Postman, a popular API client, allowing users to easily run and test API requests.

3. Prisma and PostgreSQL Integration: The API Playground utilizes Prisma as the ORM (Object-Relational Mapping) tool and PostgreSQL as the database backend. This ensures efficient data management and persistence.

4. API Key Protection: To ensure security, the application is protected via API keys. Users need to provide a valid API key to access the API endpoints and perform actions.

5. Express Validator: Input validation is implemented using Express Validator, ensuring that user-provided data meets specified criteria before processing.

## Getting Started:
To set up and run the API Playground locally on your machine, follow these steps:

Clone the Repository:

```bash
git clone <github>
```

Install Dependencies:

```bash
cd kelson
npm install
```
Request API key

Run the Application:

```bash
npm start
```
Access the Playground:
Once the server is running, open your web browser and navigate to http://localhost:3000 to access the API Playground.
