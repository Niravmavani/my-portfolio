import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="px-4 md:px-5 lg:px-8 sm:pt-12 pt-2">
      <div className="text-center mt-28">
        <h2 className="sm:text-6xl text-3xl mb-5">My Projects</h2>
        <h4 className="sm:text-3xl text-xl">Some Of My Distinguished Works</h4>
      </div>
      <div className="boxes grid sm:grid-cols-3 gap-y-8 grid-cols-1 justify-items-center items-center pt-9">
        <div class="w-full max-w-sm bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
          <img
            class="p-8 rounded-lg"
            src="https://paras759.github.io/GFG-Portfolio/img/lib1.jpg"
            alt="product image"
          />

          <div class="px-5 pb-5">
            <h5 class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              Web App development
            </h5>

            <div class="flex items-center justify-between sm:text-2xl text-lg">
              <span class="text-2xl  font-bold text-gray-900 dark:text-white">
                Library Management System
              </span>
            </div>
          </div>
        </div>
        <div class="w-full max-w-sm bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
          <img
            class="p-8 rounded-lg"
            src="	https://paras759.github.io/GFG-Portfolio/img/weather.jpg"
            alt="product image"
          />

          <div class="px-5 pb-5">
            <h5 class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              Web App development
            </h5>

            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-gray-900 dark:text-white">
                Weather Forecasting App
              </span>
            </div>
          </div>
        </div>
        <div class="w-full max-w-sm bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
          <img
            class="p-8 rounded-lg"
            src="https://paras759.github.io/GFG-Portfolio/img/price.jpg"
            alt="product image"
          />

          <div class="px-5 pb-5">
            <h5 class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              Web App development
            </h5>

            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-gray-900 dark:text-white">
                Boston House Price Prediction
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
