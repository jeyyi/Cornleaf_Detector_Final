import React, { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import { Link } from "react-router-dom";
import axios from "axios";
import ImageCarousel from "./Components/ImageCarousel";
import Summary from "./Components/Summary";
function App() {
  const labels = ["Blight", "Common Rust", "Gray Leaf Spot", "Healthy"];
  const [modelLoaded, setModelLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [lstPrediction, setLstPrediction] = useState([]);
  const [combinedArray, setCombinedArray] = useState();
  const [imgUrls, setImgUrls] = useState([]);
  const [model, setModel] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [modelName, setModelName] = useState("Inception");
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
  useEffect(() => {
    const combined = imgUrls.map((url, index) => ({
      Url: url,
      Label: lstPrediction[index],
    }));
    setCombinedArray(combined);
  }, [imgUrls, lstPrediction]);
  const changeModel = () => {
    const selectbox = document.getElementById("select_model");
    const selectedValue = selectbox.options[selectbox.selectedIndex].value;
    setModelName(selectedValue);
    window.my_modal_4.showModal();
  };

  /* async function loadXception() {
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
  } */

  const handleImageUpload = async (event) => {
    const imageFile = event.target.files[0];
    if (imageFile) {
      const imageElement = document.createElement("img");
      const reader = new FileReader();

      reader.onloadend = () => {
        window.my_modal_5.showModal();
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

          const closebutton = document.getElementById("closeButton");
          closebutton.click();
        };
      };

      reader.readAsDataURL(imageFile);
      setSelectedImage(URL.createObjectURL(imageFile));
    } else {
      console.log("No image selected.");
    }
  };

  const handleImageMultiple = async (event) => {
    setLstPrediction([]);
    setImgUrls([]);
    const imageFile = event.target.files[0];
    if (imageFile) {
      const formData = new FormData();
      formData.append("file", imageFile);
      try {
        window.my_modal_5.showModal();
        const response = await axios.post(
          "https://railway-django-cornleaf-production.up.railway.app/stats/multi-detect/",
          formData
        );
        const predictions = [];
        // Iterate through the image URLs
        for (const imageUrl of response.data["files"]) {
          const imageElement = document.createElement("img");
          imageElement.src = imageUrl;
          imageElement.crossOrigin = "anonymous";

          //Wait for the image to load
          await new Promise((resolve) => {
            imageElement.onload = resolve;
          });
          const tfImage = tf.browser.fromPixels(imageElement).toFloat();
          const resizedImage = tf.image.resizeBilinear(tfImage, [180, 180]);
          const normalizedImage = resizedImage.div(255.0);
          const batchedImage = normalizedImage.expandDims(0);
          const prediction = await model.predict(batchedImage).data();
          const predictedClassIndex = tf.argMax(prediction).dataSync()[0];
          const result = labels[predictedClassIndex];
          predictions.push(result);
        }
        predictions[predictions.length - 1] = "Annotated image";
        console.log(predictions);
        setLstPrediction(predictions);
        setImgUrls(response.data["files"]);
        const closebutton = document.getElementById("closeButton");
        closebutton.click();
        window.my_modal_3.showModal();
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("No image selected");
    }
  };

  if (!modelLoaded) {
    return (
      <div className="flex flex-col items-center h-screen bg-gradient-to-bl from-lime-100 to-amber-200 justify-center">
        <p className="text-2xl font-thin">
          <span className="loading loading-ring loading-md"></span>Loading
          models
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
      {/* Predicting modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box bg-primary">
          <h3 className="font-bold text-lg">Please wait</h3>
          <p className="py-4 items-center">
            Predicting disease...
            <span className="loading loading-spinner loading-lg"></span>
          </p>
          <div className="modal-action hidden">
            <button className="btn" id="closeButton">
              Close
            </button>
          </div>
        </form>
      </dialog>
      {/* Switch Model Modal */}
      <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box bg-primary">
          <h3 className="font-bold text-lg">You are currently using</h3>
          <p className="py-4 items-center">{modelName}</p>
          <div className="modal-action">
            <button
              className="btn bg-gray-700 text-white border-none"
              id="closeButton"
            >
              Close
            </button>
          </div>
        </form>
      </dialog>
      {/* Modal for Multi Leaves */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-semibold text-xl">Results</h3>
          <div className="mt-10">
            <div className="text-center text-lg font-semibold">Summary</div>
            <Summary combinedArray={combinedArray}/>
            <ImageCarousel items={combinedArray} />
            <button className="btn w-full mx-auto my-5 btn-primary">Share</button>
          </div>
        </div>
      </dialog>
      <h1 className="text-3xl font-semibold">Classify Disease</h1>
      <div className="flex flex-col lg:flex-row gap-3 mt-5 items-center">
        <h3>Select Model:</h3>
        <select
          className="select select-bordered select-primary bg-primary"
          id="select_model"
          onChange={changeModel}
        >
          <option disabled>Pick one</option>
          <option value="Inception">Inception</option>
          <option value="Xception">Xception</option>
          <option value="InceptionResnet">InceptionResnet</option>
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
        <div className="flex items-end">
          <p className="text-xl mt-5">
            Prediction:
            <span className="font-bold text-2xl">{" " + prediction}</span>
          </p>
          {/* Share button */}
          <Link
            className="tooltip ml-2 cursor-pointer"
            data-tip="Share"
            to={{
              pathname: "../create/post",
              state: { picture: "selectedImage", tags: "prediction" },
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path
                fillRule="evenodd"
                d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      )}
      <label htmlFor="file" className="btn btn-primary btn-wide mt-10">
        Single Leaf
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
      <label htmlFor="fileMultiple" className="btn btn-primary btn-wide mt-3">
        Multi-leaves
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
      {/* Change onchange function to latest api */}
      <input
        id="fileMultiple"
        type="file"
        accept="image/*"
        onChange={handleImageMultiple}
        className="mb-4 hidden"
      />
    </div>
  );
}

export default App;
