import { io } from "socket.io-client";
const url = "ws://127.0.0.1:5000/video";
let socket = io(url);
(() => {
  socket.on("connect", () => {
    console.log("ok");
    socket.emit("register", "dljsjc");
  });
  // socket.on("video", (args) => {
  //   console.log("video");
  // });
  socket.emit("send", {
    roomName: "v_dljsjc",
    data: "1234",
  });
})();
