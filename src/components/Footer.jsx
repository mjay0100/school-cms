import { RiBracesLine } from "react-icons/ri";

const Footer = () => {
  return (
    <section className="grid grid-cols-1 gap-[2.5rem] md:flex p-[3rem] pt-[4rem] mt-[3.5rem] justify-around items-start bg-black text-white">
      <h1 className="justify-center font-bold text-3xl flex gap-2 items-center">
        {" "}
        <span>
          <RiBracesLine />{" "}
        </span>
        finsweet
      </h1>
     
      <div>
        <h1 className="text-2xl mb-5 text-center">
          Subscribe to get latest <br /> updates
        </h1>
        <div className="flex justify-center">
          <input
            type="text"
            className="p-4 border border-slate-100/40 bg-black"
            placeholder="Your email"
          />
          <button className="p-3 bg-white text-black">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
