import { io } from "socket.io-client";
const url = "ws://127.0.0.1:5000/video";
let socket = io(url);
(() => {
  socket.on("connect", () => {
    console.log("ok");
    socket.emit("apply", "v_dljsjc");
  });
  socket.on("dataComing", (args) => {
    console.log(1);
  });
  // socket.emit("dis", "v_dljsjc");
  // socket.disconnect();
})();
