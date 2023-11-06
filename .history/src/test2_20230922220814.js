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
socket.on("videoComing", (data) => {
  const binaryData = btoa(
    String.fromCharCode.apply(null, new Uint8Array(data.img))
  );
  const imageDataURL = "data:image/jpeg;base64," + binaryData;
  console.log(imageDataURL);
});
setTimeout(() => {
  socket.disconnect();
}, 10000);
