# Use an official Node.js runtime as a parent image
FROM node:18 AS build

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle app source inside the Docker image 
COPY . .

# Build the app
RUN npm run build

# Stage 2 - the production environment
FROM nginx:alpine

# Copy build files from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]