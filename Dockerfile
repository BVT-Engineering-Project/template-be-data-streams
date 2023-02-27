FROM node:14-alpine

RUN mkdir -p /usr/src/nodeflux-dashboard-api
RUN mkdir -p /usr/src/nodeflux-dashboard-api/data

WORKDIR /usr/src/nodeflux-dashboard-api

COPY package*.json ./
RUN npm config set package-lock false
RUN npm install
RUN npm audit fix

COPY . .

EXPOSE 5002
CMD ["npm", "run", "start"]
