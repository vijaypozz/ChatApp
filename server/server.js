const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const { default: socketIo } = require("./socket.io/socket.io");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */


const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
const user = require("./routes/user.routes")
app.use("/api",user)

app.listen(7000, (error) => {
  if (error) {
    console.log("server not connected");
  } else {
    console.log(`server connected  to localhost ${7000}`);
  }
});
server.listen(3001, () => {
  console.log("SERVER RUNNING");
});

socketIo(io)
