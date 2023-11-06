const jdcwt_xrsb = {
  namespaced: true,
  state: () => ({
    itemName: "机动车违规停放及行人识别",
    data: {
      backgroundColor: 'transparent',
    xAxis: {
    type: 'category',
      data: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
          axisTick: {
        show: false,
      },
  alignWithLabel: true
      },
  yAxis: {
    type: 'value',
    splitLine: {
      show:false
    },
    axisLine: {
      show:true
    }
  },
  series: [
    {
      data: [25,51,65,48,45,50,53,49,45,50,60,23,35,48,43],
      type: 'line',
      smooth: true,
      lineStyle: {
        color: 'rgb(0,137,210)',
        width: 3,
        type: 'dashed'
      },
      itemStyle: {
        normal: {
          color:'#fff'
        }
      }
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
      }
    },
  }),
  mutations: {},
  actions: {},
};
export default jdcwt_xrsb;
