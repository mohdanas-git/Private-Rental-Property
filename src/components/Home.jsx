import React from "react";
import Navbar from "./Navbar";
import Category from "./Category";
import Footer from "./Footer";
const Home = () => {
  return (
<div className="flex flex-col min-h-screen">
      <Navbar />
  <main className="grow">
        <Category/>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;