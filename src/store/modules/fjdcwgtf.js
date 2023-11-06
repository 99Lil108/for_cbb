export default {
  namespaced: true,
  state: () => ({
    itemName: "非机动车违规停放",
    data: {
      backgroundColor: 'transparent',
      xAxis: {
    type: 'category',
    data: ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00'],
    boundaryGap: false,
    axisLabel: {
          show: true,
        },
        axisLine: {
          show: false,
        }, axisTick: {
          show: false,
        }
  },
  yAxis: {
    type: 'value',
    splitLine: {
      show:false
    }, axisLabel: {
          show: true,
    }
  },
  series: [
    {
      data: [25, 51, 65, 48, 45, 50, 53, 49, 45],
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
        left: '10%',
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
  mutations: {},
  actions: {},
};