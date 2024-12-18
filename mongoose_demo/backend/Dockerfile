# Use Node.js image for the backend
FROM node:18

# Set working directory
WORKDIR /app

# Copy backend files
COPY ./package*.json ./
RUN npm install
COPY . .

# Expose backend port
EXPOSE 3001

# Start backend service
CMD ["node", "index.js"]