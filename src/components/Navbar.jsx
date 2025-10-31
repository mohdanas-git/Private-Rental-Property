import React from "react";
import logo from "../assets/p.jpg";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b py-6 px-8 border-b-neutral-400">
      <div className="flex items-center justify-between gap-2">
        <img
          src={logo}
          alt="Logo"
          className="hidden max-sm:inline-block w-[6vw]"
        />
        <a
          href="/"
          className="text-[1.8rem] italic font-semibold no-underline text-black"
        >
          <span className="text-[2rem] text-red-700">P</span>rivate{" "}
          <span className="text-[2rem] text-red-700">R</span>ental{" "}
          <span className="text-[2rem] text-red-700">P</span>roperty
        </a>
      </div>
      <div className="flex align-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="w-[20vw] h-15 border border-neutral-400 py-2 px-7 rounded-[30px] text-2xl outline-none max-md:w-full"
        />
        <button className="flex items-center justify-between bg-red-700 text-white font-bold border-2 border-transparent rounded-[30px] py-2 px-4 cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-red-700 hover:border-red-700 gap-2">
          <i className="fa-solid fa-magnifying-glass text-[1.2rem] font-normal"></i>
          <span className="text-[1.4rem] font-normal">Search</span>
        </button>
      </div>

      <div className="flex items-center justify-between gap-[2vw]">
        <a href="#" className="flex items-center py-2 px-5 rounded-[30px] text-[1.3rem] transition-all duration-300 ease-in-out hover:bg-[#d2d2d2dd] h-15 text-neutral-600 min-w-fit">
         List your home
        </a>
        <i className="fa-solid fa-bars text-[1.8rem]   hover:bg-neutral-200 py-4 px-4 rounded-[30px] transition-all duration-300 ease-in-out"></i>
        <div className="flex items-center justify-center gap-5 text-3xl border border-[#8f8f8fdd] rounded-[30px] py-2 px-7 text-[#1f1f1fdd] transition-all duration-300 ease-in-out hover:shadow-[1px_1px_12px] hover:shadow-[#2b2b2b] hover:border-[#969696] h-15 hidden md:inline-block ">
        <i className="fa-solid fa-bars text-[1.5rem]"></i>
        <i className="fa-solid fa-user text-[1.5rem]"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;