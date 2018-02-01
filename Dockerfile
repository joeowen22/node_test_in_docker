# Copy the NodeJS carbon image
FROM node:carbon
# Directory where the app will run from
WORKDIR /usr/src/app
# This is required so that the application dependencies can be installed
COPY package*.json ./
RUN npm install
# Some node files have been included in the .dockerignore file that do not need adding
# Copy over the app files
COPY . .
# Expose port 8080 in the container
EXPOSE 8080
# Start the nodejs server
CMD ["npm","start"]
