FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8004

CMD [ "npm", "start" ]

# docker build -t idatabase .
# docker run -p 8004:8004 idatabase

# Whit NetWork
# docker run -dp 8004:8004 --network=starwars --name=database_ idatabase