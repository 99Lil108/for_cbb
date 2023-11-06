import { io } from "socket.io-client";
const url = "ws://127.0.0.1:5000/video";
let socket = io(url);
() => {
  socket.on("connect", () => {
    console.log("ok");
  });
  // socket.on("videoComing", (args) => {
  //   console.log(args);
};
// socket.emit("dis", "v_dljsjc");
// socket.disconnect();
// })();
