import React, { useState, useEffect } from "react";
import FeedNavbar from "./Components/FeedNavbar";
import FeedSideBar from "./Components/FeedSideBar";
import DatePicker from "react-datepicker";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import "react-datepicker/dist/react-datepicker.css";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import axios from "axios";

function ExpertStatsPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const data = [
    { name: "Healthy", value: 10 },
    { name: "Blight", value: 23 },
    { name: "Rust", value: 15 },
    { name: "Gray Spot", value: 25 },
    { name: "Other", value: 18 },
  ];
  const chartdata = {
    labels: ["Blight", "Gray Leaf Spot", "Rust", "Healthy", "Other"],
    datasets: [
      {
        data: [230, 451, 182, 623, 498],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#55eb34",
          "#7F00FF",
        ],
        hoverBackgroundColor: [
          "#fa4b71",
          "#2799e6",
          "#fcbd1c",
          "#2ba611",
          "#7F00FF",
        ],
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
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));
  const API_BASE_URL = 'https://railway-django-cornleaf-production.up.railway.app'

  useEffect(() => {
    document.title = "Feed-Cornleaf Disease Classifier";
    
    const fetchPosts = async () => {

      try {
        const postsResponse  = await axios.get(`${API_BASE_URL}/post/api2/posts/`); 
        const postsResponseResults = await postsResponse.data['results'].slice(0,2);
        console.log(postsResponseResults)
        
        setPosts(postsResponseResults); // Update the state with the fetched posts
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-base-100">
      <FeedNavbar />
      <div className="w-full h-full px-5 lg:px-10 py-5 flex gap-10">
        <div className="hidden lg:block w-80 h-full sticky top-28 left-0">
          <FeedSideBar />
        </div>
        {/* Feed div */}
        <div className="w-full lg:w-1/2">
          <h1 className="py-3 text-2xl font-semibold">Stats</h1>
          {/* Barchart and pie chart */}
          <div className="w-full flex flex-col lg:flex-row gap-5">
            {/* Barchart */}
            <div className="w-full lg:w-1/2 bg-lime-700 rounded-md">
              <div className="flex justify-between px-3 items-center">
                <div>
                  <h3 className="pt-5 text-2xl font-medium text-white">
                    Daily Post Tag
                  </h3>
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
              <BarChart
                width={340}
                height={250}
                className="lg:pt-16"
                data={data}
              >
                <CartesianGrid strokeDasharray="1" />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "#eef0ed", fontSize: 13 }}
                />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#d0edca" />
              </BarChart>
            </div>
            {/* Pie Chart */}
            <div className="w-full lg:w-1/2 shadow-md rounded-md bg-base-100 mt-10 lg:mt-0 pb-5">
              {/* Header */}
              <div className="flex justify-between px-3 items-center">
                <div className="w-full">
                  <h3 className="pt-5 text-2xl font-medium text-lime-700">
                    Total Post Tags
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
          {/* Table */}
          <h3 className="pt-5 font-semibold text-lg">Recent Posts</h3>
          <div className="overflow-x-auto pt-5">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Name</th>
                  <th>User Type</th>
                  <th>Tags</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {posts.map((post) => (
                  <tr key={post.id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={post.author_image}
                            alt="User Avatar"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{post.author_name}</div>
                        <div className="text-sm opacity-50">{post.date_posted}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {post.author_type}
                    </span>
                  </td>
                  <td>{post.tags}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">Comment</button>
                  </th>
                </tr>
                ))}

                
              </tbody>
              {/* foot */}
              <tfoot>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>User Type</th>
                  <th>Tags</th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertStatsPage;
