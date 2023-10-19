import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import "react-datepicker/dist/react-datepicker.css";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import axios from "axios";

function ExpertStats() {
  /* Sample Data */
  const [healthy, setHealthy] = useState(0)
  const [blight, setBlight] = useState(0)
  const [rust, setRust] = useState(0)
  const [graySpot, setGraySpot] = useState(0)
  const [other, setOther] = useState(0)
  const [dailyHealthy, setDailyHealthy] = useState(0)
  const [dailyBlight, setDailyBlight] = useState(0)
  const [dailyRust, setDailyRust] = useState(0)
  const [dailyGraySpot, setDailyGraySpot] = useState(0)
  const [dailyOther, setDailyOther] = useState(0)
  const [selectedDate, setSelectedDate] = useState(new Date());

  const axiosInstance = axios.create({
    baseURL: 'https://railway-django-cornleaf-production.up.railway.app/', // Replace with your API base URL
    timeout: 10000, // Set a reasonable timeout value (in milliseconds)
  });

  useEffect(() => {
    console.log('ExpertStats is called')

    const fetchStats = async () => {

      try {
        const user = JSON.parse(localStorage.getItem("user"));

        const response = await axiosInstance.get(
          `stats/total-stats/`
        ); // Replace with your API endpoint

        const data = await response.data;
        setHealthy(data['healthy_count'])
        setBlight(data['blight_count'])
        setRust(data['rust_count'])
        setGraySpot(data['gray_leaf_spot_count'])
        setOther(data['other_count'])


        const dateString = selectedDate;
        const dateObj = new Date(dateString);
        const year = dateObj.getFullYear();
        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
        const day = dateObj.getDate().toString().padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;
        const dailyResponse = await axiosInstance.get(
          `stats/daily-stats/${formattedDate}/`
        );
        const dailyData = dailyResponse.data;
        setDailyHealthy(dailyData['healthy_count'])
        setDailyBlight(dailyData['blight_count'])
        setDailyRust(dailyData['rust_count'])
        setDailyGraySpot(dailyData['gray_leaf_spot_count'])
        setDailyOther(dailyData['other_count'])
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };
    fetchStats();
    
  }, [selectedDate]);




  const data = [
    { name: "Healthy", value: dailyHealthy },
    { name: "Blight", value: dailyBlight },
    { name: "Rust", value: dailyRust },
    { name: "Gray Spot", value: dailyGraySpot},
  ];
  const chartdata = {
    labels: ["Blight", "Gray Leaf Spot", "Rust","Healthy"],
    datasets: [
      {
        data: [blight, graySpot, rust, healthy],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56","#55eb34", "#7F00FF"],
        hoverBackgroundColor: ["#fa4b71", "#2799e6", "#fcbd1c","#2ba611", "#7F00FF"],
      },
    ],
  };


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
              Total Post by Tags
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

export default ExpertStats;
