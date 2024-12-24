# Step 1: Use the official Node.js image as the base image
FROM node:18 AS builder

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Install dependencies
COPY . ./
RUN npm install

# Step 5: Build the Next.js app
RUN npm run build

# Expose the port Next.js will run on
EXPOSE 3000

# Start the application in production mode
CMD ["npm", "start"]
