# Task Application Solution

This project is a task management application built using a modern tech stack. It consists of a backend service developed with Node.js, TypeScript, and Express, and a frontend application built with React and Next.js. The application uses PostgreSQL as the database and incorporates various integrations for authentication and API management.

## Project Structure

The project is organized into the following main directories:

- **backend**: Contains the server-side code, including the API and database interactions.
- **frontend**: Contains the client-side code, including the user interface and components.
- **.github**: Contains GitHub Actions workflows for CI/CD.
- **docs**: Contains documentation related to the architecture and design of the application.
- **azure**: Contains configuration files for Azure API Management and Azure App Service.
- **auth**: Contains configuration for Auth0 authentication.
- **cortex-ai**: Contains configuration for integrating Cortex AI.

## Technologies Used

- **Backend**: Node.js, TypeScript, Express, PostgreSQL
- **Frontend**: React, Next.js
- **Authentication**: Auth0
- **API Management**: Azure API Management
- **Deployment**: Azure App Service
- **CI/CD**: GitHub Actions

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL
- Git

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```

3. Navigate to the frontend directory and install dependencies:
   ```
   cd ../frontend
   npm install
   ```

### Running the Application

- To start the backend server:
  ```
  cd backend
  npm start
  ```

- To start the frontend application:
  ```
  cd frontend
  npm run dev
  ```

### Deployment

The application can be deployed to Azure App Service using the configuration files provided in the `azure` directory. Ensure that the necessary environment variables are set for database connections and authentication.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.