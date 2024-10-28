# Dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy application files
COPY . .

RUN npm run build

# Expose the port
EXPOSE 3000

CMD ["node", "dist/index.js"]
