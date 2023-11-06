import { io } from "socket.io-client";
const url = "ws://127.0.0.1:5000/video";
let socket = io(url);
(() => {
  socket.on("connect", () => {
    console.log("ok");
    socket.emit("apply");
    socket.on("videoComing", (data) => {
      for (let i = 0; i < 20; i++) {
        console.log(data[i]);
      }
    });
  });
  // socket.on("video", (args) => {
  //   console.log("video");
  // });
})();
