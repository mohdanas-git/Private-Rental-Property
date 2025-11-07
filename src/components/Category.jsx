import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import House from "./House";
import Trending from "./Trending";
import Room from "./Room";
import Pool from "./Pool";
import Tent from "./Tent";
import FarmHouse from "./FarmHouse";
import AllProperty from "./AllProperty";

const Category = () => {
  const [cur, setCurr] = useState(0);

  const handler = (id) => {
    setCurr(id);
  };
  return (
    <>
    <div className="flex items-center justify-around text-md my-3 text-center">
      <Link to="/trending"
        onClick={() => handler(1)}
        className={`transition-transform duration-200 pb-1 ${
          cur === 1 ? "scale-110 border-b-2 border-neutral-800" : "scale-100"
        }`}
      >
        <i className="fa-solid fa-fire"></i>
        <p className="text-xs font-medium">Trending</p>
      </Link>

      <Link to="/house"
        onClick={() => handler(2)}
        className={`transition-transform duration-200 pb-1 ${
          cur === 2 ? "scale-110 border-b-2 border-neutral-800" : "scale-100"
        }`}
      >
        <i className="fa-solid fa-house"></i>
        <p className="text-xs font-medium">Home</p>
      </Link>

      <Link to="/room"
        onClick={() => handler(3)}
        className={`transition-transform duration-200 pb-1 ${
          cur === 3 ? "scale-110 border-b-2 border-neutral-800" : "scale-100"
        }`}
      >
        <i className="fa-solid fa-bed"></i>
        <p className="text-xs font-medium">Room</p>
      </Link>

      <Link to="/farm-house"
        onClick={() => handler(4)}
        className={`transition-transform duration-200 pb-1 ${
          cur === 4 ? "scale-110 border-b-2 border-neutral-800" : "scale-100"
        }`}
      >
        <i className="fa-solid fa-house-flag"></i>
        <p className="text-xs font-medium">Farm House</p>
      </Link>

      <Link to="/pool"
        onClick={() => handler(5)}
        className={`transition-transform duration-200 pb-1 ${
          cur === 5 ? "scale-110 border-b-2 border-neutral-800" : "scale-100"
        }`}
      >
        <i className="fa-solid fa-person-swimming"></i>
        <p className="text-xs font-medium">Pool</p>
      </Link>

      <Link to="/tent"
        onClick={() => handler(6)}
        className={`transition-transform duration-200 pb-1 ${
          cur === 6 ? "scale-110 border-b-2 border-neutral-800" : "scale-100"
        }`}
      >
        <i className="fa-solid fa-tent"></i>
        <p className="text-xs font-medium">Tent</p>
      </Link>
    </div>
    <Routes>
        <Route path="/" element={<AllProperty/>} />
        <Route path="/trending" element={<Trending/>} />
        <Route path="/house" element={<House/>} />
        <Route path="/room" element={<Room/>} />
        <Route path="/farm-house" element={<FarmHouse/>} />
        <Route path="/pool" element={<Pool/>} />
        <Route path="/tent" element={<Tent/>} />
    </Routes>
    </>
  );
};

export default Category;
