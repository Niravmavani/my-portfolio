import React from "react";
const Language = () => {
  return (
    <div id="languages" className="px-4 md:px-50 lg:px-48  sm:pt-28 pt-16">
      <div className=" ">
        <h1 className="sm:text-5xl text-3xl text-center">Languages</h1>
      </div>
      <div className="grid z-10 sm:grid-cols-3 grid-cols-1 mt-9">
        <div className="l_box">
          <div className="img_bg animated">
            <img
              src="https://paras759.github.io/GFG-Portfolio/img/C.png"
              width={"50px"}
              height={"50px"}
              alt=""
            />
          </div>
          <h3>C</h3>
        </div>
        <div className="l_box">
          <div className="img_bg animated">
            <img
              src="https://paras759.github.io/GFG-Portfolio/img/html.png"
              width={"50px"}
              height={"50px"}
              alt=""
            />
          </div>
          <h3>HTML</h3>
        </div>
        <div className="l_box">
          <div className="img_bg animated">
            <img
              src="https://paras759.github.io/GFG-Portfolio/img/css.png"
              alt=""
              width={"50px"}
              height={"50px"}
            />
          </div>
          <h3>CSS</h3>
        </div>
        <div className="l_box">
          <div className="img_bg animated">
            <img
              src="https://paras759.github.io/GFG-Portfolio/img/js.png"
              alt=""
              width={"50px"}
              height={"50px"}
            />
          </div>
          <h3>JAVASCRIPT</h3>
        </div>
        <div className="l_box">
          <div className="img_bg animated">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
              alt=""
              width={"50px"}
              height={"50px"}
            />
          </div>
          <h3>BOOTSTRAP</h3>
        </div>
        <div className="l_box">
          <div className="img_bg animated">
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              alt=""
              width={"50px"}
              height={"50px"}
            />
          </div>
          <h3>REACT</h3>
        </div>
      </div>
    </div>
  );
};

export default Language;
