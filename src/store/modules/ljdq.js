export default {
  namespaced: true,
  state: () => ({
    itemName: "垃圾丢弃",
    data: {
      title: {
        text: '占比情况',
        right: '17%',
        top:'43%',
        textStyle: {
                    fontSize: 12,
                    color: "#fff",
                    fontWeight: "bolder"
                }
      },
      backgroundColor: 'transparent',
      legend: {
      show:false
      },
  tooltip: {
    trigger: 'item',
    formatter: '{c} ({d}%)'
  },
    xAxis: {
      type: 'category',
      nameTextStyle: {
        fontSize: 15
      }
    },
    yAxis: {
      type: 'value',
      nameTextStyle: {
        fontSize: 15
      },
          splitLine: {
      show:false
    }, axisLabel: {
          show: true,
    }
    },
    grid: {
      left: '10%',
      right: '50%',
      top: '15%',
      bottom:'15%'
    },
    dataset: {
      source: [
        ['7:00', 23],
        ['9:00', 45],
        ['11:00', 34],
        ['13:00', 56],
        ['15:00', 32],
        ['17:00', 24],
        ['19:00', 67]
      ]
    },
    series: [
      {
        type: 'pie',
        center: ['75%', '50%'],
        radius: ['40%', '70%'],
        encode: { itemName: 0, value: 1 },
        label: { show: false, position: 'center' },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
      },
      {
        type: 'bar',
        encode: { x: 0, y: 1 },
        itemStyle: {
          color: val => {
            let t = +val.data[0].split(':')[0];
            if (t > 18)
              return 'rgb(0,139,210)'
            else if (t > 12)
              return 'rgb(198,156,255)'
            else if (t >5)
              return 'rgb(65,133,240)'
            return 'pink';
          }
        }
      }
    ]
  
    },
  }),
  mutations: {},
  actions: {},
};