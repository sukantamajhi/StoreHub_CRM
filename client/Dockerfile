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
# Check if the environment is set to 'development' or 'production' and set the correct command
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"production\" ]; then npm start; else npm run dev; fi"]