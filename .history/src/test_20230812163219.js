import { io } from "socket.io-client";
const url = "ws://127.0.0.1:11018/show";
let socket = io(url);
(() => {
  socket.on("connect", () => {
    console.log("ok");
    socket.emit("apply", "v_" + "dljsjc");
  });
  socket.on("tablesport", (data) => {
    console.log(data);
  });
  socket.on("disconnect", () => {
    socket.emit();
  });
})();
