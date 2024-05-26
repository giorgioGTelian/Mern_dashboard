# Dockerfile

# Use an official Node.js runtime as the base image
FROM node:21.6.1

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . ./

# Expose port 3000 for the application
EXPOSE 3000

# Define the command to run the application
CMD [ "npm", "start" ]