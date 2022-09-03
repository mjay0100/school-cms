const About = () => {
  return (
    <section>
      <div className=" first-container relative z-[-1] ">
        {/* <img className = "w-full " src = "src/images/photo school kid100.jpg" style={{color:red}}/> */}
        <h3 className="about-text text-white text-4xl absolute text-center top-[50%] w-full ">
          About Us
        </h3>
      </div>

      <div className="second-container">
        <h3 className="text-4xl text-center text-white pt-10">About Amber Academy</h3>

        <p className="text-center text-xl  text-white break-normal py-6">
          The mission of Amberschool is to develop intellectually curious and
          capable young people who are selfless <br />
          contributors to both local and global communities, and who aspire to
          be ethical and compassionate leaders. <br />
          Through a rigorous and innovative academic program in math, science,
          and technology, <br />
          in combination with the liberal arts, Amberschool affords its diverse
          student population <br />
          those experiences, skills, and values that will prepare them for
          purposeful contributions in
          <br />
          higher education and STEM-related fields.
        </p>
      </div>
      {/* 
        <div className = "third-container">
          <h3 className = "py-10 text-4xl text-center text-bold">Mission&Vision</h3>
          <p className = "text-lg pb-4 text-center ">
          The mission of Amberschool  is to develop intellectually curious and capable young people who are selfless <br />
           contributors to both local and global communities, and who aspire to be ethical and compassionate leaders. <br />
            Through a rigorous and innovative academic program in math, science, and technology, in combination with the <br />
             liberal arts, Amberschool affords its diverse student population those experiences, skills, and values that will <br />
              prepare them for purposeful contributions in higher education and STEM-related fields. */}

      <div className="third-container">
        <h3 className="text-4xl text-center text-black pt-10">Mission&Vision</h3>
        <p className="text-center text-xl  text-black break-normal py-6">
          The mission of Amberschool is to develop intellectually curious and
          capable young people who are selfless <br />
          contributors to both local and global communities, and who aspire to
          be ethical and compassionate leaders. <br />
          Through a rigorous and innovative academic program in math, science,
          and technology, in combination with the <br />
          liberal arts, Amberschool affords its diverse student population those
          experiences, skills, and values that will <br />
          prepare them for purposeful contributions in higher education and
          STEM-related fields.
          <br />
          <br />
          The sole vision of Amberschool is to create an environment with highly
          intellectual and skilled young people <br />
          who will be able to handle and control negative impulses, be
          intellectually fit and morally upright.
        </p>
      </div>

      <div className="fourth-container bg-white  pb-14">
        <h3 className="py-10 text-4xl text-center text-bold">Core Values</h3>

        <div className="flex flex-row gap-10 justify-between px-20 md:mx-24 ">
          <div className="basis-1/1 ">
            <h4 className="text-2xl md:text-3xl ">
              Fostering Academic Excellence
            </h4>
            <p className=" mt-4 text-base md:text-lg">
              By supporting skilled and dedicated teachers who <br />
              maintain high academic standards, motivate our <br />
              students and collaborate with our families
            </p>
          </div>

          <div className="basis-1/1">
            <h4 className="text-2xl md:text-3xl">Nurturing The Whole Child</h4>
            <p className="mt-4  text-base md:text-lg">
              By creating engaged learners, encouraging <br />
              honesty and guiding social and emotional <br />
              development
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-10 justify-between px-20 md:mx-24 ">
          <div className="basis-1/1 mt-10">
            <h4 className="text-2xl md:text-3xl">
              Ensuring A Safe Environment
            </h4>
            <p className="mt-4 text-base md:text-lg ">
              By supporting skilled and dedicated teachers who <br />
              maintain high academic standards, motivate our <br />
              students and collaborate with our families
            </p>
          </div>

          <div className="basis-1/1 mt-10">
            <h4 class="text-2xl md:text-3xl">Developing Critical Thinkers</h4>
            <p className="mt-4 text-base md:text-lg">
              By creating engaged learners, encouraging <br />
              honesty and guiding social and emotional <br />
              development
            </p>
          </div>
        </div>
      </div>

      <div className="fifth-container third-container">
        <h3 className="third-container-text100">Partners</h3>

        <div className="lg:flex px-10  ">
          <div className="  flex gap-3  pb-10 ">
            <div className=" md:grid-cols-1 lil-box"></div>

            <div className=" md:grid-cols-1 lil-box "></div>
          </div>

          <div className="  gap-3 flex  pb-10 lg:mx-3">
            <div className=" md:grid-cols-1 lil-box"></div>

            <div className=" md:grid-cols-1 lil-box "></div>
          </div>

          <div className="gap-3 flex pb-10">
            <div className="  md:grid-cols-1 lil-box "></div>

            <div className=" md:grid-cols-1 lil-box "></div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;
