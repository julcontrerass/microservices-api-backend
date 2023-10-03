FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "npm", "start" ]

# docker build -t icharacters .
# docker run -dp 3001:3001 --network=starwars --name=characters_ icharacters
