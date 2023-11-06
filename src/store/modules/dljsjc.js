export default {
  namespaced: true,
  state: () => ({
    itemName: "道路积水检测",
    data: {
      backgroundColor: 'transparent',
      xAxis: {
        show:false,
    type: 'category',
    // data: ,
    boundaryGap: false,
  },
  yAxis: {
    type: 'value',
    show:false,
  },
  series: [
    {
      // data: ,
      type: 'line',
      smooth: true,
      symbol:'none',
      lineStyle: {
        color: 'rgb(0,137,210)',
        width:2
      },
      areaStyle: {
              //覆盖区域的渐变色
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgb(34,84,154)", 
                    },
                    {
                      offset: 1,
                      color: "rgb(4,49,103)", 
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
            },
        }],
      grid: {
        top: '10%',
        bottom: '15%',
        left: '6%',
        right:'6%'
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(26,87,179,.7)',
        borderWidth:'0',
        textStyle: {
          color:'#fff'
        },
      },
    },
  }),
  mutations: {
    update: (state, data) => {
      state.data.xAxis.data = data.x;
      state.data.series[0].data = data.value;
    }
  },
  actions: {},
};