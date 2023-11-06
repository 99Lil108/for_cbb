import { io } from "socket.io-client";
const url = "ws://127.0.0.1:5000/video";
let socket = io(url);
function applyV() {
  if (socket) socket.emit("apply");
}
socket = io("ws://127.0.0.1:11018/video");
socket.on("ready", (_) => {
  console.log("already");
  applyV();
});
let count = 0;
socket.on("videoComing", (data) => {
  if (data.img) {
    count++;
    console.log(count);
  }
});
socket.on("jsonComing", (data) => {
  console.log(data);
});
// setTimeout(() => {
//   socket.disconnect();
// }, 10000);
