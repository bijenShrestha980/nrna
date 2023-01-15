import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = (props) => {
  return (
    <div
      className={`bg-white py-6 px-6 rounded-xl shadow-md h-fit ${props.className}`}
    >
      <Bar data={data} options={data.options} />
    </div>
  );
};

const labels = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"];

export const data = {
  labels,
  datasets: [
    {
      label: "REJECTED",
      data: [5, 6, 7, 10, 8, 1],
      backgroundColor: "rgb(242 119 128)",
    },
    {
      label: "NEW APPLICATION",
      data: [1, 8, 9, 15, 10, 4],
      backgroundColor: "rgb(87 194 179)",
    },
    {
      label: "PAYMENT PENDING",
      data: [10, 3, 1, 7, 3, 1],
      backgroundColor: "rgb(43 105 179)",
    },
  ],
  options: {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  },
};

export default BarChart;
