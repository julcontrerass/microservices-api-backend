const Server = require("./src/server");

const PORT = 8002

Server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})