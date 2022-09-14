import React from "react";

const ward = () => {
  return (
    <div className="bg-[#f0f0f0] md:py-3">
      <div className=" bg-[#ffffff] md:mx-40 py-10">
        <div className="mx-20  lg:mx-96 ">
          <h3 className=" text-6xl font-black text-center">3</h3>

          <h2 className="text-3xl font-bold text-center p-5">
            Ward Information
          </h2>

          <form action="" className="w-[85%] mx-auto my-4">
            <div className="p-2 grid gap-4">
              <label htmlFor="name">Surname:</label>
              <input
                className="border-2 p-2 border-slate-200 border-solid mb-3 focus:ring-blue-600 "
                type="text"
                id="name"
                placeholder="Surname"
              />
            </div>

            <div className="p-2 grid gap-4">
              <label htmlFor="f.name">Other Names:</label>
              <input
                className="border-2 p-2 border-slate-200 border-solid mb-3 focus:ring-blue-600 "
                t
                ype="text"
                id="f.name"
                placeholder="firstname"
              />
            </div>
            <div className="p-2 grid gap-4">
              <label htmlFor="date">Date of Birth:</label>
              <input
                className="border-2 p-2 border-slate-200 border-solid mb-3 focus:ring-blue-600 "
                type="date"
                id="date"
                placeholder="Lastname"
              />
            </div>

            <label htmlFor="Gender">Gender :</label>
            <div class="flex justify-center gap-8 my-4">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-orange-500 checked:border-orange-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="inlineRadio10"
                >
                  Male
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-orange-500 checked:border-orange-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="inlineRadio20"
                >
                  Female
                </label>
              </div>
            </div>
            <div className="p-2 grid gap-4">
              <label htmlFor="Email">Nationality:</label>
              <input
                className="border-2 p-2 border-slate-200 border-solid mb-3 focus:ring-blue-600 "
                type="text"
                id="nationality"
                placeholder="Nigeria"
              />
            </div>

            <div className="p-2 grid gap-4">
              <label htmlFor="number">State:</label>
              <input
                className="border-2 p-2 border-slate-200 border-solid mb-3 focus:ring-blue-600 "
                type="text"
                id="state"
                placeholder="state"
              />
            </div>

            <div className="p-2 grid gap-4">
              <label htmlFor="local">Local Government:</label>
              <input
                className="border-2 p-2 border-slate-200 border-solid mb-3 focus:ring-blue-600 "
                type="text"
                id="state"
                placeholder="L.G.A"
              />
            </div>

            <div className="p-2 grid gap-4">
              <label htmlFor="number">Last Class Attended:</label>
              <input
                className="border-2 p-2 border-slate-200 border-solid mb-3 focus:ring-blue-600 "
                type="text"
                id="state"
                placeholder="last class"
              />
            </div>

            <div className="p-2 grid gap-4">
              <label htmlFor="number">Enrollment Class:</label>
              <input
                className="border-2 p-2 border-slate-200 border-solid mb-3 focus:ring-blue-600 "
                type="text"
                id="state"
                placeholder="New class"
              />
            </div>

            <p className="text-xl py-5"> Upload Documents :</p>
            <div className="flex gap-4">
              <div className="">
                <label
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  for="small_size"
                >
                  Add Passport
                </label>
                <input
                  class="block mb-5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="small_size"
                  type="file"
                />
              </div>
              <div className="">
                <label
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  for="small_size"
                >
                  Add Result
                </label>
                <input
                  class="block mb-5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="small_size"
                  type="file"
                />
              </div>
            </div>

            <div className="text-center py-5">
              <a href="../ward">
                <button className="px-8 py-2 my-2 border-orange-500 border-2 border-solid bg-orange-500 text-white rounded-sm w-min mx-auto hover:text-white hover:bg-orange-300 transition-all duration-300">
                  Next
                </button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ward;
