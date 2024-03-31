# Use official Node.js image as base
FROM node:18

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Build app
RUN npm run build

# Set command to run the app
CMD ["npm", "start"]
