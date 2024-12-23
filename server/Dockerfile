# Use the official Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock)
COPY package.json ./

# Install dependencies
RUN npm install

# Step 4: Copy the rest of the application
COPY . .

# Build
RUN npm run build

# Expose the port the backend app runs on (default for Express)
EXPOSE 5000

# Start the Node.js app
CMD ["npm", "start"]
