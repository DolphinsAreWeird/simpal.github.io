// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily =
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = "#292b2c";

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "May 1",
      "May 2",
      "May 3",
      "May 4",
      "May 5",
      "May 6",
      "May 7",
      "May 8",
      "May 9",
      "May 10",
      "May 11",
      "May 12",
      "May 13",
    ],
    datasets: [
      {
        label: "Sales in $",
        lineTension: 0.3,
        backgroundColor: "",
        borderColor: "#FF5335",
        pointRadius: 5,
        pointBackgroundColor: "#FF5335",
        pointBorderColor: "#FF5335",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#FF5335",
        pointHitRadius: 50,
        pointBorderWidth: 2,
        data: [100, 301, 262, 184, 183, 287, 313, 333, 258, 242, 327, 320, 385],
      },
    ],
  },
  options: {
    scales: {
      xAxes: [
        {
          time: {
            unit: "date",
          },
          gridLines: {
            display: false,
          },
          ticks: {
            maxTicksLimit: 7,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 400,
            maxTicksLimit: 5,
          },
          gridLines: {
            color: "rgba(0, 0, 0, .125)",
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  },
});
