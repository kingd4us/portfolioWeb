# Dockerfile

# Stage 1: Build the React application
# Use an official Node.js runtime as a parent image
FROM node:20-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application source code to the working directory
COPY . .

# Build the application for production
# This command creates a 'dist' folder with the compiled assets.
RUN npm run build

# Stage 2: Serve the application with Nginx
# Use a lightweight Nginx image
FROM nginx:1.25-alpine

# Copy the build output from the 'build' stage to the Nginx public HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the custom Nginx configuration file
# This file will configure Nginx to work correctly with a single-page application.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the outside world
EXPOSE 80

# Command to run Nginx in the foreground when the container starts
CMD ["nginx", "-g", "daemon off;"]
