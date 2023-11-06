import { io } from "socket.io-client";
const url = "ws://127.0.0.1:5000/video";
let socket = io(url);
(() => {
  socket.on("connect", () => {
    console.log("ok");
    socket1.emit("apply");
    socket1.on("videoComing", (data) => {
      console.log(4);
    });
  });
  // socket.on("video", (args) => {
  //   console.log("video");
  // });
})();
