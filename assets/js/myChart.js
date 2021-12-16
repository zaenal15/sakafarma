//amper chart
$(document).ready(function(){
  const rand = () =>
    Array.from({ length: 10 }, () => Math.floor(Math.random() * 300));
  
  let data = rand();
  
  function addData(chart, data) {
   chart.data.datasets.forEach(dataset => {
     let data = dataset.data;
     const first = data.shift();
     data.push(first);
     dataset.data = data;
   });   
   chart.update();
  }
  
  var amper = document.getElementById("myChartAmper").getContext("2d");
  var myChart = new Chart(amper, {
    type: "line",
    data: {
      labels: ["00:01 AM", "00:02 AM", "00:03 AM", "00:04 AM", "00:05 AM", "00:06 AM", "00:07 AM", "00:08 AM", "00:09 AM", "00:10 AM"],
      datasets: [
        {
          label: "Power Meter 1",
          data: rand(),
          backgroundColor: ["rgba(252, 114, 34, .15)"],
          borderColor: ["rgba(252, 114, 34, 1)"],
          borderWidth: 1,
          fill: "start"
        }
      ]
    },
    options: {
        animation: {
          duration: 2000
        },
        tooltips: {
          intersect: false,
          backgroundColor: "rgba(113, 88, 203, 1)",
          titleFontSize: 16,
          titleFontStyle: "400",
          titleSpacing: 4,
          titleMarginBottom: 8,
          bodyFontSize:	12,
          bodyFontStyle:	'400',
          bodySpacing: 4,
          xPadding: 8,
          yPadding: 8,
          cornerRadius: 4,
          displayColors: false,
          callbacks: {
            title: function (t, d) {
              const o = d.datasets.map((ds) => ds.data[t[0].index] + "%")
                
              return o.join(', ');
            },
            label: function (t, d) {
              return d.labels[t.index];
            }
          }
        },
      maintainAspectRatio: true,
      spanGaps: false,
      elements: {
        line: {
          tension: 0.3
        }
      },
      plugins: {
        filler: {
          propagate: false
        }
      },
      scales: {
        xAxes: [
          {
            ticks: {
              autoSkip: false,
              maxRotation: 0
            }
          }
        ]
      }
    }
  });
  
  setInterval(() => addData(myChart), 5000);
});

//volt chart
$(document).ready(function(){
  const rand = () =>
    Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
  
  let data = rand();
  
  function addData(chart, data) {
   chart.data.datasets.forEach(dataset => {
     let data = dataset.data;
     const first = data.shift();
     data.push(first);
     dataset.data = data;
   });   
   chart.update();
  }
  
  var volt = document.getElementById("myChartVolt").getContext("2d");
  var myChart = new Chart(volt, {
    type: "line",
    data: {
      labels: ["00:01 AM", "00:02 AM", "00:03 AM", "00:04 AM", "00:05 AM", "00:06 AM", "00:07 AM", "00:08 AM", "00:09 AM", "00:10 AM"],
      datasets: [
        {
          label: "Power Meter 1",
          data: rand(),
          backgroundColor: ["rgba(252, 114, 34, .15)"],
          borderColor: ["rgba(252, 114, 34, 1)"],
          borderWidth: 1,
          fill: "start"
        }
      ]
    },
    options: {
        animation: {
          duration: 2000
        },
        tooltips: {
          intersect: false,
          backgroundColor: "rgba(113, 88, 203, 1)",
          titleFontSize: 16,
          titleFontStyle: "400",
          titleSpacing: 4,
          titleMarginBottom: 8,
          bodyFontSize:	12,
          bodyFontStyle:	'400',
          bodySpacing: 4,
          xPadding: 8,
          yPadding: 8,
          cornerRadius: 4,
          displayColors: false,
          callbacks: {
            title: function (t, d) {
              const o = d.datasets.map((ds) => ds.data[t[0].index] + "%")
                
              return o.join(', ');
            },
            label: function (t, d) {
              return d.labels[t.index];
            }
          }
        },
      maintainAspectRatio: true,
      spanGaps: false,
      elements: {
        line: {
          tension: 0.3
        }
      },
      plugins: {
        filler: {
          propagate: false
        }
      },
      scales: {
        xAxes: [
          {
            ticks: {
              autoSkip: false,
              maxRotation: 0
            }
          }
        ]
      }
    }
  });
  
  setInterval(() => addData(myChart), 5000);
});

//kwh chart
$(document).ready(function(){
  const rand = () =>
    Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
  
  let data = rand();
  
  function addData(chart, data) {
   chart.data.datasets.forEach(dataset => {
     let data = dataset.data;
     const first = data.shift();
     data.push(first);
     dataset.data = data;
   });   
   chart.update();
  }
  
  var kwh = document.getElementById("myChartKwh").getContext("2d");
  var myChart = new Chart(kwh, {
    type: "line",
    data: {
      labels: ["00:01 AM", "00:02 AM", "00:03 AM", "00:04 AM", "00:05 AM", "00:06 AM", "00:07 AM", "00:08 AM", "00:09 AM", "00:10 AM"],
      datasets: [
        {
          label: "Power Meter 1",
          data: rand(),
          backgroundColor: ["rgba(252, 114, 34, .15)"],
          borderColor: ["rgba(252, 114, 34, 1)"],
          borderWidth: 1,
          fill: "start"
        }
      ]
    },
    options: {
        animation: {
          duration: 2000
        },
        tooltips: {
          intersect: false,
          backgroundColor: "rgba(113, 88, 203, 1)",
          titleFontSize: 16,
          titleFontStyle: "400",
          titleSpacing: 4,
          titleMarginBottom: 8,
          bodyFontSize:	12,
          bodyFontStyle:	'400',
          bodySpacing: 4,
          xPadding: 8,
          yPadding: 8,
          cornerRadius: 4,
          displayColors: false,
          callbacks: {
            title: function (t, d) {
              const o = d.datasets.map((ds) => ds.data[t[0].index] + "%")
                
              return o.join(', ');
            },
            label: function (t, d) {
              return d.labels[t.index];
            }
          }
        },
      maintainAspectRatio: true,
      spanGaps: false,
      elements: {
        line: {
          tension: 0.3
        }
      },
      plugins: {
        filler: {
          propagate: false
        }
      },
      scales: {
        xAxes: [
          {
            ticks: {
              autoSkip: false,
              maxRotation: 0
            }
          }
        ]
      }
    }
  });
  
  setInterval(() => addData(myChart), 5000);
});
