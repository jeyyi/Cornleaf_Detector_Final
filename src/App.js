import React, { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";

function App() {
  const labels = ["Blight", "Common Rust", "Gray Leaf Spot", "Healthy"];
  const [modelLoaded, setModelLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [model, setModel] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    async function loadModel() {
      try {
        const loadedModel = await tf.loadLayersModel(
          "https://2023-lamba-bucket.s3.ap-southeast-1.amazonaws.com/Inception/Inception/model.json",
          { onProgress: (fraction) => setLoadingProgress(fraction) }
        );
        setModel(loadedModel);
        setModelLoaded(true);
      } catch (error) {
        console.error("Failed to load the model:", error);
      }
    }
    loadModel();
  }, []);

  async function loadXception() {
    try {
      setModelLoaded(false);
      const xception = await tf.loadLayersModel(
        "https://2023-lamba-bucket.s3.ap-southeast-1.amazonaws.com/Xception/Xception/model.json",
        { onProgress: (fraction) => setLoadingProgress(fraction) }
      );
      setModel(xception);
      setModelLoaded(true);
    } catch (error) {
      console.error("Faled to load model: ", error);
    }
  }

  const handleImageUpload = async (event) => {
    const imageFile = event.target.files[0];
    if (imageFile) {
      const imageElement = document.createElement("img");
      const reader = new FileReader();

      reader.onloadend = () => {
        imageElement.src = reader.result;
        imageElement.onload = async () => {
          const tfImage = tf.browser.fromPixels(imageElement).toFloat();
          const resizedImage = tf.image.resizeBilinear(tfImage, [180, 180]);
          const normalizedImage = resizedImage.div(255.0);
          const batchedImage = normalizedImage.expandDims(0);
          const prediction = await model.predict(batchedImage).data();
          const predictedClassIndex = tf.argMax(prediction).dataSync()[0];
          const result = labels[predictedClassIndex];
          setPrediction(result);
        };
      };

      reader.readAsDataURL(imageFile);
      setSelectedImage(URL.createObjectURL(imageFile));
    } else {
      console.log("No image selected.");
    }
  };

  if (!modelLoaded) {
    return (
      <div className="flex flex-col items-center h-screen bg-gradient-to-bl from-lime-100 to-amber-200 justify-center">
        <p className="text-2xl font-thin">
          Loading model<span className="loading loading-ring loading-md"></span>
        </p>
        <p className="text-lg font-light">
          Progress:{" "}
          <span className="font-bold">
            {Math.round(loadingProgress * 100)}%
          </span>
        </p>
        <progress
          className="progress progress-primary w-56"
          value={Math.round(loadingProgress * 100)}
          max="100"
        ></progress>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center h-screen bg-gradient-to-bl from-lime-100 to-amber-200 justify-center">
      <h1 className="text-3xl font-semibold">Classify Disease</h1>
      <div className="flex flex-col lg:flex-row gap-3 mt-5 items-center">
        <h3>Select Model:</h3>
        <select className="select select-bordered select-primary bg-primary">
          <option disabled>Pick one</option>
          <option>Inception</option>
          <option>Xception</option>
          <option>InceptionResnet</option>
        </select>
      </div>
      <div className="w-64 h-64 lg:w-96 lg:h-96 border-green-800 border mt-5">
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Selected"
            className="object-cover h-full w-full"
          />
        )}
      </div>
      {prediction && (
        <p className="text-xl mt-5">
          Prediction:<span className="font-bold text-2xl">{" "+ prediction}</span>
        </p>
      )}
      <label htmlFor="file" className="btn btn-primary btn-wide mt-10">
        Upload Image
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
            />
          </svg>
        </span>
      </label>
      <input
        id="file"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4 hidden"
      />
      {/* {selectedImage && (
        <img src={selectedImage} alt="Selected" className="mb-4" />
      )} */}
    </div>
  );
}

export default App;
