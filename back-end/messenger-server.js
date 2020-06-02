const express = require("express");
const app = express();
const socket = require("socket.io");

const messangerServer = app.listen(3001, () => {
  console.log(`listening on port 3001`);
});

app.use(express.static("front-end"));

const io = socket(messangerServer);

io.on("connection", (socket) => {
  console.log("Made a socket connection", socket.id);
});
