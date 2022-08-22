import { BsTrophy } from "react-icons/bs";
import { GiBrain } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";
const Home = () => {
  return (
    <section className="text-white">
      <img
        className="w-full"
        src="https://media.istockphoto.com/photos/group-of-elementary-students-having-computer-class-with-their-teacher-picture-id1358014313?b=1&k=20&m=1358014313&s=170667a&w=0&h=t_bvZVk1eQhR1SiiuRphbJ3kljcJJ46QAsOQ8EnuLbA="
        alt=""
      />
      <div className="p-[4rem] mission-img">
        <h1 className="text-center font-bold text-2xl my-5">Mission</h1>
        <p className="text-center">
          The mission of Amberschool is to develop intellectually curious and
          capable young people who are selfless contributors to both local and
          global communities, and who aspire to be ethical and compassionate
          leaders. Through a rigorous and innovative academic program in math,
          science, and technology, in combination with commerce and arts.
          Amberschool affords its diverse student population those experiences,
          skills, and values that will prepare them for purposeful contributions
          in higher education and STEM-related fields.
        </p>
      </div>
      <div className="md:flex justify-between bg-[#F0F0F0] px-[4rem] py-[8rem] text-black text-6xl">
        <div className="flex flex-col items-center my-[3rem]">
          <FaGraduationCap className='text-orange-500' />
          <h1 className="text-orange-500 text-4xl my-3">#5</h1>
          <p className="text-3xl">Ranked</p>
        </div>
        <div className="flex flex-col items-center my-[3rem]">
          <BsTrophy className='text-orange-500' />

          <h1 className="text-orange-500 text-4xl my-3">15+</h1>
          <p className="text-3xl">School Programs</p>
        </div>
        <div className="flex flex-col items-center my-[3rem]">
          <GiBrain className='text-orange-500' />

          <h1 className="text-orange-500 text-4xl my-3">#5</h1>
          <p className="text-3xl">Students</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
