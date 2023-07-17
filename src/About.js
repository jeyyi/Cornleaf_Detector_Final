import React from "react";
import BGabout from "./Assets/bg_about.png";
function About() {
  return (
    <>
      <div className="flex w-full min-h-screen bg-amber-200 gap-2">
        <div className="w-1/2 h-full justify-end items-center hidden lg:flex">
          <img
            src={BGabout}
            alt="background for about us"
            className="w-1/2 h-1/2 object-cover"
          />
        </div>
        <div className="flex flex-col w-full lg:w-1/2 px-5 gap-5 h-full pt-20 justify-center lg:pr-64 lg:px-0 text-justify">
          <h1 className="text-5xl font-semibold">About</h1>
          <p>
            Welcome to Cornleaf Disease Detector, your go-to resource for
            identifying diseases on your corn crops. This website is powered by
            multistage transfer learning algorithms, including Xception,
            Inception, and InceptionResNet, all trained to assist individual
            farmers like you. We understand the challenges you face when it
            comes to identifying and managing diseases affecting your corn
            plants. That's why we have developed this user-friendly platform to
            provide you with accurate and timely diagnoses, helping you make
            informed decisions and effectively protect your crops. At Cornleaf
            Disease Detector, we believe in the transformative power of
            technology in agriculture. I have meticulously trained the algorithm
            using a vast dataset of corn diseases, enabling it to recognize and
            classify various common and rare ailments that can affect your corn
            plants. By leveraging the strength of artificial intelligence and
            transfer learning, I have achieved exceptional accuracy in disease
            identification, making this platform a valuable tool for farmers
            like yourself. I am committed to simplifying the process of disease
            identification for you, regardless of your technical expertise. The
            intuitive user interface allows you to easily upload images of your
            corn leaves and receive real-time analysis. Once the images are
            processed, my advanced algorithm quickly analyzes them, comparing
            them to a comprehensive database of corn diseases. Within seconds,
            you will receive a detailed diagnosis along with recommended steps
            for disease management and prevention. In addition to providing
            accurate disease identification, I strive to empower you with
            knowledge and resources to combat corn diseases effectively. The
            website features an extensive library of educational materials,
            including articles, guides, and videos, covering various aspects of
            corn health and disease management. I am dedicated to supporting you
            by equipping you with the tools and information necessary to
            maximize your crop yields and protect your livelihood.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
