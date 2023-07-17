import React from "react";
import BG from "./Assets/background.png";
import Healthy from "./Assets/healthy.jpg";
import Rust from "./Assets/rust.JPG";
import GrayLeaf from "./Assets/grayleaf.JPG"
import Blight from "./Assets/Blight.jpg"

function Home() {
  return (
    <>
      <div className="px-5 lg:px-64 bg-gradient-to-br from-lime-100 to-amber-200 h-screen flex flex-col lg:flex-row py-10 justify-center">
        <div className="flex flex-col gap-2 w-full lg:w-1/2 text-center lg:text-left justify-center">
          <h3 className="text-2xl lg:text-3xl font-semibold">
            DIAGNOSE AND DETECT
          </h3>
          <h3 className="text-4xl lg:text-6xl font-semibold">
            Protect Your Corn Crop from Devastating Diseases
          </h3>
          <a
            className="btn btn-primary h-20 w-1/2 text-lg my-10 rounded-full text-white mx-auto lg:mx-0"
            href="/classify"
          >
            Classify
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
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
            </span>
          </a>
        </div>
        <div className="w-full lg:w-1/2 hidden lg:flex mt-24">
          <img
            className="w-full h-full object-cover"
            src={BG}
            alt="Background for cornleaf"
          />
        </div>
      </div>
      <div className="flex flex-col min-h-screen bg-amber-200 px-5 lg:px-64 py-20 items-center">
        <h1 className="text-3xl font-semibold">Corn Diseases</h1>
        <div className="min-h-screen w-full mt-10">
          {/* Start of healthy div */}
          <div className="h-fit lg:h-1/2 w-full flex flex-col lg:flex-row">
            {/* Div for text of healthy */}
            <div className="w-full lg:w-1/2 h-full">
              <h1 className="text-2xl font-semibold">Healthy</h1>
              <img
                className="w-1/2 object-contain rounded-lg mx-auto visible lg:hidden my-5"
                src={Healthy}
                alt="Background for cornleaf"
              />
              <p className="text-justify mt-2">
                A <span className="font-bold">healthy</span> cornleaf can be
                identified by its vibrant green color, which indicates its
                vitality and optimal chlorophyll production. The leaf has an
                elongated shape with a pointed tip and smooth edges, exhibiting
                a uniform structure. The surface of a healthy cornleaf feels
                smooth to the touch, without any visible lesions, bumps, or
                deformities. The veins and midrib of a healthy cornleaf are
                well-developed and serve as the transportation system for water,
                nutrients, and sugars within the leaf. They are prominent and
                form a network throughout the leaf, ensuring efficient nutrient
                distribution. A healthy cornleaf maintains turgidity, meaning it
                is firm and upright, demonstrating that it is well-hydrated and
                capable of performing its photosynthetic functions effectively.
                It should not appear wilted, flaccid, or drooping. When
                observing a healthy cornleaf, there should be no signs of
                disease or pest damage. It should be free from spots, lesions,
                discoloration, or abnormal growth patterns. Additionally, there
                should be no evidence of chewing or insect presence, indicating
                the absence of pest damage.
              </p>
            </div>
            {/* Div for photo for healthy */}
            <div className="w-1/2 h-full px-20 py-10 hidden lg:flex">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={Healthy}
                alt="Background for cornleaf"
              />
            </div>
          </div>
          {/* Start of Rust div */}
          <div className="h-fit lg:h-1/2 w-full flex flex-col lg:flex-row mt-5 lg:mt-0">
            {/* Div for rust image */}
            <div className="w-full lg:w-1/2 h-full px-20 py-10 hidden lg:flex">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={Rust}
                alt="Background for cornleaf"
              />
            </div>
            {/* Div for rust text */}
            <div className="w-full lg:w-1/2 h-full lg:px-20 lg:py-10">
              <h1 className="text-2xl font-semibold">Common Rust</h1>
              <img
                className="w-1/2 object-contain rounded-lg mx-auto visible lg:hidden my-5"
                src={Rust}
                alt="Background for cornleaf"
              />
              <p className="text-justify mt-2">
                <span className="font-bold">Common rust</span> is a fungal
                disease that affects corn plants worldwide. It appears as small,
                circular to oval-shaped reddish-brown pustules on the upper
                surface of cornleaves. The pustules feel rough to the touch and
                can coalesce into larger patches. Common rust thrives in warm,
                humid conditions but typically does not cause severe yield
                losses. Fungicides and resistant corn varieties are used for
                management. Early detection and prompt action are key to
                minimizing its impact.
              </p>
            </div>
          </div>
        </div>
        <div className="min-h-screen w-full mt-10">
          {/* Start of Blight div */}
          <div className="h-fit lg:h-1/2 w-full flex flex-col lg:flex-row">
            {/* Div for text of Blight */}
            <div className="w-full lg:w-1/2 h-full">
              <h1 className="text-2xl font-semibold">Blight</h1>
              <img
                className="w-1/2 object-contain rounded-lg mx-auto visible lg:hidden my-5"
                src={Blight}
                alt="Background for cornleaf"
              />
              <p className="text-justify mt-2">
                Corn leaf <span className="font-bold">Blight</span> refers to
                fungal or bacterial diseases that damage corn plants, causing
                lesions and reducing yield. Types include northern corn leaf
                blight (NCLB), southern corn leaf blight (SCLB), and gray leaf
                spot (GLS). Symptoms vary but commonly manifest as irregular
                spots on leaves. Untreated blight leads to defoliation and
                weakened plant defenses. Farmers combat it through crop
                rotation, using resistant/tolerant varieties, and applying
                fungicides. Identifying and managing blight promptly is
                essential to minimize its impact. By understanding blight types,
                symptoms, and implementing appropriate strategies, farmers can
                protect their corn crops and mitigate yield losses caused by
                this destructive disease.
              </p>
            </div>
            {/* Div for photo for Blight */}
            <div className="w-1/2 h-full px-20 py-10 hidden lg:flex">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={Blight}
                alt="Background for cornleaf"
              />
            </div>
          </div>
          {/* Start of Gray Leaf Spot div */}
          <div className="h-fit lg:h-1/2 w-full flex flex-col lg:flex-row mt-5 lg:mt-0">
            {/* Div for Gray Leaf Spot image */}
            <div className="w-full lg:w-1/2 h-full px-20 py-10 hidden lg:flex">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={GrayLeaf}
                alt="Background for cornleaf"
              />
            </div>
            {/* Div for Gray Leaf Spot text */}
            <div className="w-full lg:w-1/2 h-full lg:px-20 lg:py-10">
              <h1 className="text-2xl font-semibold">Gray Leaf Spot</h1>
              <img
                className="w-1/2 object-contain rounded-lg mx-auto visible lg:hidden my-5"
                src={GrayLeaf}
                alt="Background for cornleaf"
              />
              <p className="text-justify mt-2">
                <span className="font-bold">Gray leaf spot</span> is a fungal disease that affects
                corn plants. It is caused by the pathogen Cercospora
                zeae-maydis. Gray leaf spot is characterized by the presence of
                small, rectangular, grayish lesions on the leaves, which later
                develop into long, narrow tan or brown streaks. The disease
                primarily affects the lower leaves and can spread rapidly under
                warm, humid conditions. If left unmanaged, gray leaf spot can
                lead to defoliation, reduced photosynthesis, and decreased
                yield. Farmers manage gray leaf spot through cultural practices,
                such as crop rotation, and may also employ fungicides to control
                its spread and minimize crop losses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
