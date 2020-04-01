###################
### DEVELOPMENT ###
###################

#FROM node:10-alpine
#RUN npm install -g nodemon
#RUN mkdir -p /app/server
#WORKDIR /app/server
#COPY package*.json /app/server/
#RUN npm install
#COPY . /app/server/
#CMD ["npm", "run", "dev"]

###################
### PRODUCTION ###
###################

FROM node:alpine

RUN npm install -g nodemon

RUN mkdir -p /app/server
WORKDIR /app/server

COPY package*.json /app/server/

# Install dependencies
RUN npm install

# Copy the server files over
COPY . /app/server/

CMD ["npm", "run", "start"]
