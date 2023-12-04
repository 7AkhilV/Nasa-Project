# Nasa-Project

visit site: https://nasa-project-88tv.onrender.com/

## Overview

NASA-PROJECT is a Space Mission Control System, using Kepler and SpaceX API data. It features CRUD operations, CORS middleware, CI/CD pipeline, and client-side routing. The system is tested using Jest and Supertest, with logging via Morgan.

## Features

- **CRUD Operations:** Manage mission data with ease.
- **CORS Middleware:** Secure communication between client and server.
- **CI/CD Pipeline:** Automated testing, building, and deployment with GitHub Actions.
- **Client-Side Routing:** Enhanced user experience with smooth navigation.

## Testing

- **Jest:** JavaScript testing framework for code correctness.
- **Supertest:** HTTP assertions for API testing.

## Logging and Monitoring

- **Request Logging:** Implemented with Morgan for effective monitoring.

## Technologies Used

- **Node.js, Express.js:** Server-side runtime and web framework.
- **MongoDB, Mongoose:** NoSQL database and ODM library.
- **React.js:** JavaScript library for user interfaces.
- **Docker:** Containerization for seamless deployment.
- **GitHub Actions:** CI/CD automation.

## Get Started

1. Ensure you have Node.js installed.

2. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/NASA-PROJECT.git
   cd NASA-PROJECT


3. Create a free [Mongo Atlas](https://www.mongodb.com/atlas/database) database online or start a local MongoDB database.
4. Create a `server/.env` file with a `MONGO_URL` property set to your MongoDB connection string.
5. In the terminal, run: `npm install`
   
## Running the Project

1. In the terminal, run: `npm run deploy`
2. Browse to the mission control frontend at [localhost:8000](http://localhost:8000) and schedule an interstellar launch!

## Docker

1. Ensure you have the latest version of Docker installed
2. Run `docker build -t nasa-project .`
3. Run `docker run -it -p 8000:8000 nasa-project`

## Running the Tests

To run any automated tests, run `npm test`. This will: 
* Run all the client-side tests: `npm test --prefix client`
* Run all the server-side tests: `npm test --prefix server` 
