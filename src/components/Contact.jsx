import React from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_8i9o6no";
const TEMPLATE_ID = "template_nval30u";
const PUBLIC_KEY = "N1-eDrxY_i3TfSQuJ";
const Contact = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        alert("Message Sent Successfully");
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong!");
      }
    );
    e.target.reset();
  };
  return (
    <div
      className="px-4 md:px-4 lg:px-8 flex justify-center sm:pt-28 pt-16"
      id="contact"
    >
      <form class="w-full max-w-lg" onSubmit={handleOnSubmit}>
        <h1 className="flex justify-center text-3xl sm:text-6xl pb-8">
          Contact
        </h1>
        <div class="flex flex-wrap sm:-mx-40 -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-4 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2"
              for="grid-first-name"
            >
              Name
            </label>
            <input
              name="full_name"
              id="full_name"
              class=" block w-full   border border-gray-400 rounded py-4 px-4 leading-tight "
              type="text"
              placeholder="Enter Full Name"
              required
            />
          </div>
          <div class="w-full md:w-1/2 px-4">
            <label
              class="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2"
              for="grid-last-name"
            >
              Email
            </label>
            <input
              name="email"
              class="block w-full  border border-gray-400 rounded py-4 px-4 leading-tight "
              id="email"
              type="text"
              placeholder="Enter Email"
              required
            />
          </div>
        </div>
        <div class="flex flex-wrap sm:-mx-40 -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2"
              for="grid-password"
            >
              Message
            </label>
            <textarea
              name="message"
              class=" block w-full border border-gray-400 rounded py-3 px-4 mb-3 "
              id="message"
              type="password"
              placeholder="Enter Message"
              rows={8}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap sm:-mx-40 -mx-3 pl-3">
          <button
            type="submit"
            id="button"
            className="text-blue-700 rounded-md btn popup"
          >
            Contact Me
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
