import { da } from "element-plus/es/locale";
import { io } from "socket.io-client";
const url = "ws://127.0.0.1:5000/video";
let socket = io(url);
(() => {
  socket.on("connect", () => {
    console.log("ok");
    socket.emit("apply");
    socket.on("videoComing", (data) => {
      let s = "";
      for (let i = 0; i < 20; i++) {
        s += data.img[i];
      }
      console.log(s);
    });
  });
  // socket.on("video", (args) => {
  //   console.log("video");
  // });
})();
