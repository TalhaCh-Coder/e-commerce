import { FaLinkedin, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: "About Us", url: "/about" },
    { name: "Contact", url: "/contact" },
    { name: "FAQ", url: "/categories" },
  ];

  return (
    <>
      <footer className="relative ">
        <div className="absolute bg-blue-700 w-11/12 sm:w-4/5 md:w-3/5 lg:w-3/5 -top-55 md:-top-40 lg:-top-43 left-1/2 transform -translate-x-1/2 shadow-xl rounded-2xl flex flex-col items-center px-6 py-8 md:py-10 lg:py-12">
          <h2 className="text-white text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-center">
            Subscribe to Our Newsletter
          </h2>

          <div className="mt-6 md:mt-10 flex flex-col md:flex-row w-full md:w-[90%] lg:w-[70%] gap-3 items-center md:border md:border-white md:rounded-lg overflow-hidden px-2 md:px-0">
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full sm:flex-1 md:w-[60%] py-3 px-4 text-lg md:text-xl placeholder-white text-white bg-transparent border border-white rounded-lg md:border-none focus:caret-white outline-none"
            />
            <button className="w-full bg-white md:w-[40%] text-blue-700 py-3 px-6 text-lg md:text-xl font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1  lg:grid-cols-3 bg-gray-200 pt-14">
          <div className="flex items-center p-8 md:pl-24">
            <p className="text-lg text-center md:text-left">
              Welcome to{" "}
              <span className="font-semibold text-blue-700 text-xl italic">
                Ahmed’s Shop
              </span>
              , your one-stop online store for quality products at great prices.
              Enjoy a secure shopping experience, fast delivery, and excellent
              customer service every time you shop with us.
            </p>
          </div>
          <div className="py-10 text-center">
            <h2 className="font-semibold text-2xl pb-4">Locations</h2>
            <div className=" flex flex-col gap-3 items-center">
              <p className="cursor-pointer transition duration-300 hover:text-gray-500 w-fit">
                New York
              </p>
              <p className="cursor-pointer transition duration-300 hover:text-gray-500 w-fit">
                Los Angeles
              </p>
              <p className="cursor-pointer transition duration-300 hover:text-gray-500 w-fit">
                Chicago
              </p>
              <p className="cursor-pointer transition duration-300 hover:text-gray-500 w-fit">
                Houston
              </p>
              <p className="cursor-pointer transition duration-300 hover:text-gray-500 w-fit">
                Phoenix
              </p>
            </div>
          </div>
          <div className="py-10 text-center">
            <h2 className="font-semibold text-2xl pb-4">Quick Links</h2>
            <div className=" flex flex-col gap-3 items-center">
              {quickLinks.map((link) => (
                <Link
                  to={link.url}
                  key={link.name}
                  className="block hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 bg-gray-300 py-8 px-6 border-t border-gray-400 justify-between">
          <div>
            <p>@2026-Ahmed's Shop</p>
          </div>
          <div className="flex items-center justify-center  gap-3">
            <FaLinkedin size={25} style={{ marginRight: "1rem" }} />
            <FaFacebook size={25} style={{ marginRight: "1rem" }} />
            <FaInstagram size={25} style={{ marginRight: "1rem" }} />
            <FaTiktok size={25} style={{ marginRight: "1rem" }} />
          </div>
          <div className="flex items-center justify-center gap-3">
            <p>Terms</p>
            <p>Privacy</p>
            <p>Cookies</p>
            <p>Help</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
