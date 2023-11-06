export default {
  namespaced: true,
  state: () => ({
      itemName: "非法小摊摆放",
    data: {
      grid: {
        top: '14%',
        bottom: '15%',
        left: '10%',
        right:'8%'
      },
      backgroundColor: 'transparent',
        tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
  },
  yAxis: {
    type: 'value',
    axisLabel: {
    },
    axisPointer: {
      snap: true
    },
      splitLine: {
      show:false
    },
    axisLine: {
      show:true
    }
  },
  visualMap: {
    show: false,
    dimension: 0,
    pieces: [
      {
        lte: 6,
        color: 'rgb(62,128,233)'
      },
      {
        gt: 6,
        lte: 8,
        color: 'rgb(23,202,240)'
      },
      {
        gt: 8,
        lte: 14,
        color: 'rgb(62,128,233)'
      },
      {
        gt: 14,
        lte: 17,
        color: 'rgb(23,202,240)'
      },
      {
        gt: 17,
        color: 'rgb(62,128,233)'
      }
    ]
  },
  series: [
    {
      name: '摊位数',
      type: 'line',
      smooth: true,
      // prettier-ignore
      data: [4, 3, 5, 7, 3, 3, 6, 5, 4, 4, 4, 5, 3, 5, 6, 8, 9, 7, 6, 4],
      markArea: {
        itemStyle: {
          color: 'rgba(65,133,240, 0.4)'
        },
        data: [
          [
            {
              name: '早高峰',
              xAxis: '07:30'
            },
            {
              xAxis: '10:00'
            }
          ],
          [
            {
              name: '晚高峰',
              xAxis: '17:30'
            },
            {
              xAxis: '21:15'
            }
          ]
        ]
      }
    }
  ]
    },
  }),
  mutations: {},
  actions: {},
};