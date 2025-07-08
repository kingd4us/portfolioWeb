# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Running the Project Locally

There are two ways to run this project locally: using npm or using Docker.

### Using npm (for development)

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

### Using Docker (for production simulation)

This method will build the application and run it in a production-like environment using Docker and Nginx.

**Prerequisites:**
* Docker must be installed on your machine.

**Option 1: Using Docker Compose (Recommended)**

1.  **Build and run the container:**
    ```bash
    docker-compose up -d
    ```
2.  **Access the application:**
    Open your browser and navigate to `http://localhost:8080`.

3.  **To stop the application:**
    ```bash
    docker-compose down
    ```

**Option 2: Using Docker commands**

1.  **Build the Docker image:**
    ```bash
    docker build -t portfolio-web .
    ```
2.  **Run the Docker container:**
    ```bash
    docker run -p 8080:80 --name portfolio-web portfolio-web
    ```
3.  **Access the application:**
    Open your browser and navigate to `http://localhost:8080`.

4.  **To stop and remove the container:**
    ```bash
    docker stop portfolio-web
    docker rm portfolio-web
    ```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
