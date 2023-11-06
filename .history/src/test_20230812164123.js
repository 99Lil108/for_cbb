import { io } from "socket.io-client";
const url = "ws://127.0.0.1:11018/show";
let socket = io(url);
(() => {
  socket.on("connect", () => {
    console.log("ok");
    socket.emit("register", "dljsjc");
  });
  socket.on("tablesport", (data) => {
    console.log(data);
  });
})();