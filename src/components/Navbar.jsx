import { Link } from "react-router-dom";
import logo from "../assets/p.jpg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b sm:px-4 sm:py-4 border-b-neutral-400">
      <div className="flex items-center justify-between gap-2">
        <img src={logo} alt="Logo" className="w-20 sm:hidden" />
        <a
          href="/"
          className="hidden text-xl italic font-semibold no-underline text-black sm:inline-block"
        >
          <span className="text-2xl text-red-700">P</span>rivate{" "}
          <span className="text-2xl text-red-700">R</span>ental{" "}
          <span className="text-2xl text-red-700">P</span>roperty
        </a>
      </div>

      <div className="flex align-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="w-[22vw] border border-neutral-400 py-2 px-5 rounded-[30px] text-md sm:text-md outline-none max-md:w-full"
        />
        <button className="flex items-center justify-between bg-red-700 text-white font-bold border-2 border-transparent rounded-3xl py-1 px-3 cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-red-700 hover:border-red-700 gap-2">
          <i className="fa-solid fa-magnifying-glass text-[1rem] font-normal"></i>
          <span className="text-1 font-normal hidden sm:inline-block">Search</span>
        </button>
      </div>

      <div className="flex items-center justify-between gap-[2vw]">
        <a href="/listyourhome"
          className="flex items-center py-3 px-5 rounded-3xl text-md transition-all duration-300 ease-in-out hover:bg-[#d2d2d2dd] text-neutral-700 max-md:hidden"
        >
          List your home
        </a>

        {/* <div className="flex flex-col justify-around bg-amber-50">
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
          <Link to="/listyourhome">List Your Home</Link>
          <Link to="/help">Help</Link>
        </div> */}

        <div className="flex items-center justify-between gap-3 border border-[#8f8f8fdd] rounded-3xl px-4 py-3 text-[#1f1f1fdd] transition-all duration-300 ease-in-out hover:shadow-[1px_1px_12px] hover:shadow-[#2b2b2b] hover:border-[#969696] max-md:hidden">
          <i className="fa-solid fa-bars text-xl"></i>
          <i className="fa-solid fa-user text-xl"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
