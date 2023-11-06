import { createStore } from "vuex";
export default createStore({
  state: {
    proList: [
      {
        item: "机动车违规停放",
        num: 1314,
        unit: "辆",
      },
      {
        item: "行人识别",
        num: 520,
        unit: "个",
      },
      {
        item: "非机动车违规停放",
        num: 520,
        unit: "辆",
      },
      {
        item: "垃圾丢弃",
        num: 210,
        unit: "个",
      },
      {
        item: "非法小摊摆放",
        num: 1314,
        unit: "个",
      },
      {
        item: "路面坑洼",
        num: 520,
        unit: "个",
      },
      {
        item: "人流量监控",
        num: 520,
        unit: "个",
      },
      {
        item: "道路积水",
        num: 210,
        unit: "个",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
