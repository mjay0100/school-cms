import { useState } from "react";
import { RiBracesLine } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <header className="flex justify-between   relative  items-center p-5">
      <h1
        className={`${
          !show
            ? "font-bold text-lg flex items-center"
            : "absolute z-10 top-[20px] font-bold text-lg flex items-center"
        }`}
      >
        {" "}
        <span className="text-5xl text-orange-400">A</span>
        amberschool
      </h1>

      {/* {!show ? (
        <h1 className="font-bold text-lg flex items-center">
          {" "}
          <span className="text-5xl text-orange-400">A</span>
          amberschool
        </h1>
      ) : (
        <h1 className="absolute z-10 top-[20px] font-bold text-lg flex items-center">
          {" "}
          <span className="text-5xl text-orange-400">A</span>
          mberschool
        </h1>
      )} */}
      <nav
        className={`${show ? "show-sidebar sidebar" : "sidebar md:contents"}`}
      >
        <ul
          className={`${
            show
              ? "list-sidebar sidebar show-sidebar h-[50%] items-center text-lg capitalize"
              : "hidden md:flex gap-6 capitalize items-center"
          }`}
        >
          {/* {show && (
            
          )} */}
          <Link
            onClick={() => setShow(false)}
            to="/"
            className={`${show ? "mt-[5rem] py-4 ml-4" : ""}`}
          >
            home
          </Link>
          <Link
            onClick={() => setShow(false)}
            to="/about"
            className={`${show ? "py-4 ml-4" : ""}`}
          >
            about
          </Link>
          <Link
            onClick={() => setShow(false)}
            to="/Academics"
            className={`${show ? "py-4 ml-4" : ""}`}
          >
            academics
          </Link>
          <Link
            onClick={() => setShow(false)}
            to="#"
            className={`${show ? "py-4 ml-4" : ""}`}
          >
            news & events
          </Link>
          <Link
            onClick={() => setShow(false)}
            to="/Contact"
            className={`${show ? "py-4 ml-4" : ""}`}
          >
            contact
          </Link>
          <button
            className={`${
              show
                ? "md:block text-orange-500 w-[60%] px-6 py-2 capitalize border-2 border-solid rounded-md border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-500"
                : "w-auto md:block text-orange-500  px-6 py-2 capitalize border-2 border-solid rounded-md border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-500"
            }`}
          >
            enroll
          </button>
        </ul>
      </nav>
      {show ? (
        <span
          className="absolute right-[3rem] top-[2rem] text-2xl text-black cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <FaTimes />
        </span>
      ) : (
        <span
          className="absolute right-[2rem] md:hidden text-2xl text-black cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <FaBars />
        </span>
      )}
    </header>
  );
};

export default Navbar;
