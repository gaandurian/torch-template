export const PIE_CHART = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
  datasets: [
    {
      data: [15, 15, 7, 7, 5],
      backgroundColor: [
        "rgba(255, 99, 132,.44)",
        "rgba(54, 162, 235,.44)",
        "rgba(255, 206, 86,.44)",
        "rgba(75, 192, 192,.44)",
        "rgba(153, 102, 255,.44)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const LINE_CHART = {
  labels: [1500, 1600, 1700, 1750, 1950, 1999, 2050],
  datasets: [
    {
      data: [635, 1000, 1200, 1402, 1600, 1800, 2000],
      label: "Asia",
      borderColor: "#8e5ea2",
      fill: false,
    },
    {
      data: [2000, 2300, 2600, 2900, 3200, 3500, 3800],
      label: "Africa",
      borderColor: "#3cba9f",
      fill: false,
    },
    {
      data: [40, 20, 2000, 16, 24, 38, 74, 167, 508, 784],
      label: "Latin America",
      borderColor: "#e8c3b9",
      fill: false,
    },
    {
      data: [1000, 1700, 2300 , 2000, 1700, 1400, 1100],
      label: "North America",
      borderColor: "#c45850",
      fill: false,
    },
  ],
};

export const BAR_CHART = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Members",
      data: [15, 15, 7, 7, 5, 1],
      backgroundColor: [
        "rgba(255, 99, 132, 0.44)",
        "rgba(54, 162, 235, 0.44)",
        "rgba(255, 206, 86, 0.44)",
        "rgba(75, 192, 192, 0.44)",
        "rgba(153, 102, 255, 0.44)",
        "rgba(255, 159, 64, 0.44)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};


export const BAR_CHART_OPTIONS = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
          gridLines: { drawOnChartArea: false },
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
          },
        },
      ],
    },
  };

  export const LINE_CHART_OPTIONS = {
    scales: {
      yAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
          },
        },
      ],
    },
      elements: {
        point: {
          radius: 0
        },
      }
  
  }