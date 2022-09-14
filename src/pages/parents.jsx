import React, { useEffect } from "react";
import image1 from "../assets/images/Group 166.png";
import { useNavigate } from "react-router-dom";

const parents = () => {
  let navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f0f0f0] md:py-3">
      <div className=" bg-[#ffffff] md:mx-40 py-10">
        <div className="mx-20  lg:mx-96 ">
          <div className="mb-6">
            <img src={image1} className="mx-auto " />
          </div>
          {/* <h3 className=" text-6xl text-orange-500 text-center">2</h3> */}

          <h2 className="text-3xl font-bold text-center p-5">
            Parent Information
          </h2>

          <form action="" className="w-[70%] mx-auto my-4">
            <div className="p-2 grid gap-4">
              <label htmlFor="name">Number of ward to enroll:</label>
              <input
                className="border-2 p-2 border-slate-200 border-solid mb-3 focus:ring-blue-600 "
                type="number"
                id="name"
                placeholder="1"
              />
            </div>
            <p className="text-xl my-5 font-bold">Parent or Guardian details</p>
            <div className="p-2 grid gap-4">
              <label htmlFor="f.name">FirstName:</label>
              <input
                className="border-2 p-2 border-slate-200 border-solid mb-3 focus:ring-blue-600 "
                t
                ype="text"
                id="f.name"
                placeholder="firstname"
              />
            </div>
            <div className="p-2 grid gap-4">
              <label htmlFor="l.name">LastName:</label>
              <input
                className="border-2 p-2 border-slate-200 border-solid mb-3 focus:ring-blue-600 "
                type="text"
                id="l.name"
                placeholder="Lastname"
              />
            </div>

            <div className="p-2 grid gap-4">
              <label htmlFor="Email">Email:</label>
              <input
                className="border-2 p-2 border-slate-200 border-solid mb-3 focus:ring-blue-600 "
                type="Email"
                id="Email"
                placeholder="@mail.com"
              />
            </div>

            <div className="p-2 grid gap-4">
              <label htmlFor="number">Phone-number:</label>
              <input
                className="border-2 p-2 border-slate-200 border-solid mb-3 focus:ring-blue-600 "
                type="phonenumber"
                id="number"
                placeholder="+234"
              />
            </div>

            <div className="text-center py-5">
              <button
                className="px-9 py-2 my-2 border-orange-500 border-2 border-solid bg-orange-500 text-white rounded-sm w-min mx-auto hover:text-white hover:bg-orange-300 transition-all duration-300"
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
