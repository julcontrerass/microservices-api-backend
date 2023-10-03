FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3002

CMD [ "npm", "start" ]

# docker build -t ifilms .
# docker run -dp 3002:3002 --network=starwars --name=films_ ifilms