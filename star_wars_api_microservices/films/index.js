const server = require("./src/server");
const port = 3002;

server.listen(port, () => {
  console.log(`Server listening at ${port} :: Films Microservice`);
});
