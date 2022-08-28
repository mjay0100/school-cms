const contact = () => {
  return (
    <section>
      <div className="first-container relative z-[-1] ">
        <h3 className="text-white text-4xl absolute text-center top-[50%] w-full ">
          Contact Us
        </h3>
      </div>
      <div className="p-9">
        <h1 className="text-center text-2xl mt-5 font-semibold">Reach out to us</h1>
        <form action="" className="w-[50%] mx-auto my-4">
          <div className="p-2 grid gap-4">
            <label htmlFor="name">Name:</label>
            <input
              className="border-2 p-2 border-slate-200 border-solid mb-3 focus:ring-blue-600 "
              type="text"
              id="name"
            />
          </div>
          <div className="p-2 grid gap-4">
            <label htmlFor="email">Email:</label>
            <input
              className="border-2 p-2 border-slate-200 border-solid mb-3 focus:ring-blue-600 "
              t
              ype="text"
              id="email"
            />
          </div>
          <div className="p-2 grid gap-4">
            <label htmlFor="comment">Comments/Questions:</label>
            <input
              className="border-2 p-2 border-slate-200 border-solid mb-3 focus:ring-blue-600 "
              type="text"
              id="comment"
            />
          </div>
          <div className="text-center">
            <button className="px-4 py-1 my-2 border-orange-500 border-2 border-solid text-orange-500 rounded-sm w-min mx-auto hover:text-white hover:bg-orange-500 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default contact;
