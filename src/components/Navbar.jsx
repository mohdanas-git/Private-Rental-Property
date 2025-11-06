import { useState } from "react";
import logo from "../assets/p.jpg";
import {Link} from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState({
    mobile: false,
    tab: false,
  });

  return (
      <nav className="flex items-center justify-between border-b sm:px-2 sm:py-4 border-b-neutral-400">
      <div className="flex items-center justify-between gap-2">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-20 sm:hidden" />
        </Link>
        <Link
          to="/"
          className="hidden text-xl italic font-semibold no-underline text-black sm:inline-block"
        >
          <span className="text-2xl text-red-700">P</span>rivate{" "}
          <span className="text-2xl text-red-700">R</span>ental{" "}
          <span className="text-2xl text-red-700">P</span>roperty
        </Link>
      </div>

      
      <div className="flex align-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="w-[22vw] border border-neutral-400 py-2 px-5 rounded-[30px] text-md sm:text-md outline-none max-md:w-full"
        />
        <button className="flex items-center justify-between bg-red-700 text-white font-bold border-2 border-transparent rounded-3xl py-1 px-3 cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-red-700 hover:border-red-700 gap-2">
          <i className="fa-solid fa-magnifying-glass text-[1rem] font-normal"></i>
          <span className="text-1 font-normal hidden sm:inline-block">
            Search
          </span>
        </button>
      </div>

      <div className="relative md:hidden">
        <button onClick={() => setMenu({ ...menu, mobile: !menu.mobile })}>
          <i className="fa-solid fa-bars text-2xl cursor-pointer p-3 rounded-full hover:bg-neutral-200 transition"></i>
        </button>

        {menu.mobile && (
          <div className="absolute right-2 bg-white flex flex-col justify-around p-6 shadow-md shadow-neutral-800 rounded-2xl gap-2 m-w-12 z-10 text-md w-48">
            <Link
              to="/login"
              className="hover:bg-neutral-200 w-fit px-3 py-2 hover:rounded-2xl"
              onClick={() => setMenu({ ...menu, mobile: false })}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="hover:bg-neutral-200 w-fit px-3 py-2 hover:rounded-2xl"
              onClick={() => setMenu({ ...menu, mobile: false })}
            >
              SignUp
            </Link>
             <Link
              to="/list-your-home"
              className="hover:bg-neutral-200 w-fit px-3 py-2 hover:rounded-2xl"
              onClick={() => setMenu({ ...menu, mobile: false })}
            >
              List Your Home
            </Link>
            <Link
              to="/help"
              className="hover:bg-neutral-200 w-fit px-3 py-2 hover:rounded-2xl"
              onClick={() => setMenu({ ...menu, mobile: false })}
            >
              Help
            </Link>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-[2vw] max-md:hidden">
        <Link
          to="/list-your-home"
          className="flex items-center py-3 px-5 rounded-3xl text-md transition-all duration-300 ease-in-out hover:bg-[#d2d2d2dd] text-neutral-700"
        >
          List your home
        </Link>

        <div className="relative">
          <button
            className="flex items-center justify-between gap-3 cursor-pointer border border-[#8f8f8fdd] rounded-3xl px-4 py-3 text-[#1f1f1fdd] transition-all duration-300 ease-in-out hover:shadow-[1px_1px_12px] hover:shadow-[#2b2b2b] hover:border-[#969696] max-md:hidden"
            onClick={() => setMenu({ ...menu, tab: !menu.tab })}
          >
            <i className="fa-solid fa-bars text-xl"></i>
            <i className="fa-solid fa-user text-xl"></i>
          </button>

          {menu.tab && (
            <div className="absolute right-2 bg-white flex flex-col justify-around py-3 px-2 shadow-md shadow-neutral-800 rounded-2xl gap-2 m-w-12 z-10 text-md w-48">
              <Link
                to="/login"
                className="hover:bg-neutral-200 w-fit px-3 py-2 hover:rounded-2xl"
                onClick={() => setMenu({ ...menu, tab: false })}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="hover:bg-neutral-200 w-fit px-3 py-2 hover:rounded-2xl"
                onClick={() => setMenu({ ...menu, tab: false })}
              >
                SignUp
              </Link>
             
              <Link
                to="/help"
                className="hover:bg-neutral-200 w-fit px-3 py-2 hover:rounded-2xl"
                onClick={() => setMenu({ ...menu, tab: false })}
              >
                Help
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
