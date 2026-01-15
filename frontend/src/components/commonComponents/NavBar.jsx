import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const MenuItems = [
    { title: "Home", path: "/" },
    { title: "Products", path: "/products" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="fixed w-full bg-white z-1000">
        <div className="flex items-center justify-between p-4 bg-blue-700 text-white">
          <div>
            <h1>
              AHMED'S<span>SHOP</span>
            </h1>
          </div>
          {/* DESKTOP MENU */}
          <div className="hidden md:flex">
            {MenuItems.map((item, index) => (
              <div key={index} className="mx-4">
                <Link to={item.path}>{item.title}</Link>
              </div>
            ))}
          </div>
          <div className="hidden md:block">
            <button className=" bg-white text-blue-700 rounded-lg hover:bg-blue-100 transition duration-400">
              <Link to={"/signin"} className="block px-4 py-2">
                Sign in
              </Link>
            </button>
          </div>
          {/* MOBILE MENU BTN */}
          <div className="md:hidden">
            <div
              onClick={toggle}
              className="bg-white p-2 text-blue-700 rounded-lg hover:bg-gray-300 transition duration-400"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 text-center ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {MenuItems.map((item, index) => (
            <div
              key={index}
              className=" border-b border-gray-300 transition-colors duration-300"
            >
              <Link to={item.path} className="p-3 block  min-w-full">
                {item.title}
              </Link>
            </div>
          ))}
          <div className="p-2 border-b border-gray-300">
            <button className="rounded-lg bg-blue-700 text-white w-[80%] mx-auto">
              <Link to={"/signin"} className="block py-3">
                Sign in
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
