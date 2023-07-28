import React, { useState } from "react";
import DatePicker from "react-datepicker";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "react-datepicker/dist/react-datepicker.css";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

function FarmerStats() {
  /* Sample Data */
  const data = [
    { name: "Healthy", value: 28 },
    { name: "Blight", value: 12 },
    { name: "Rust", value: 6 },
    { name: "Gray Spot", value: 10 },
  ];
  const chartdata = {
    labels: ["Blight", "Gray Leaf Spot", "Rust","Healthy"],
    datasets: [
      {
        data: [90, 42, 32,128],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56","#55eb34"],
        hoverBackgroundColor: ["#fa4b71", "#2799e6", "#fcbd1c","#2ba611"],
      },
    ],
  };

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const formatDate = (date) => {
    const options = { year: "numeric", month: "short", day: "2-digit" };
    return new Date(date).toLocaleDateString(undefined, options);
  };
  return (
    <div>
      <div className="w-full shadow-md rounded-md bg-lime-600 pb-5 pr-8">
        {/* Header */}
        <div className="flex justify-between px-3 items-center">
          <div>
            <h3 className="pt-5 text-2xl font-medium text-white">Diary</h3>
            <h5 className="text-gray-200 text-sm">
              {" "}
              {selectedDate && <p>{formatDate(selectedDate)}</p>}
            </h5>
          </div>
          <DatePicker
            value="Date"
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            className="btn btn-ghost text-gray-200 text-sm border-none w-28"
            maxDate={new Date()}
          ></DatePicker>
        </div>
        <BarChart width={320} height={250} className="pt-5 mb-5 " data={data}>
          <CartesianGrid strokeDasharray="1" />
          <XAxis dataKey="name" tick={{ fill: "#eef0ed", fontSize: 13 }} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#d0edca" />
        </BarChart>
      </div>
      {/* Pie Chart */}
      <div className="w-full shadow-md rounded-md bg-white mt-10 pb-5">
        {/* Header */}
        <div className="flex justify-between px-3 items-center">
          <div className="w-full">
            <h3 className="pt-5 text-2xl font-medium text-lime-700">
              Total Stats
            </h3>
            <h5 className="text-gray-500 text-sm">
              As of {new Date().toDateString()}
            </h5>
            <div className="w-full h-full flex items-center justify-center">
              <Pie data={chartdata} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmerStats;
