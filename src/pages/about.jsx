const About = () => {
  return (
    <section>
      <div className=" first-container relative z-[-1] ">
        {/* <img className = "w-full " src = "src/images/photo school kid100.jpg" style={{color:red}}/> */}
        <h3 className="text-center text-white text-4xl absolute  top-[50%] w-full ">
          About Us
        </h3>
      </div>
      {/* About school */}
      <article className="bg-[#fb6f00] p-5">
        <div className="mx-auto py-4">
          <h3 className="text-3xl text-center text-white pt-10">
            About Amber Academy
          </h3>

          <p className="text-center w-[90%] mx-auto text-white py-6">
            The mission of Amberschool is to develop intellectually curious and
            capable young people who are selfless contributors to both local and
            global communities, and who aspire to be ethical and compassionate
            leaders. Through a rigorous and innovative academic program in math,
            science, and technology, in combination with the liberal arts,
            Amberschool affords its diverse student population those
            experiences, skills, and values that will prepare them for
            purposeful contributions in higher education and STEM-related
            fields.
          </p>
        </div>
      </article>

      {/* Mission and Vision */}
      <article className="bg-[#f0f0f0] p-5">
        <div className="mx-auto w-[90%] py-4">
          <h3 className="text-3xl text-center text-black pt-10">
            Mission & Vision
          </h3>
          <p className="text-center text-black py-6">
            The mission of Amberschool is to develop intellectually curious and
            capable young people who are selfless contributors to both local and
            global communities, and who aspire to be ethical and compassionate
            leaders. Through a rigorous and innovative academic program in math,
            science, and technology, in combination with the liberal arts,
            Amberschool affords its diverse student population those
            experiences, skills, and values that will prepare them for
            purposeful contributions in higher education and STEM-related
            fields. The sole vision of Amberschool is to create an environment
            with highly intellectual and skilled young people who will be able
            to handle and control negative impulses, be intellectually fit and
            morally upright.
          </p>
        </div>
      </article>

      {/* core values */}
      <article className=" p-10">
        <h3 className="py-8 text-4xl text-center text-bold">Core Values</h3>

        <div className="grid md:grid-cols-2 gap-7 w-[85%] mx-auto text-center">
          <div data-aos="zoom-in" data-aos-duration="1000">
            <h4 className="text-2xl mb-4">Fostering Academic Excellence</h4>
            <p>
              By supporting skilled and dedicated teachers who maintain high
              academic standards, motivate our students and collaborate with our
              families
            </p>
          </div>

          <div data-aos="zoom-in" data-aos-duration="1000">
            <h4 className="text-2xl mb-4">Nurturing The Whole Child</h4>
            <p>
              By creating engaged learners, encouraging honesty and guiding
              social and emotional development
            </p>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <h4 className="text-2xl mb-4">Ensuring A Safe Environment</h4>
            <p>
              By supporting skilled and dedicated teachers who maintain high
              academic standards, motivate our students and collaborate with our
              families
            </p>
          </div>

          <div data-aos="zoom-in" data-aos-duration="1000">
            <h4 className="text-2xl mb-4">Developing Critical Thinkers</h4>
            <p className=" ">
              By encouraging intellectual curiosity and rewarding independent
              and creative problem solvers
            </p>
          </div>
        </div>
      </article>

      {/* partners */}
      <div className="bg-[#f0f0f0] p-8">
        <h3 className="text-3xl text-center pb-9">Partners</h3>
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto w-9/12 md:w-4/5  pb-10 ">
          <div className="partner"></div>
          <div className="partner"></div>
          <div className="partner"></div>
          <div className="partner"></div>
          <div className="partner"></div>
          <div className="partner"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
