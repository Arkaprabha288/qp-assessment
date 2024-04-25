# Use an official Node runtime as the parent image
FROM node:latest

# Set the working directory in the container to /app
WORKDIR ./

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Make the application's port available to the outside world
EXPOSE 3000

# Run the application when the container launches
CMD npm run start
