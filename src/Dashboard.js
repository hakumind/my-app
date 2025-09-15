import React from "react";
import { Bar } from "react-chartjs-2";

export default function Dashboard({ data }) {
  const chartData = {
    labels: data.labels,
    datasets: [
      { label: "ログイン回数", data: data.login, backgroundColor: "rgba(75,192,192,0.6)" },
      { label: "日替わりイベント完了", data: data.events, backgroundColor: "rgba(153,102,255,0.6)" }
    ]
  };
  return <Bar data={chartData} options={{ responsive: true }} />;
}