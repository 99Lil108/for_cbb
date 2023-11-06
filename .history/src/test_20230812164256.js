import { io } from "socket.io-client";
const url = "ws://127.0.0.1:11018/register";
let socket = io(url);
(() => {
  socket.on("connect", () => {
    console.log("ok");
    socket.emit("register", "dljsjc");
  });
})();
