---
sidebar_position: 2
---

# Backend setup

This is the backend component of the project.

## Install Dependencies
   * Navigate to your project's root directory in your terminal.
   * Run the following command to install required packages:
     ```bash
     npm install
     ```

## Environment Setup
   * Create or edit `.env` files:
     * Create `development.env` and `production.env` files in your project's root directory.
     * Add the following environment variables to both files, replacing placeholder values with your actual credentials:
       ```
       DATABASE_URL="postgresql://your_database_url"
       JWT_ACCESS_TOKEN_SECRET="your_secret_key"
       JWT_REFRESH_TOKEN_SECRET="your_secret_key"
       ```
   * Add the `DATABASE_URL` value to the `package.json` file under the `env` object.

## Pull Database Schema
   * Run the appropriate command based on your operating system:
     * **Windows:**
       ```bash
       npm run prisma-pull-db-dev-w
       ```
     * **Linux:**
       ```bash
       npm run prisma-pull-db-dev
       ```
   * A `schema` folder will be created if the database connection is successful.

## Initial Database Setup
   * Create necessary tables and records:
     * **Windows:**
       ```bash
       npm run db-setup-w
       ```
     * **Linux:**
       ```bash
       npm run db-setup
       ```

## Generate Prisma Client
   * Generate TypeScript types for your database models:
     ```bash
     npx prisma generate
     ```

## Start Prisma Studio (Optional)
   * View and manage your database visually:
     * **Windows:**
       ```bash
       npm run prisma-studio-dev-w
       ```
     * **Linux:**
       ```bash
       npm run prisma-studio-dev
       ```

:::warning 
Replace the placeholder values in the `.env` files with your actual database URL and secret keys.
:::
 
## Additional Considerations
* Consider using a `.gitignore` file to prevent sensitive information like secret keys from being committed to version control.
* For production environments, use environment variables or a secrets manager to securely store sensitive information.

By following these steps, you should have a working backend environment ready for development.


## Scripts


The following npm scripts are available for managing the backend:

-   start: Starts the backend server in production mode using `nodemon`.
-   dev: Starts the backend server in development mode using `nodemon`.
-   db-setup: Sets up the database for development environment using `node`.
-   serve: Starts the backend server without `nodemon`.
-   migrate: Runs database migrations using `knex`.
-   rollback: Rolls back the latest database migration using `knex`.
-   pm2: Starts the backend server in production mode using `pm2`.
-   pm2-restart: Restarts the backend server using `pm2`.
-   prisma-studio: Starts Prisma Studio to interact with the database in production mode.
-   prisma-studio-dev: Starts Prisma Studio to interact with the database in development mode.
-   prisma-db-pull: Pulls the database schema from the production database using Prisma.
-   prisma-db-pull-dev: Pulls the database schema from the development database using Prisma.
-   prisma-migrate-dev: Applies database migrations in development environment using Prisma.