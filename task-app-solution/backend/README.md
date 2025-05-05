# Task Application Backend

This is the backend part of the Task Application solution built using Node.js, TypeScript, and Express. The backend is responsible for handling task-related operations and interacting with a PostgreSQL database.

## Project Structure

- **src/**: Contains the source code for the backend application.
  - **app.ts**: Entry point of the application, initializes the Express app and sets up middleware.
  - **controllers/**: Contains controllers that handle incoming requests.
    - **taskController.ts**: Manages task-related requests.
  - **routes/**: Defines the routes for the application.
    - **taskRoutes.ts**: Sets up routes for task operations.
  - **services/**: Contains business logic for the application.
    - **taskService.ts**: Implements methods for task management.
  - **models/**: Defines the data models for the application.
    - **taskModel.ts**: Represents the structure of a task object.
  - **config/**: Configuration files for the application.
    - **database.ts**: Handles database connection.

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd task-app-solution/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Application

To start the backend server, run:
```
npm start
```

The server will be running on `http://localhost:3000`.

### API Endpoints

- **POST /tasks**: Create a new task.
- **GET /tasks**: Retrieve all tasks.
- **PUT /tasks/:id**: Update a task by ID.
- **DELETE /tasks/:id**: Delete a task by ID.

### Database Configuration

Ensure that your PostgreSQL database is set up and the connection details are configured in `src/config/database.ts`.

### License

This project is licensed under the MIT License.