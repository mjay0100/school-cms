import science from "../assets/images/science.png";
import mayor from "../assets/images/mayor.png";
import strategy from "../assets/images/strategy.png";

const Academics = () => {
  return (
    <div>
      <div className="academic-container relative z-[-1] ">
        <h3 className="text-center text-white text-4xl absolute text-center top-[50%] w-full ">
          Academics
        </h3>
      </div>
      <div className="bg-[#f0f0f0]">
        <h3 className="text-xl text-center px-8 py-20 w-[90%] mx-auto rounded-md ">
          At Amber Academy our students success is rooted in the future.
          Students master academic and real-world skills today, that will be in
          demand when they graduate.
          <br />
          Learn more about the school that is setting the standard for
          education.
        </h3>
      </div>

      {/* sections */}
      <section className="my-6">
        <div className="md:flex items-center justify-center py-8 px-10 gap-5 ">
          <div className="py-5">
            <img
              src="src/assets/images/Rectangle 112.png"
              className="mx-auto rounded-md"
            />
          </div>
          <div className="md:w-1/2 p-8 ">
            <h3 className="text-2xl mb-2 font-bold text-center ">
              Elementary School
            </h3>
            <p className="text-xl mb-4 text-center">Nursery 1 & 2</p>
            <p className="text-lg text-center">
              Young minds are like newly formed galaxies. Full of energy,
              expansive & curious. Poised & ready to stretch out and make their
              mark in the universe. At Amber academy, we believe that every
              child is full of brilliance and potential. At Amber academy
              Elementary, they discover it for themselves.
            </p>
          </div>
        </div>

        <div className="md:flex md:flex-row-reverse items-center justify-center pb-8 px-10 gap-5">
          <div className=" py-5">
            <img
              src="src/assets/images/abc.png"
              className="mx-auto rounded-md"
            />
          </div>
          <div className="md:w-1/2 p-8 ">
            <h3 className="text-2xl mb-2 font-bold text-center ">
              Primary School
            </h3>
            <p className="text-xl mb-4 text-center ">Primary 1 & 6</p>
            <p className="text-lg text-center ">
              Here at Amber Academy we envision every student becoming a <br />
              world-class scientist, technologist, engineer or mathematician. We
              encourage students to become critical thinkers & to explore and
              experiment with their talents & discover their purpose. <br />
            </p>
          </div>
        </div>

        <div className="md:flex items-center justify-center pb-8 px-10 gap-5 ">
          <div className="basis-1/2 py-5">
            <img src="https://www.brookings.edu/wp-content/uploads/2019/11/CUE_South-Africa_classroom001.jpg" />
          </div>
          <div className="md:w-1/2 p-8">
            <h3 className="text-2xl mb-2 font-bold text-center">
              Secondary School
            </h3>
            <p className="text-xl mt-2 text-center">JS1 - SS3</p>
            <p className="text-lg text-center ">
              Young minds are like newly formed galaxies. Full of energy, <br />
              expansive & curious. Poised & ready to stretch out and make <br />
              their mark in the universe. At Amber academy, we believe that{" "}
              <br />
              every child is full of brilliance and potential. At Amber academy{" "}
              Elementary, they discover it for themselves.
            </p>
          </div>
        </div>
      </section>

      {/* our fields */}

      <div className=" my-10">
        <h3 className=" text-center text-4xl font-bold">Our Fields</h3>

        <div className="w-2/3 mx-auto grid md:grid-cols-3 gap-5 items-center">
          <div className=" my-2 p-3 text-xl  rounded-md items-center">
            <img src={science} alt="science" className="w-20 mx-auto mb-3" />
            <p className="text-center text-[#0f3768]">Science & Technology</p>
          </div>
          <div className=" my-2 p-3 text-xl  rounded-md items-center">
            <img src={mayor} alt="arts" className="w-20 mx-auto mb-3" />
            <p className="text-center text-[#0f3768]"> Art & Humanities</p>
          </div>
          <div className=" my-2 p-3 text-xl  rounded-md items-center">
            <img src={strategy} alt="commerce" className="w-20 mx-auto mb-3" />
            <p className="text-center text-[#0f3768]"> Commercial</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
