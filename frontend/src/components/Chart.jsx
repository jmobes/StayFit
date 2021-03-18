import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const Chart = (props) => {
  const [label, setLabel] = useState([]);
  const [points, setPoints] = useState([]);
  const [info, setInfo] = useState();
  const [error, setError] = useState();

  useEffect(async () => {
    const userId = props.exercise.user_id;
    const exerciseId = props.exercise.exercise_id;
    const exercise = props.exercise.name;

    try {
      const result = await fetch(
        `http://localhost:5000/api/progress/${userId}/${exerciseId}`
      );
      const res = await result.json();
      if (res.length <= 1)
        throw new Error("Exercise needs at least two data points");

      const dates = [];
      const data_points = [];
      res.map((stats) => {
        const date = new Date(stats.date_end);
        const formattedDate =
          date.getFullYear() +
          "-" +
          (date.getMonth() + 1) +
          "-" +
          date.getDate();
        dates.push(formattedDate);
        data_points.push(stats.max);
      });
      setLabel([...label, dates]);
      setPoints([...points, data_points]);
      const info = {
        labels: label,
        datasets: [
          {
            label: "Weight",
            fill: false,
            lineTension: 0.4,
            backgroundColor: "#27e77f",
            borderColor: "#27e77f",
            borderWidth: 2,
            data: points,
          },
        ],
      };
      setInfo(info);
    } catch (ex) {
      setError(ex.message);
      console.error(ex.message);
    }
  }, []);

  return (
    <div className="graph">
      {label && (
        <Line
          data={info}
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
            maintainAspectRatio: false,
            showLine: true,
          }}
        />
      )}
    </div>
  );
};

export default Chart;
