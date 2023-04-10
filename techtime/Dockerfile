# Use a Node.js base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire app directory
COPY . .

# Expose the port that the Vite server will run on
EXPOSE 5173

# Set the default command to run the Vite development server
CMD ["npm", "run", "dev", "--", "--host"]