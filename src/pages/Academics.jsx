const Academics = () => {
  return (
    <div>
      <div className="acad-container">
        <h3 className="about-text">Academics</h3>
      </div>
      <h3 className="text-2xl text-center py-24 ">
        At Amber Academy our students success is rooted in the future. Students
        master <br />
        academic and real-world skills today, that will be in demand when they
        graduate. <br />
        <br />
        Learn more about the school that is setting the standard for education.
      </h3>

      <div className="flex flex-row align-middle justify-center bg-[#f0f0f0]">
        <div className="basis-1/2 py-5">
          <img src="src/assets/images/Rectangle 112.png" width="500px" />
        </div>

        <div className="pt-24">
          <h3 className="text-3xl  font-bold ">Elementary School</h3>
          <p className="text-xl mt-2">Nursery 1 & 2</p>

          <p className="text-lg mt-10 text-left">
            Young minds are like newly formed galaxies. Full of energy, <br />
            expansive & curious. Poised & ready to stretch out and make <br />
            their mark in the universe. At Amber academy, we believe that <br />
            every child is full of brilliance and potential. At Amber academy{" "}
            <br />
            Elementary, they discover it for themselves.
          </p>
        </div>
      </div>

      <div className="flex flex-row-reverse align-middle justify-center bg-[#d3b2b2] pt-5">
        <div className=" py-5">
          <img src="src/assets/images/abc.png" width="500px" />
        </div>

        <div className="basis-1/2 pt-24 pl-20">
          <h3 className="text-3xl  font-bold ">Primary School</h3>
          <p className="text-xl mt-2 ">Primary 1 & 6</p>

          <p className="text-lg mt-10 text-left ">
            Here at Amber Academy we envision every student becoming a <br />
            world-class scientist, technologist, engineer or mathematician.{" "}
            <br />
            We encourage students to become critical thinkers & to explore{" "}
            <br />
            and experiment with their talents & discover their purpose. <br />
          </p>
        </div>
      </div>

      <div className="flex flex-row align-middle justify-center bg-[#f0f0f0] pt-5">
        <div className="basis-1/2 py-5">
          <img
            src="https://www.brookings.edu/wp-content/uploads/2019/11/CUE_South-Africa_classroom001.jpg"
            width="500px"
          />
        </div>

        <div className="pt-24">
          <h3 className="text-3xl  font-bold ">Secondary School</h3>
          <p className="text-xl mt-2">JS1 - SS3</p>

          <p className="text-lg mt-10 text-left">
            Young minds are like newly formed galaxies. Full of energy, <br />
            expansive & curious. Poised & ready to stretch out and make <br />
            their mark in the universe. At Amber academy, we believe that <br />
            every child is full of brilliance and potential. At Amber academy{" "}
            <br />
            Elementary, they discover it for themselves.
          </p>
        </div>
      </div>

      <div className=" my-10">
        <h3 className=" text-center text-3xl text-black font-bold">
          Our Fields
        </h3>

        <div className="flex flex-col mx-32">
          <div className="basis-1 bg-[#0f3768] my-2 py-3 text-3xl text-white pl-2">
            {" "}
            Science & Technology
          </div>
          <div className="basis-1 bg-[#0f3768] my-2 py-3 text-3xl text-white pl-2">
            {" "}
            Art & Humanities
          </div>
          <div className="basis-1 bg-[#0f3768] my-2 py-3 text-3xl text-white pl-2">
            {" "}
            Commercial
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
