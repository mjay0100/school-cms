import React from "react";
import image0 from "../assets/images/Group 167.png";

const enrollment = () => {
  return (
    <div className="bg-[#f0f0f0] md:py-3">
      <div className=" bg-[#ffffff] md:mx-40 py-10">
        <div className="mx-20  lg:mx-96 ">
          <div className="mb-6">
            <img src={image0} className="mx-auto " />
          </div>

          <h2 className="text-3xl font-bold text-center p-5">
            Enrollment process guidelines
          </h2>
          <div className="">
            <ul className="list-outside text-left leading-loose text-black ">
              <li className="list-decimal font-semibold text-2xl my-6 text-justify">
                complete an enrollment inquiry form so we have your contact
                information to reach you if we have any questions or if you need
                any assistance
              </li>
              <li className="list-decimal text-2xl my-6 font-semibold text-justify">
                Complete the full enrollment form and attach the required
                documents
              </li>
              <li className="list-decimal text-2xl my-6 font-semibold text-justify">
                An application fee of NGN15,000 per ward is required for
                application
              </li>

              <p className="text-2xl mt-8 font-semibold">
                you will be required to attach the following documents:
              </p>

              <p className="text-xl leading-loose mt-3 list-inside">
                <li className="list-disc">passport-sized photo </li>

                <li className="list-disc">
                  former school last semester result
                </li>
                <li className="list-disc">school recommendation letter</li>
              </p>
            </ul>
          </div>
          <div className="text-center py-5">
            <a href="../parents">
              <button className="px-9 py-2 my-2 border-orange-500 border-2 border-solid bg-orange-500 text-white rounded-sm w-min mx-auto hover:text-white hover:bg-orange-300 transition-all duration-300">
                Start
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default enrollment;
