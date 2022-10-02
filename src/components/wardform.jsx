import React from "react";

const wardform = () => {
  return (
    <div>
      <form action="" className="md:w-[75%] mx-auto my-4">
        <div className="p-2 grid gap-4">
          <label htmlFor="first-name">First-Name:</label>
          <input
            className="rounded-[1.5rem] border-2 p-2 border-slate-200 border-solid mb-3 focus:ring-blue-600 "
            type="text"
            id="first-name"
            placeholder="First-Name"
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
          <label htmlFor="date">Date of Birth:</label>
          <input
            className="rounded-[1.5rem] border-2 p-2 border-slate-200 border-solid mb-3 focus:ring-blue-600 "
            type="date"
            id="date"
            placeholder="Lastname"
          />
        </div>

        <label htmlFor="Gender">Gender :</label>
        <div className="flex justify-center gap-8 my-4">
          <div className="form-check form-check-inline">
            <input
              className="formrounded-[1.5rem] -check-inpu2 form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-orange-500 checked:border-orange-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="inlineRadio1"
            >
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="formrounded-[1.5rem] -check-inpu2 form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-orange-500 checked:border-orange-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="inlineRadio2"
            >
              Female
            </label>
          </div>
        </div>
        <div className="p-2 grid gap-4">
          <label htmlFor="nationality">Nationality:</label>
          <input
            className="rounded-[1.5rem] border-2 p-2 border-slate-200 border-solid mb-3 focus:ring-blue-600 "
            type="text"
            id="nationality"
            placeholder="Nigeria"
          />
        </div>

        <div className="p-2 grid gap-4">
          <label htmlFor="state">State:</label>
          <input
            className="rounded-[1.5rem] border-2 p-2 border-slate-200 border-solid mb-3 focus:ring-blue-600 "
            type="text"
            id="state"
            placeholder="state"
          />
        </div>

        <div className="p-2 grid gap-4">
          <label htmlFor="local">Local Government:</label>
          <input
            className="rounded-[1.5rem] border-2 p-2 border-slate-200 border-solid mb-3 focus:ring-blue-600 "
            type="text"
            id="local"
            placeholder="L.G.A"
          />
        </div>

        <div className="p-2 grid gap-4">
          <label htmlFor="number">Last Class Attended:</label>
          <input
            className="rounded-[1.5rem] border-2 p-2 border-slate-200 border-solid mb-3 focus:ring-blue-600 "
            type="text"
            id="state"
            placeholder="Last Class"
          />
        </div>

        <div className="p-2 grid gap-4">
          <label htmlFor="number">Enrollment Class:</label>
          <input
            className="rounded-[1.5rem] border-2 p-3 border-slate-200 border-solid mb-3 focus:ring-blue-600 "
            type="text"
            id="state"
            placeholder="New class"
          />
        </div>

        <p className="text-xl py-5"> Upload Documents :</p>
        <div className="flex gap-4">
          <div className="">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              htmlFor="passport"
            >
              Add Passport
            </label>
            <input
              className="block rounded-[1.5rem]  mb-5 w-fu3l text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="passport"
              type="file"
            />
          </div>
          <div className="">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              htmlFor="small_size"
            >
              Add Result
            </label>
            <input
              className="block rounded-[1.5rem] k mb-5 w-fu2l text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="small_size"
              type="file"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default wardform;
