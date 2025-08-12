# Udyam Registration Form Replica

This project is a full-stack web application that replicates the first two steps of the official Indian Udyam registration portal. It was built as a full-stack development assignment, demonstrating skills in frontend development, backend API creation, database management, and testing.

## Features

* **Responsive UI**: A mobile-first, fully responsive user interface built with Next.js and React.
* **Dynamic Form**: The form fields are rendered dynamically based on a JSON schema.
* **Real-Time Validation**: Instant, client-side validation for fields like Aadhaar and PAN using `react-hook-form`.
* **Backend API**: A robust backend API built with Express.js to handle form submissions.
* **Database Integration**: Form submissions are validated and stored in a PostgreSQL database using the Prisma ORM.
* **Full-Stack Testing**: Includes unit tests for both the frontend components (with Jest and React Testing Library) and the backend API.

## Tech Stack

* **Frontend**: Next.js, React, TypeScript, Axios, React Hook Form
* **Backend**: Node.js, Express.js, Prisma ORM
* **Database**: PostgreSQL
* **Testing**: Jest, React Testing Library, Supertest

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

* Node.js (v18 or later)
* Git
* A PostgreSQL database connection string

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/udyam-project.git](https://github.com/your-username/udyam-project.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd udyam-project
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Set up environment variables:**
    * Create a file named `.env` in the root of the project.
    * Add your database connection string to it:
        ```env
        DATABASE_URL="postgresql://user:password@host:port/database"
        ```

5.  **Run the database migration:**
    * This command will create the necessary tables in your database based on the Prisma schema.
        ```bash
        npx prisma migrate dev
        ```

6.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This application is deployed on Vercel and is fully functional.

**Live URL**: [Add your Vercel deployment link here]
