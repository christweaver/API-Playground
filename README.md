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
- HTTP Request Methods: Users can perform different HTTP request methods like POST, GET, PATCH, and DELETE to interact with the API endpoints.

- Postman Integration: The application is compatible with Postman, a popular API client, allowing users to easily run and test API requests.

- Prisma and PostgreSQL Integration: The API Playground utilizes Prisma as the ORM (Object-Relational Mapping) tool and PostgreSQL as the database backend. This ensures efficient data management and persistence.

- API Key Protection: To ensure security, the application is protected via API keys. Users need to provide a valid API key to access the API endpoints and perform actions.

- Express Validator: Input validation is implemented using Express Validator, ensuring that user-provided data meets specified criteria before processing.

## Usage
1. Request API Key
   
2. Use Postman or any API client to send requests to the provided endpoints.

3. Experiment with different HTTP methods (POST, GET, PATCH, DELETE) and observe the corresponding responses.

4. Ensure that input data provided in requests adhere to the specified validation rules enforced by Express Validator.

## Installation:
To set up and run the API Playground locally on your machine, follow these steps:

1. Clone the Repository:

```bash
git clone https://github.com/christweaver/kelson-app.git
```

2. Install Dependencies:

```bash
cd kelson
npm install
```
3. Request API keys

4. Run the Application:

```bash
npm start
```
5. Access the Playground:
Once the server is running, open your web browser and navigate to http://localhost:3000 to access the API Playground.

6. Run Postman to make HTTP requests


##
Thank you for using the API Playground! We hope this tool helps you gain a better understanding of API concepts and practices. Happy exploring! 🚀🔑
