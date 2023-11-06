import { io } from "socket.io-client";
const url = "ws://127.0.0.1:5000/video";
let socket = io(url);
socket.on("connect", () => {
  console.log("ok");
  socket.emit("apply");
  socket.on("videoComing", (data) => {
    console.log(1);
  });
  socket.on("a", (data) => {
    console.log(1);
  });
});
const url2 = "ws://127.0.0.1:5000/v";
let socket1 = io(url2);
socket1.on("connect", () => {
  console.log("ok");
  socket1.emit("apply");
  socket1.on("videoComing", (data) => {
    console.log(4);
  });
  socket1.on("a", (data) => {
    console.log(1);
  });
});

// socket.emit("dis", "v_dljsjc");
// socket.disconnect();
// })();
