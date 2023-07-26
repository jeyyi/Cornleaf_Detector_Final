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

function FarmerStats() {
  /* Sample Data */
  const data = [
    { name: "Healthy", value: 28 },
    { name: "Blight", value: 12 },
    { name: "Rust", value: 6 },
    { name: "Gray Spot", value: 10 },
    
  ];
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const formatDate = (date) => {
    const options = { year: "numeric", month: "short", day: "2-digit" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const calendarIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
      <path
        fillRule="evenodd"
        d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
  return (
    <>
      <div className="w-full shadow-md rounded-md bg-lime-600">
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
        <BarChart width={380} height={250} className="pt-5 mb-5 " data={data}>
          <CartesianGrid strokeDasharray="1" />
          <XAxis dataKey="name" tick={{ fill: "#eef0ed", fontSize:13 }} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#d0edca" />
        </BarChart>
      </div>
    </>
  );
}

export default FarmerStats;
