
const charts = document.querySelectorAll(".chart");

charts.forEach(function (chart) {
  var ctx = chart.getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan 9", "Jan 12", "Jan 15", "Jan 18", "Jan 21", "Jan 24"],
      datasets: [
        {
          label: "Visitors",
          data: [2, 1, 3, 4, 3, 6],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
          ],
          borderWidth: 1,
          borderWidth: 2,
          tension: 0.2,
          pointRadius: 1,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
        },
        x: {
          grid: {
            display: false,
          },
        }
      },
    },
  });
});

$(document).ready(function () {
  $(".data-table").each(function (_, table) {
    $(table).DataTable();
  });
});

const chartx = document.querySelectorAll(".chart2");

chartx.forEach(function (chart2) {
  var ctx = chart2.getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan 9", "Jan 12", "Jan 15", "Jan 18", "Jan 21", "Jan 24"],
      datasets: [
        {
          label: "Visitors",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 2,
          tension: 0.4,
          pointRadius: 0,
          pointHoverRadius: 0,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            display: false,
          },
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
        },
        x: {
          ticks: {
            display: false,
          },
          grid: {
            display: false,
          },
          border: {
            display: false,
          }
        }
      },
    },
  });
});

$(document).ready(function () {
  $(".data-table").each(function (_, table) {
    $(table).DataTable();
  });
});

const charty = document.querySelectorAll(".chart3");

charty.forEach(function (chart3) {
  var ctx = chart3.getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Jan 9", "Jan 12", "Jan 15", "Jan 18", "Jan 21"],
      datasets: [
        {
          label: "Visitors",
          data: [12, 19, 3, 5, 2],
          backgroundColor: [
            "rgba(255, 255, 255, 255)",
          ],
          borderColor: [
            "rgba(255, 255, 255, 255)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            display: false,
          },
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
        },
        x: {
          ticks: {
            display: false,
          },
          grid: {
            display: false,
          },
          border: {
            display: false,
          }
        }
      },
    },
  });
});

$(document).ready(function () {
  $(".data-table").each(function (_, table) {
    $(table).DataTable();
  });
});