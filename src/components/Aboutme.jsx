import React from "react";

const Aboutme = () => {
  return (
    <div
      id="about"
      className="px-4 md:px-5 lg:px-8 sm:pt-28 pt-8 pb-24 flex flex-wrap items-center"
    >
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 md:mb-0 ">
        <img
          src="https://paras759.github.io/GFG-Portfolio/img/profile.jpg"
          alt=""
          className="md:w-3/4 max-w-full h-auto object-cover w-2/2 h-96"
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 sm:text-left text-center">
        <h2 className="text-3xl sm:my-4 sm:text-6xl">About Me</h2>
        <h4 className="my-4 sm:text-xl text-xl">
          Hi, My name is Nirav Mavani!
        </h4>
        <p className="sm:mt-6 sm:text-lg text-lg sm:w-10/12">
          I am a B.C.A Final Year Student of Atmanand Saraswati College,
          Pursuing My Degree in B.C.A . I have a Interest in Problems Solving
          and Finding new and Dynamic Ideas.
        </p>
        <p className="sm:mt-6 mt-5 sm:text-lg text-lg sm:w-10/12">
          I am a Front-end Web Developer. I can provide clean code and pixel
          perfect design.
        </p>
        <div className="mt-6 flex justify-center sm:flex sm:justify-start">
          <a
            href="#contact"
            className="w-2/2 text-blue-700 rounded-md btn popup"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
