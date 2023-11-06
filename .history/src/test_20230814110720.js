import { io } from "socket.io-client";
const url = "ws://127.0.0.1:11018/show";
let socket = io(url);
(() => {
  socket.on("connect", () => {
    console.log("ok");
    socket.emit("apply", "v_dljsjc");
  });
  socket.on("dataComing", (args) => {
    console.log(args);
  });
  socket.emit("dis", { roomName: "v_dljsjc", id: socket.id });
  socket.disconnect();
})();
