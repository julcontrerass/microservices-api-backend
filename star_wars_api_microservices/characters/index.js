const server = require("./src/server");
const port = 3001;

server.listen(port, () => {
  console.log(`Server listening at ${port} :: Characters Microservice`);
});
