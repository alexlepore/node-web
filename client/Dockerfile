###################
### DEVELOPMENT ###
###################

#FROM mhart/alpine-node:12
#RUN mkdir -p /app/client
#WORKDIR /app/client
#COPY package*.json /app/client/
#RUN npm install
#COPY . /app/client/
#CMD ["npm", "start"]

###################
### PRODUCTION ###
###################

#STAGE 1

FROM mhart/alpine-node:12 as build

RUN mkdir -p /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm install
RUN npm install react-scripts@3.3.0 -g

COPY . /app

RUN npm run build

#STAGE 2

FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]