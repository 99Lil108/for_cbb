import { createStore } from "vuex";
import jdcwt_xrsb from "./modules/jdcwt_xrsb";
import dljsjc from "./modules/dljsjc";
import fjdcwgtf from "./modules/fjdcwgtf";
import ljdq from "./modules/ljdq";
import lmkwjc from "./modules/lmkwjc";
import rlljc from "./modules/rlljc";
import ffxtbf from "./modules/ffxtbf";

export default createStore({
  namespaced: true,
  modules: {
    jdcwt_xrsb,
    dljsjc,
    ffxtbf,
    rlljc,
    lmkwjc,
    ljdq,
    fjdcwgtf,
  },
  state: {
    socket: null,
    proObj: {},
  },
  mutations: {
    initProObj(state, _) {
      state.proObj = {
        xrsb: {
          item: "行人识别",
          num: 0,
          unit: "个",
        },
        jdcwgtf: {
          item: "机动车违规停放",
          num: 0,
          unit: "辆",
        },
        fjdcwgtf: {
          item: "非机动车违规停放",
          num: 0,
          unit: "辆",
        },
        ljdq: {
          item: "垃圾丢弃",
          num: 0,
          unit: "个",
        },
        ffxtbf: {
          item: "非法小摊摆放",
          num: 0,
          unit: "个",
        },
        lmkw: {
          item: "路面坑洼",
          num: 0,
          unit: "个",
        },
        person_head: {
          item: "人流量监控",
          num: 0,
          unit: "个",
        },
        dljs: {
          item: "道路积水",
          num: 0,
          unit: "个",
        },
      };
    },
    setsocket(state, socketio) {
      state.socket = socketio;
      state.socket.on("ready", (_) => {
        console.log("Server already!");
        state.socket.emit("apply");
      });
      state.socket.on("jsonComing", (json) => {
        Object.entries(json).forEach(function ([key, value]) {
          state.proObj[key].num = value;
        });
      });
    },
  },
  actions: {},
});
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
