FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3003

CMD [ "npm", "start" ]

# docker build -t iplanets .
# docker run -dp 3003:3003 --network=starwars --name=planets_ iplanets