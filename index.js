import server from "./api/server.js";

const port = 3003

server.listen(port, () => console.log(`Server is Running at ${port}`))