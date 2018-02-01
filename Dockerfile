FROM node:carbon
# App directory
WORKDIR /usr/src/app
# This is required so that the application dependencies can be installed
COPY package*.json ./
RUN npm install
# Some node files have been included in the .dockerignore fil
COPY . .
EXPOSE 8080
CMD ["npm","start"]
