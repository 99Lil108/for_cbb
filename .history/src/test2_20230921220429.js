import { io } from "socket.io-client";
const url = "ws://127.0.0.1:5000/video";
let socket = io(url);
function applyV() {
  if (socket) socket.emit("apply");
}
socket = io("ws://127.0.0.1:5000/video");
socket.on("videoComing", ({ img, errorExist, isEnding }) => {
  data.isLoading = false;
  if (errorExist) data.videoError = true;
  if (isEnding) data.restart = true;
  else imageElement.value.src = `data:image/png;base64,${img}`;
});
socket.on("ready", (_) => {
  data.isLoading = true;
  applyV();
});
