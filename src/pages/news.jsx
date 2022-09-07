import Event from "../components/Events.jsx";
// import Schedule from "../components/Schedule.jsx";

const news = () => {
  return (
    <section>
      <div className="first-container relative z-[-1] ">
        <h3 className="text-white text-4xl absolute text-center top-[50%] w-full ">
          News & Events
        </h3>
        <h5 className="text-white text-2xl absolute text-center top-[60%] w-full ">
          News on school life, events and other information for the community.
        </h5>
      </div>
      <div>
        <div className="p-8 mt-5">
          {/* <Schedule /> */}
          <Event />
        </div>
      </div>
      <div className="text-center capitalize p-8 my-4">
        <h1 className="text-3xl mb-6">Newsroom</h1>
        <div>
          <p>amberschool school of 2022 graduation list</p>
          <p>12/06/2022</p>
          <button className="px-4 capitalize py-1 border-orange-500 border-2 border-solid text-orange-500 rounded-sm mx-auto my-6  hover:text-white hover:bg-orange-500 transition-all duration-300">
            read more
          </button>
        </div>
        <div>
          <p>amberschool school of 2022 graduation list</p>
          <p>12/06/2022</p>
          <button className="px-4 capitalize py-1 border-orange-500 border-2 border-solid text-orange-500 rounded-sm mx-auto my-6  hover:text-white hover:bg-orange-500 transition-all duration-300">
            read more
          </button>
        </div>
        <div>
          <p>amberschool school of 2022 graduation list</p>
          <p>12/06/2022</p>
          <button className="px-4 capitalize py-1 border-orange-500 border-2 border-solid text-orange-500 rounded-sm mx-auto my-6  hover:text-white hover:bg-orange-500 transition-all duration-300">
            read more
          </button>
        </div>
      </div>
    </section>
  );
};

export default news;
