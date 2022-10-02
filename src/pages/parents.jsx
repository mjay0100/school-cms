import React, { useEffect } from "react";
import image1 from "../assets/images/Group 166.png";
import { useNavigate } from "react-router-dom";

const parents = () => {
  let navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f0f0f0] py-3">
      <div className=" bg-[#ffffff] rounded-md w-[85%] md:w-[75%] my-6 mx-auto py-8">
        <div className="w-1/2 mx-auto">
          <div className="mb-6">
            <img src={image1} className="mx-auto " />
          </div>
          {/* <h3 className=" text-6xl text-orange-500 text-center">2</h3> */}

          <h2 className="text-2xl font-bold text-center p-5">
            Parent Information
          </h2>

          <form action="" className="md:w-[75%] mx-auto my-4">
            {/* <div className="p-2 grid gap-4 capitalize">
              <label htmlFor="name">Number of ward to enroll:</label>
              <input
                className="rounded-[1.5rem] border-2 p-2 border-slate-200 border-solid mb-3 focus:ring-blue-600 "
                type="number"
                id="name"
                placeholder="1"
              />
            </div> */}
            <p className="text-xl my-5 font-bold">Parent or Guardian details</p>
            <div className="p-2 grid gap-4">
              <label htmlFor="first-name">First-Name:</label>
              <input
                className="rounded-[1.5rem] border-2 p-2 border-slate-200 border-solid mb-3 focus:ring-blue-600 "
                t
                ype="text"
                id="first-name"
                placeholder="First-name"
              />
            </div>
            <div className="p-2 grid gap-4">
              <label htmlFor="last-name">Last-Name:</label>
              <input
                className="rounded-[1.5rem] border-2 p-2 border-slate-200 border-solid mb-3 focus:ring-blue-600 "
                type="text"
                id="last-name"
                placeholder="Last-name"
              />
            </div>

            <div className="p-2 grid gap-4">
              <label htmlFor="email">Email:</label>
              <input
                className="rounded-[1.5rem] border-2 p-2 border-slate-200 border-solid mb-3 focus:ring-blue-600 "
                type="Email"
                id="email"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="p-2 grid gap-4">
              <label htmlFor="number">Tel:</label>
              <input
                className="rounded-[1.5rem] border-2 p-2 border-slate-200 border-solid mb-3 focus:ring-blue-600 "
                type="phonenumber"
                id="number"
                placeholder="+234 904 6565 678"
              />
            </div>

            <div className="text-center flex gap-3 py-5">
              <button
                className="px-9 py-2 my-2 border-orange-500 border-2 border-solid bg-orange-500 text-white roundedsm w-min mx-auto hover:bg-orange-400 transition-all duration-300"
                onClick={() => {
                  navigate("/enrollment");
                }}
              >
                Back
              </button>
              <button
                className="px-9 py-2 my-2 border-orange-500 border-2 border-solid bg-orange-500 text-white roundedsm w-min mx-auto hover:bg-orange-400 transition-all duration-300"
                onClick={() => {
                  navigate("/ward");
                }}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default parents;
