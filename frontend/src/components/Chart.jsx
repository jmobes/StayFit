import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Spinner from "./Spinner";

const Chart = (props) => {
  const [chartData, setChartData] = useState();
  const [error, setError] = useState();

  const chart = () => {
    const userId = props.exercise.user_id;
    const exerciseId = props.exercise.exercise_id;
    const weights = [];
    const dates = [];

    setChartData(null);
    setError(null);

    fetch(`http://localhost:5000/api/progress/${userId}/${exerciseId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.map((stats) => {
          const date = new Date(stats.date_end);
          const formattedDate =
            date.getMonth() +
            1 +
            "-" +
            date.getDate() +
            "-" +
            date.getFullYear();
          dates.push(formattedDate);
          weights.push(stats.max);
        });
        setChartData({
          labels: dates,
          datasets: [
            {
              label: "weight",
              data: weights,
              backgroundColor: "#27e77f",
              borderColor: "#27e77f",
              borderWidth: 2,
              fill: false,
            },
          ],
        });
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    chart();
    console.log("CHART DATA: ", chartData);
  }, [props.exercise]);

  return (
    <div className="graph">
      {chartData && (
        <Line
          data={chartData}
          options={{
            title: {
              display: true,
              text: `${props.exercise.name.toUpperCase()}`,
              fontSize: 20,
            },
            responsive: true,
            maintainAspectRatio: false,
            showLine: true,
          }}
        />
      )}
    </div>
  );
};

export default Chart;
