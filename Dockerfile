# Tells the Docker which base image to start.
FROM node:12-alpine

# Adds files from the host file system into the Docker container.  
ADD . /app

# Sets the current working directory for subsequent instructions
WORKDIR /app

RUN npm install 
RUN npm install -g serve
RUN npm run build 

#expose a port to allow external access
EXPOSE 5000

# Start main application
CMD ["serve", "-s", "build"]