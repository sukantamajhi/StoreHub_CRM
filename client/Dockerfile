# Step 1: Use the official Node.js image as the base image
FROM node:18 AS builder

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of the application
COPY . .

# Step 5: Build the Next.js app
RUN npm run build

# Step 6: Start a production server
FROM node:18

WORKDIR /app

# Copy the built Next.js app and node_modules
COPY --from=builder /app ./

# Install production dependencies
RUN npm install --production

# Expose the port Next.js will run on
EXPOSE 3000

# Start the application in production mode
CMD ["npm", "start"]
