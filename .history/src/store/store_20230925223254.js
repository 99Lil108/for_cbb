import { createStore } from "vuex";

export default createStore({
  namespaced: true,
  state: {
    socket: null,
    proMap: new Map(),
  },
  mutations: {
    initMap(state, _) {
      state.proMap.set("xrsb", {
        item: "行人识别",
        num: 0,
        unit: "个",
      });
      state.proMap.set("jdcwgtf", {
        item: "机动车违规停放",
        num: 0,
        unit: "辆",
      });
      state.proMap.set("fjdcwgtf", {
        item: "非机动车违规停放",
        num: 0,
        unit: "辆",
      });
      state.proMap.set("ljdq", {
        item: "垃圾丢弃",
        num: 0,
        unit: "个",
      });
      state.proMap.set("ffxtbf", {
        item: "非法小摊摆放",
        num: 1314,
        unit: "个",
      });
      state.proMap.set("lmkw", {
        item: "路面坑洼",
        num: 520,
        unit: "个",
      });
      state.proMap.set("person_head", {
        item: "人流量监控",
        num: 0,
        unit: "个",
      });
      state.proMap.set("dljs", {
        item: "道路积水",
        num: 0,
        unit: "个",
      });
    },
    setsocket(state, socketio) {
      state.socket = socketio;
      state.socket.on("ready", (_) => {
        console.log("Server already!");
        state.socket.emit("apply");
      });
      state.socket.on("jsonComing", (json) => {});
    },
  },
  actions: {},
});

// import jdcwt_xrsb from "./modules/jdcwt_xrsb";
// import dljsjc from "./modules/dljsjc";
// import fjdcwgtf from "./modules/fjdcwgtf";
// import ljdq from "./modules/ljdq";
// import lmkwjc from "./modules/lmkwjc";
// import rlljc from "./modules/rlljc";
// import ffxtbf from "./modules/ffxtbf";

// modules: {
//   jdcwt_xrsb,
//   dljsjc,
//   ffxtbf,
//   rlljc,
//   lmkwjc,
//   ljdq,
//   fjdcwgtf,
// },

// [
//   {
//     item: "机动车违规停放",
//     num: 1314,
//     unit: "辆",
//   },
//   {
//     item: "行人识别",
//     num: 520,
//     unit: "个",
//   },
//   {
//     item: "非机动车违规停放",
//     num: 520,
//     unit: "辆",
//   },
//   {
//     item: "垃圾丢弃",
//     num: 210,
//     unit: "个",
//   },
//   {
//     item: "非法小摊摆放",
//     num: 1314,
//     unit: "个",
//   },
//   {
//     item: "路面坑洼",
//     num: 520,
//     unit: "个",
//   },
//   {
//     item: "人流量监控",
//     num: 520,
//     unit: "个",
//   },
//   {
//     item: "道路积水",
//     num: 210,
//     unit: "个",
//   },
// ],
