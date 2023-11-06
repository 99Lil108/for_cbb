import { io } from "socket.io-client";

function applyV() {
  if (socket) socket.emit("apply");
}

const socket = io("ws://127.0.0.1:11018/video");
socket.on("ready", (_) => {
  console.log("already");
  applyV();
  socket.emit("videoTransfer");
});
let count = 0;
socket.on("videoComing", (data) => {
  if (data.img) {
    count++;
    console.log(count);
  }
});
socket.on("jsonComing", (data) => {
  // console.log(data);
});
// setTimeout(() => {
//   socket.disconnect();
// }, 10000);
