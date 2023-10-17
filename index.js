import server from "./api/server.js";
import path from 'path'

const __dirname = path.resolve();

server.use(express.static(path.join(__dirname, '/client/dist')))

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

const port = 3003

server.listen(port, () => console.log(`Server is Running at ${port}`))