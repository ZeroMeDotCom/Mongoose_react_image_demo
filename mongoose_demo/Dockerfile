# Use Node.js image for building React app
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy frontend files
COPY ./package*.json ./
RUN npm install
COPY . .

# Build the React app
RUN npm run build

# Use Nginx to serve the static files
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose frontend port
EXPOSE 3000