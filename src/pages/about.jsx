const About = () => {
  return (
    <section>
      <div className="first-container">
        <h3 className="about-text">About Us</h3>
      </div>

      <div className="second-container">
        <h3 className="text">About Amber Academy</h3>

        <p className="text-center text-text">
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

      <div className="third-container">
        <h3 className="third-container-text100">Mission&Vision</h3>
        <p className="text-center third-container-text-text">
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
        <h3 className="third-container-text100">Core Values</h3>

        <div className="flex flex-row justify-between">
          <div className="basis-1/2 fourth-flex">
            <h4 className="text-4xl">Fostering Academic Excellence</h4>
            <p className=" mt-4 text-lg">
              By supporting skilled and dedicated teachers who <br />
              maintain high academic standards, motivate our <br />
              students and collaborate with our families
            </p>
          </div>

          <div className="basis-1/3">
            <h4 className="text-4xl">Nurturing The Whole Child</h4>
            <p className="mt-4 text-lg">
              By creating engaged learners, encouraging <br />
              honesty and guiding social and emotional <br />
              development
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <div className="basis-1/2 fourth-flex mt-10">
            <h4 className="text-4xl">Ensuring A Safe Environment</h4>
            <p className="mt-4 text-lg">
              By supporting skilled and dedicated teachers who <br />
              maintain high academic standards, motivate our <br />
              students and collaborate with our families
            </p>
          </div>

          <div className="basis-1/3 mt-10">
            <h4 class="text-4xl">Developing Critical Thinkers</h4>
            <p className="mt-4 text-lg">
              By creating engaged learners, encouraging <br />
              honesty and guiding social and emotional <br />
              development
            </p>
          </div>
        </div>
      </div>

      <div className="fifth-container third-container">
        <h3 className="third-container-text100">Partners</h3>

        <div className=" grid grid-cols-5 gap-2 px-20 pb-40">
          <div className=" md:grid-cols-1 lil-box"></div>

          <div className=" md:grid-cols-1 lil-box "></div>

          <div className="  md:grid-cols-1 lil-box "></div>

          <div className=" md:grid-cols-1 lil-box "></div>

          <div className=" md:grid-cols-1 lil-box "></div>
        </div>
      </div>
    </section>
  );
};

export default About;
