FROM node:18-slim

# Set the working directory
WORKDIR /app

# Copy package configuration
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all application files
COPY . .

# Expose Hugging Face default port
EXPOSE 7860

# Set environment variables for production
ENV PORT=7860
ENV NODE_ENV=production

# Start the application
CMD ["node", "app.js"]
