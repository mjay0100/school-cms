import image53 from "../assets/images/Rectangle 53.png";
import image55 from "../assets/images/Rectangle 55.png";

const Events = () => {
  return (
    <>
      <div className="md:flex gap-6 justify-center mt-12 mb-6">
        <div
          className="bg-white relative mb-5 shadow-md shadow-slate-500"
          data-aos="fade-left"
          data-aos-duration="1500">
          <img
            src={image53}
            className="p-8 mb-2 rounded-md mx-auto w-[400px]"
            alt=""
          />
          <h1 className="bg-orange-500 w-min absolute top-[2rem] left-[2rem] text-center text-white p-4">
            19 Aug 2022
          </h1>
          <h1 className="text-lg px-8 pb-8 font-semibold">
            Freshmen Orientation
          </h1>
        </div>
        <div
          className="bg-white relative mb-5 shadow-md shadow-slate-500"
          data-aos="fade-right"
          data-aos-duration="1500">
          <img
            src={image55}
            className="p-8 mb-2 rounded-md mx-auto w-[400px]"
            alt=""
          />
          <h1 className="bg-orange-500 w-min absolute top-[2rem] left-[2rem] text-center text-white p-4">
            19 Aug 2022
          </h1>
          <h1 className="text-lg px-8 pb-8 font-semibold">Sugar Free Week</h1>
        </div>
      </div>
    </>
  );
};

export default Events;
