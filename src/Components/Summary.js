import React, { useState, useEffect } from "react";

function Summary({ combinedArray }) {
  const [summary, setSummary] = useState({
    Total: 0,
    Healthy: 0,
    "Common Rust": 0,
    "Gray Leaf Spot": 0,
    Blight: 0,
  });

  useEffect(() => {
    const newSummary = {
      Total: 0,
      Healthy: 0,
      "Common Rust": 0,
      "Gray Leaf Spot": 0,
      Blight: 0,
    };
    combinedArray.forEach((item) => {
      newSummary.Total++;
      if (item.Label === "Healthy") {
        newSummary.Healthy++;
      } else if (item.Label === "Common Rust") {
        newSummary["Common Rust"]++;
      } else if (item.Label === "Gray Leaf Spot") {
        newSummary["Gray Leaf Spot"]++;
      } else {
        newSummary.Blight++;
      }
    });
    setSummary(newSummary);
  }, [combinedArray]);

  return (
    <>
      <div className="w-full h-fit text-center py-5 text-lg">
        <h3>Total: {summary.Total}</h3>
        <h3>Healthy: {summary.Healthy}</h3>
        <h3>Common Rust: {summary["Common Rust"]}</h3>
        <h3>Gray Leaf Spot: {summary["Gray Leaf Spot"]}</h3>
        <h3>Blight: {summary.Blight}</h3>
      </div>
    </>
  );
}

export default Summary;
