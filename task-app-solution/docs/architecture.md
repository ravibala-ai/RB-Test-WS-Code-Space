# Architecture Overview

## Project Structure
The task application solution is structured into two main parts: the backend and the frontend. Each part has its own directory containing relevant files and configurations.

```
task-app-solution
├── backend
│   ├── src
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── frontend
│   ├── pages
│   ├── components
│   ├── styles
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── .github
│   └── workflows
├── docs
├── azure
│   ├── api-management
│   └── app-service
├── auth
├── cortex-ai
└── README.md
```

## Backend Architecture
The backend is built using Node.js and TypeScript with Express as the web framework. It follows a modular architecture with the following components:

- **Controllers**: Handle incoming requests and responses. The `taskController.ts` manages task-related operations.
- **Routes**: Define the API endpoints. The `taskRoutes.ts` file sets up the routes for task operations.
- **Services**: Contain business logic. The `taskService.ts` provides methods for adding, fetching, modifying, and removing tasks.
- **Models**: Define the data structure and database interactions. The `taskModel.ts` outlines the task object structure and methods for PostgreSQL.
- **Configuration**: The `database.ts` file manages the connection to the PostgreSQL database.

## Frontend Architecture
The frontend is developed using React and Next.js, providing a seamless user experience. The structure includes:

- **Pages**: The main entry points for the application. `index.tsx` serves as the homepage, while `tasks.tsx` manages task-related views.
- **Components**: Reusable UI components. The `TaskList.tsx` component displays the list of tasks and handles user interactions.
- **Styles**: Global CSS styles are defined in `globals.css` to maintain a consistent look and feel across the application.

## Authentication
The application integrates Auth0 for user authentication, ensuring secure access to the task management features.

## API Management
Azure API Management is utilized to manage and secure the APIs, providing a layer for monitoring and controlling access.

## Deployment
The application is deployed on Azure App Service, with configurations specified in the `deployment-config.json` file. Continuous integration and deployment are managed through GitHub Actions, as defined in the `.github/workflows/ci-cd.yml` file.

## AI Integration
Cortex AI is integrated into the application to enhance task management capabilities, with configurations specified in the `integration-config.json` file.

This architecture provides a robust foundation for building and scaling the task application solution.