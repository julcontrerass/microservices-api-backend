const server = require("./src/server");
const port = 3003;

server.listen(port, () => {
  console.log(`Server listening at ${port} :: Planets Microservice`);
});
