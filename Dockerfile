FROM node:alpine
RUN apk add nodejs npm
WORKDIR /app
COPY . /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 300
CMD ["npm", "start"]