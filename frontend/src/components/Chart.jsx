import React from "react";
import { Line } from "react-chartjs-2";

const Chart = () => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Weight",
        fill: false,
        lineTension: 0.4,
        backgroundColor: "#27e77f",
        borderColor: "#27e77f",
        borderWidth: 2,
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      },
    ],
  };

  return (
    <div className="graph">
      <Line
        data={data}
        options={{
          title: {
            display: true,
            text: "Exercise Progress",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
          responsive: true,
          maintainAspectRatio: true,
          showLine: true,
        }}
      />
    </div>
  );
};

export default Chart;
