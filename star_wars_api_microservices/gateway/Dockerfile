FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]

# docker build -t igateway .
# docker run -dp 3000:3000 --network=starwars --name=gateway_ igateway
