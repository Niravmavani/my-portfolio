import React from "react";
import "../styles.css";

const Self = () => {
  return (
    <div
      id="self"
      className="px-4 md:px-5 lg:px-8 self sm:pt-40 flex items-center"
    >
      <div className="container self-content">
        <h1 className="text-3xl text-center sm:text-center sm:text-6xl text-white">
          I'm Nirav
        </h1>
        <h3 className="mt-4 text-2xl text-center sm:text-center sm:text-3xl text-white">
          Web Developer
        </h3>
        <h4 className="mt-4 text-2xl text-center sm:text-center sm:text-3xl text-white">
          Software Developer and Programming Enthusiast
        </h4>
        <div className="flex justify-center sm:flex sm:justify-center">
          <a
            href="/NiravMavani.pdf"
            className="w-48 mt-4 text-blue-700 py-2 px-2 rounded-md btn popup"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Self;
