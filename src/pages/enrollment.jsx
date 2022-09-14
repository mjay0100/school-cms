import React from "react";
import image0 from "../assets/images/Group 167.png";
import { useNavigate } from "react-router-dom";

const enrollment = () => {
  let navigate = useNavigate();
  return (
    <div className="bg-[#f0f0f0] py-3">
      <div className=" bg-[#ffffff] rounded-md w-[85%] md:w-[75%] my-6 mx-auto py-8">
        <div className="mx-20">
          <div className="mb-6">
            <img src={image0} className="mx-auto " />
          </div>

          <h2 className="text-[1.25rem] md:text-2xl font-bold text-center p-5 capitalize">
            Enrollment process guidelines
          </h2>
          <div className="text-lg md:text-[1.25rem]">
            <ul className=" list-decimal font-semibold">
              <li className="mb-5">
                Complete an enrollment inquiry form so we have your contact
                information to reach you if we have any questions or if you need
                any assistance
              </li>
              <li className="mb-5">
                Complete the full enrollment form and attach the required
                documents
              </li>
              <li className="mb-5">
                An application fee of NGN15,000 per ward is required for
                application
              </li>

              <p className="my-5 font-semibold">
                You will be required to attach the following documents:
              </p>

              <ul className="list-disc text-lg">
                <li>passport-sized photo </li>

                <li>former school last semester result</li>
                <li>school recommendation letter</li>
              </ul>
            </ul>
          </div>
          <div className="text-center py-5">
            <button
              className="px-9 py-2 my-2 border-orange-500 border-2 border-solid bg-orange-500 text-white roundedsm w-min mx-auto hover:bg-orange-400 transition-all duration-300"
              onClick={() => {
                navigate("/parents");
              }}>
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default enrollment;
