import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-[#0F3876] p-7 text-white">
      <h1 className="justify-center font-bold text-3xl flex gap-2 items-center mb-8">
        Contact Us
      </h1>

      <div className="flex justify-center gap-4">
        <p className="flex items-center gap-2 mb-5 text-center">
          <FaTwitter />
          Twitter
        </p>
        <p className="flex items-center gap-2 mb-5 text-center">
          <FaInstagram />
          Instagram
        </p>
        <p className="flex items-center gap-2 mb-5 text-center">
          <FaFacebook />
          Facebook
        </p>
      </div>
      <p className="text-center">
        Nursery & primary school: 250 j.balvin street | ocean | yN |12098
        |9098272628
        <br />
        secondary school: 244 j.balvin street | ocean | yN |12098 |9098272628
      </p>
    </section>
  );
};

export default Footer;
